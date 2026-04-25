import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWS Women User Group Goiânia",
  description:
    "Comunidade de mulheres focada em estudos AWS, carreira e certificações em Goiânia.",
  keywords: [
    "AWS",
    "Women in Tech",
    "Cloud Computing",
    "Goiânia",
    "Certificações AWS",
    "Comunidade",
  ],
  openGraph: {
    title: "AWS Women User Group Goiânia",
    description:
      "Comunidade de mulheres focada em estudos AWS, carreira e certificações.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
