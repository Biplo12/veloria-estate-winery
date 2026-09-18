// Every image the site renders, checked for the one fault that keeps recurring:
// a painting whose own paper is not the page's paper, dropped onto the cream
// with nothing to hide where it ends.
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const PROJECT = path.resolve(import.meta.dirname, "..");
const require = createRequire(path.join(PROJECT, "package.json"));
const sharp = require("sharp");
sharp.cache(false);

const PAPER = [244, 234, 221];

/**
 * Bare edges that have been looked at and are not faults. A check that reports
 * known-good cases as problems gets ignored, and then it catches nothing.
 */
const ACCEPTED = {
  "tasting-room-poster":
    "pokrywa cala ciemna sekcje pod scrimem, nigdy nie styka sie z kremem",
};

/**
 * Past this distance from the page cream the edge is plainly a different
 * colour, so it reads as a picture with a frame rather than as paper that
 * failed to match. The fault worth catching lives in the narrow band between:
 * close enough to look like a mistake, far enough to be seen.
 */
const OBVIOUSLY_A_PICTURE = 40;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.tsx?$/.test(e.name)) acc.push(p);
  }
  return acc;
}

// where each image is used, and whether that usage fades its edges
const uses = new Map();
for (const file of walk(path.join(PROJECT, "src"))) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(/src="\/images\/([a-z0-9-]+)\.webp"/g)) {
    const name = m[1];
    // look back a little for the wrapper that carries the mask
    const before = src.slice(Math.max(0, m.index - 600), m.index);
    const masked = /band-dissolve/.test(before.split("<Image")[0] ?? before);
    if (!uses.has(name)) uses.set(name, []);
    uses.get(name).push({
      file: path.relative(PROJECT, file).split(path.sep).join("/"),
      masked,
    });
  }
}

const rows = [];
for (const [name, places] of [...uses].sort()) {
  const file = path.join(PROJECT, "public/images", name + ".webp");
  if (!fs.existsSync(file)) {
    rows.push({ name, verdict: "PLIK NIE ISTNIEJE", places });
    continue;
  }
  const { data, info } = await sharp(fs.readFileSync(file))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;

  // outer frame: what actually meets the page
  let r = 0, g = 0, b = 0, a = 0, n = 0;
  const add = (x, y) => {
    const i = (y * w + x) * ch;
    r += data[i]; g += data[i + 1]; b += data[i + 2]; a += data[i + 3]; n++;
  };
  for (let x = 0; x < w; x += 2) {
    for (let y = 0; y < 6; y++) add(x, y);
    for (let y = h - 6; y < h; y++) add(x, y);
  }
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < 6; x++) add(x, y);
    for (let x = w - 6; x < w; x++) add(x, y);
  }
  const alpha = a / n;
  const edge = [r / n, g / n, b / n].map(Math.round);
  const dist = Math.hypot(edge[0] - PAPER[0], edge[1] - PAPER[1], edge[2] - PAPER[2]);

  const transparent = alpha < 20;
  const anyUnmasked = places.some((p) => !p.masked);

  let verdict;
  if (transparent) verdict = "ok — wyciety (alpha)";
  else if (!anyUnmasked) verdict = "ok — wygaszony maska";
  else if (dist < 4) verdict = "ok — papier zgodny z tlem";
  else if (ACCEPTED[name]) verdict = `ok — ${ACCEPTED[name]}`;
  else if (dist >= OBVIOUSLY_A_PICTURE)
    verdict = `ok — obraz do wlasnych krawedzi (${dist.toFixed(0)} od tla), czyta sie jako obraz`;
  else verdict = `!! SZEW — papier o ${dist.toFixed(0)} od tla, bez maski`;

  rows.push({ name, edge, dist, alpha: Math.round(alpha), verdict, places });
}

for (const row of rows) {
  const where = row.places.map((p) => `${p.file}${p.masked ? " [maska]" : ""}`).join(", ");
  console.log(`${row.name.padEnd(26)} ${row.verdict}`);
  console.log(`${"".padEnd(26)} ${where}`);
}

const bad = rows.filter((r) => r.verdict.startsWith("!!"));
console.log(`\n${rows.length} obrazow uzywanych, ${bad.length} z problemem`);
