import '@mantine/core/styles.css';

import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

import theme from '@/theme';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${barlowSemiCondensed.variable} antialiased`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
