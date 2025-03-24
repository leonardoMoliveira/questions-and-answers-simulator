import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";

import { Provider } from "@/components/ui/provider"

import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  title: 'Simulados para Concursos Públicos',
  description: 'App para simular provas de concursos públicos',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${barlowSemiCondensed.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
