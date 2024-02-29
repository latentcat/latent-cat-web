import {type Metadata, Viewport} from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://latentcat.com'),
  title: 'Latent Cat',
  description:
    'Latent Cat - An AI R&D group',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Troy Ni',
    images: '/assets/latentcat.jpg'
  },
}


export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
    <head>
      <link rel="manifest" href="/manifest.json"/>
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta content="yes" name="apple-mobile-web-app-capable"/>
      <meta name="theme-color" content="#000000"/>
    </head>
    <body className="flex min-h-full flex-col bg-white dark:bg-black">
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
