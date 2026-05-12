import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Isaac Duwe — Desenvolvedor Web & Builder',
  description:
    'Portfólio de Isaac Duwe Rodrigues — desenvolvedor web de 16 anos que constrói produtos reais com React, Vite e Supabase.',
  keywords: ['desenvolvedor web', 'portfolio', 'React', 'Next.js', 'São Paulo'],
  authors: [{ name: 'Isaac Duwe Rodrigues' }],
  openGraph: {
    title: 'Isaac Duwe — Desenvolvedor Web & Builder',
    description: 'Crio produtos reais. Com 16 anos.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac Duwe — Desenvolvedor Web',
    description: 'Crio produtos reais. Com 16 anos.',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
