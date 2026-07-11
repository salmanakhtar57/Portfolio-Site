import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Script from "next/script";
import { metadataSEO } from "@/config/seo";
import { RouteTransition } from "@/components/motion/Reveal";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://mehak-naqvi.vercel.app/";

export const metadata: Metadata = metadataSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <RouteTransition>{children}</RouteTransition>

        {/* Structured Data: Directly connects your portfolio to your LinkedIn and GitHub */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Salman AKhtar",
              alternateName: "salman-akhtar",
              url: "https://mehak-naqvi.vercel.app",
              image:
                "https://mehak-naqvi.vercel.app/photo-gallery/portfolio.jpg",
              jobTitle: "Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "WanderCode",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              sameAs: [
                "https://www.linkedin.com/in/salman-akhtar-09a210198/",
                "https://github.com/salmanakhtar57",
              ],
              description:
                "Backend developer specializing in Python, Django, FastAPI, PostgreSQL, and RESTful APIs.",
            }),
          }}
        />
      </body>
    </html>
  );
}
