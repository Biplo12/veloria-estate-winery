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

const DESCRIPTION =
  "A family estate on the southern hills of Siena. Forty-two hectares, picked by hand, and wines that are asked to wait — open to visitors from spring through harvest.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://veloria-estate-winery.vercel.app",
  ),
  title: {
    default: "Veloria Estate Winery",
    template: "%s · Veloria Estate Winery",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Veloria Estate Winery",
    title: "Veloria Estate Winery",
    description: DESCRIPTION,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloria Estate Winery",
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/* Reveal animations start hidden. Without scripting they must not stay
            that way — an animation is never the reason something cannot be read. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
