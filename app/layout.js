import './globals.css'
import Analytics from './components/Analytics';

export const metadata = {
  title: 'Nancy Beauty Art - Sulam Lesung Pipi',
  description: 'Landing Pages promo menarik sulam lesung pipi.',
  keywords: 'eyelash, sulam, lesung pipi, perawatan, kecantikan',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Nancy Beauty Art - Sulam Lesung Pipi',
    description: 'Landing Pages promo menarik sulam lesung pipi',
    url: 'https://sulamlesungpipi.web.id',
    siteName: 'Nancy Beauty Art',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'nancybeautyart',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nancy Beauty Art - Sulam Lesung Pipi',
    description: 'Landing Pages promo menarik sulam lesung pipi.',
    images: ['/images/twitter-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://sulamlesungpipi.web.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3B82F6" />
        {/* Struktur data untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NancyBeautyArt',
              url: 'https://sulamlesungpipi.web.id',
              logo: 'https://sulamlesungpipi.web.id/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62-8888295758',
                contactType: 'customer service',
                areaServed: 'ID',
                availableLanguage: 'Indonesian',
              },
              sameAs: [
                'https://facebook.com/minangbits',
                'https://twitter.com/minangbits',
                'https://instagram.com/jimmy_efendy7',
                'https://linkedin.com/company/minangbits',
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 