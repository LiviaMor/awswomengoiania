import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
