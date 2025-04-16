'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Cindy Puspita',
    role: 'Model',
    content: 'Cece sayang, makasih banyak ya, sudah buat akho semakin syantik.. puas banget sama hasilnya.',
    avatar: '/images/avatar-4.svg',
    image: '/images/image8.png',
    rating: 5,
  },
  {
    name: 'Irma Susanti',
    role: 'Bidan',
    content: 'Makasih banyak ya mba say. Udah cantik ramah baik juga, nilai +++ buat pelayanannya.',
    avatar: '/images/avatar-1.svg',
    image: '/images/image5.png',
    rating: 5,
  },
  {
    name: 'Titin Sari',
    role: 'Selebgram',
    content: 'Kak.. hasilnya cantik banget, 3x sulam lesung pipi di kaka ga pernah gagal.',
    avatar: '/images/avatar-2.svg',
    image: '/images/image6.png',
    rating: 5,
  },
  {
    name: 'Dew Lestari',
    role: 'konten Kreator',
    content: 'Dari Singapoore pulang ke indo buat perawatan ke Nancy Beauty Art. Next aku mau pesan serum nya lagi yaa.',
    avatar: '/images/avatar-3.svg',
    image: '/images/image7.png',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showImageOverlay, setShowImageOverlay] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const toggleImageOverlay = () => {
    setShowImageOverlay(!showImageOverlay);
  };

  return (
    <section id="testimonial" className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Testimoni Pelanggan</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apa Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Pelanggan Kami</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Kami bangga dengan kepuasan klien kami. Berikut adalah beberapa testimoni dari mereka yang telah menggunakan layanan kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5 }
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md h-80 cursor-pointer"
              onClick={toggleImageOverlay}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-2xl -rotate-6 scale-105 z-0"></div>
              <Image
                src={testimonials[activeIndex].image}
                alt={`Testimonial dari ${testimonials[activeIndex].name}`}
                className="rounded-2xl shadow-xl relative z-10"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="eager"
                quality={90}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10h.01M15 10h.01M12 10h.01" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <div className="relative p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <svg 
                className="absolute -top-6 left-10 w-12 h-12 text-pink-500 opacity-20"
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
              </svg>

              <div className="relative">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden shadow-md border-2 border-pink-200 dark:border-pink-900/30">
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].name}
                        fill
                        sizes="56px"
                        style={{
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-pink-500' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex justify-between mt-8">
                  <motion.button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-6' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                  <motion.button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Overlay */}
      <AnimatePresence>
        {showImageOverlay && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
            onClick={toggleImageOverlay}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full aspect-video bg-black/50 rounded-lg overflow-hidden">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={`Testimonial dari ${testimonials[activeIndex].name}`}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
              
              <button 
                onClick={toggleImageOverlay}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 