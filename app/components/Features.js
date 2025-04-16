'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="promo" className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-850">
      <div className="container-custom mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium mb-4">Penawaran Terbatas</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Promo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Spesial</span></h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Dapatkan penawaran spesial dan diskon menarik untuk berbagai layanan kecantikan di Nancy Beauty Art.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/image2.png", alt: "Eyelash 1" },
              { src: "/images/image3.png", alt: "Nail Art" },
              { src: "/images/image4.png", alt: "Eyelash 2" }
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } }}
                className="aspect-video bg-white dark:bg-gray-800 relative rounded-xl overflow-hidden shadow-lg p-6 flex items-center justify-center border border-gray-100 dark:border-gray-700"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md transform rotate-12">Promo</div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={169}
                  className="max-h-full object-contain z-10"
                  loading="eager"
                  quality={95}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-10 md:p-12 rounded-2xl max-w-3xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tertarik dengan Promo Kami?</h3>
              <p className="text-white/90 mb-8 text-lg">
                Jangan lewatkan kesempatan terbatas ini. Hubungi kami sekarang untuk mendapatkan penawaran spesial!
              </p>
              <motion.a
                href="https://wa.me/628888295758?text=Halo%20Nancy%20Beauty%20Art%2C%20saya%20tertarik%20dengan%20promo%20yang%20ditawarkan"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:bg-pink-50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Konsultasi via WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 