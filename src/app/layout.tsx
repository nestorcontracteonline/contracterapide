import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContracteRapide.ro — Contracte legale în 5 minute",
  description: "Generează contracte legale românești în 5 minute. Perfect pentru PFA-uri IT, freelanceri, agenți imobiliari și de asigurări. Semnare electronică inclusă.",
  keywords: "contract prestari servicii, contract PFA, contract freelancer, NDA Romania, contract agent imobiliar, semnatura electronica",
  openGraph: {
    title: "ContracteRapide.ro",
    description: "Contracte legale în 5 minute",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
