'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container-custom mx-auto relative z-10">
        <motion.div 
          className="border-t border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© {currentYear} Nancy Beauty Art. Hak Cipta Dilindungi.</p>
          <p className="mt-2 sm:mt-0">Design and develop by <span className="text-pink-500">♥</span> <a href="https://jimmyefendi.my.id" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors duration-300">Jimmy Efendi</a></p>
        </motion.div>
      </div>
    </footer>
  );
} 