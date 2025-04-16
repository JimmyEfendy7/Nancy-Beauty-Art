'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Track hero view untuk analisis
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('hero_view');
    }
  }, []);

  const handleCtaClick = (variant) => {
    // Track klik CTA untuk analisis
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('cta_click', { 
        button: variant,
        section: 'hero',
      });
    }
    
    // Arahkan ke WhatsApp jika CTA whatsapp diklik
    if (variant === 'whatsapp') {
      const message = encodeURIComponent('Halo Nancy Beauty Art, saya tertarik dengan promo yang ditawarkan.');
      window.open(`https://wa.me/628888295758?text=${message}`, '_blank');
    }
  };

  return (
    <section id="beranda" className="section min-h-screen pt-28 md:pt-32 flex items-center bg-gradient-to-br from-pink-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400 leading-tight">
                Spesial Promo <br />Nancy Beauty Art
              </h1>
              
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                Tampil memukau dengan layanan kecantikan dari Nancy Beauty Art. 
                Jadikan dirimu lebih cantik dan percaya diri dengan layanan terbaik kami.
              </p>

              <motion.div
                className="bg-white/90 dark:bg-gray-800/90 p-5 rounded-xl shadow-lg border border-pink-200 dark:border-pink-800/30 mb-10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="text-lg font-semibold text-pink-500 dark:text-pink-300 mb-3">Promo Bulan Ini:</p>
                <ul className="mt-2 space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-800 dark:text-gray-200">Paket 5x free 1x</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-800 dark:text-gray-200">Gratis Konsultasi untuk penyesuaian gaya!</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                className="btn-primary bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-xl shadow-xl flex items-center justify-center hover:shadow-pink-300/30 dark:hover:shadow-pink-900/30"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCtaClick('whatsapp')}
                data-testid="hero-cta-whatsapp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="font-medium">Konsultasi Sekarang</span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-white dark:bg-gray-800 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-900/30 rounded-xl hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors duration-300 font-medium flex items-center justify-center shadow-md"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.2)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleCtaClick('lihat_promo')}
                data-testid="hero-cta-secondary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span>Lihat Semua Promo</span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-lg h-80 md:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-2xl -rotate-6 scale-105 z-0"></div>
              <Image
                src="/images/image1.png"
                alt="Nancy Beauty Art Promo"
                className="rounded-2xl shadow-2xl relative z-10"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                priority={true}
                quality={95}
                style={{
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 