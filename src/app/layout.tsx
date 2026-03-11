import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContracteRapide.ro — Contracte pentru PFA și Freelanceri | Gata în 5 Minute",
  description: "Protejează-te juridic ca PFA sau freelancer IT. Contracte de prestări servicii, NDA și colaborare conform legislației române 2026. 15 RON, fără abonament.",
  keywords: "contract prestari servicii PFA IT, contract freelancer Romania, protectie juridica PFA, NDA Romania 2026, contract colaborare freelancer, contract agent imobiliar, semnatura electronica, contract conform legislatie romana",
  openGraph: {
    title: "ContracteRapide.ro — Protecție juridică pentru PFA și freelanceri",
    description: "Contract de prestări servicii pentru PFA IT — gata în 5 minute, conform legislației 2026. 15 RON, fără abonament.",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContracteRapide.ro",
    description: "Contracte legale pentru PFA și freelanceri. 15 RON, gata în 5 minute.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://contracterapide.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="ro">
      <head>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ContracteRapide.ro",
              "url": "https://contracterapide.ro",
              "description": "Contracte legale pentru PFA și freelanceri români. Gata în 5 minute, 15 RON.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://contracterapide.ro/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
