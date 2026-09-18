import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

/* Jost — a geometric humanist in the Futura line. Tracked wide in caps it is
   the vernacular of modern natural-wine labels, which is exactly the company
   this naive gouache keeps. */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloria Estate Winery",
  description:
    "A family estate on the slope above Veloria — vineyards, cellar and table, open to visitors from spring through harvest.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
