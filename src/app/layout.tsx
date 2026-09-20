import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "A family estate on the southern hills of Siena. Forty-two hectares, picked by hand, and wines that are asked to wait, open to visitors from spring through harvest.";

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
            that way, an animation is never the reason something cannot be read. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-xs focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:outline-2 focus:outline-offset-2 focus:outline-vermilion"
        >
          Skip to content
        </a>
        {/* The header sits absolutely over whatever follows, so every page is
            responsible for clearing it, the hero by composition, the rest
            through <PageIntro>. */}
        <SiteHeader />
        {/* tabIndex -1 so the skip link actually moves focus, not just the
            viewport, without it the next Tab returns to the header. */}
        <div
          id="content"
          tabIndex={-1}
          className="flex flex-1 flex-col outline-none"
        >
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
