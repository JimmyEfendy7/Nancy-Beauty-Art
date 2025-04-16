import './globals.css'
import Analytics from './components/Analytics';

export const metadata = {
  title: 'MinangBits - Solusi Digital Profesional',
  description: 'MinangBits menyediakan layanan digital profesional dengan tampilan yang bagus, rapi, kreatif, dan responsif untuk mengembangkan bisnis Anda.',
  keywords: 'digital agency, website profesional, landing page, pengembangan bisnis, minangbits',
  openGraph: {
    title: 'MinangBits - Solusi Digital Profesional',
    description: 'MinangBits menyediakan layanan digital profesional dengan tampilan yang bagus, rapi, kreatif, dan responsif untuk mengembangkan bisnis Anda.',
    url: 'https://minangbits.com',
    siteName: 'MinangBits',
    images: [
      {
        url: '/images/og-image.jpg',
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
    title: 'MinangBits - Solusi Digital Profesional',
    description: 'MinangBits menyediakan layanan digital profesional dengan tampilan yang bagus, rapi, kreatif, dan responsif untuk mengembangkan bisnis Anda.',
    images: ['/images/twitter-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://minangbits.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3B82F6" />
        {/* Struktur data untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MinangBits',
              url: 'https://minangbits.com',
              logo: 'https://minangbits.com/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62-812-3456-7890',
                contactType: 'customer service',
                areaServed: 'ID',
                availableLanguage: 'Indonesian',
              },
              sameAs: [
                'https://facebook.com/minangbits',
                'https://twitter.com/minangbits',
                'https://instagram.com/minangbits',
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