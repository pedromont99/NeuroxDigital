import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Whatsapp from "@/components/Whatsapp";
import CookieConsent from "@/components/CookieConsent";

// 1. Configuração da Fonte
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 2. Configuração do SEO e Favicon
export const metadata: Metadata = {
  title: 'Clean4You | Limpeza Profunda e Bem-estar',
  description: 'Higienização profissional de estofos, sofás e colchões na Margem Sul e periferia de Lisboa. Orçamento gratuito em menos de 24 horas.',
  icons: {
    icon: '/icon.png', // Garante que o ficheiro está na pasta /public
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// 3. O ÚNICO RootLayout que o site precisa
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className} font-sans antialiased`}>
        {/* O conteúdo das páginas entra aqui */}
        {children}

        {/* O WhatsApp fica flutuante em todas as páginas */}
        <Whatsapp />

        {/* Banner de consentimento de cookies, gate para o GTM futuro */}
        <CookieConsent />
      </body>
    </html>
  );
}