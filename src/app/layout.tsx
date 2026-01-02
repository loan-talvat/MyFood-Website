import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Snaqy - Suivi nutritionnel simplifié par IA",
    template: "%s | Snaqy",
  },
  description:
    "Suivez votre alimentation en une photo. Snaqy analyse automatiquement vos repas grâce à l'IA et vous aide à atteindre vos objectifs nutritionnels.",
  keywords: [
    "suivi alimentaire",
    "compteur calories",
    "tracker nutrition",
    "journal alimentaire",
    "calcul calories IA",
    "suivi macros",
    "application nutrition",
    "snaqy",
  ],
  authors: [{ name: "Snaqy" }],
  creator: "Snaqy",
  metadataBase: new URL("https://snaqy.io"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Snaqy",
    title: "Snaqy - Suivi nutritionnel simplifié par IA",
    description:
      "Suivez votre alimentation en une photo. Snaqy analyse automatiquement vos repas grâce à l'IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snaqy - Suivi nutritionnel simplifié par IA",
    description:
      "Suivez votre alimentation en une photo. Snaqy analyse automatiquement vos repas grâce à l'IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
