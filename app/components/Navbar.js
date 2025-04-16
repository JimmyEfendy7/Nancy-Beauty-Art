'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi section yang sedang aktif berdasarkan scroll position
      const sections = ['beranda', 'fitur', 'produk', 'tentang', 'testimonial', 'kontak'];
      const scrollPosition = window.scrollY + 100; // offset untuk navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    
    // Track analitik jika tersedia
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('menu_click', { section: sectionId });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom mx-auto flex justify-center items-center">
        <motion.div 
          className="font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/" 
            className="flex items-center" 
            onClick={() => handleMenuClick('beranda')}
            aria-label="Logo NancyBeautyArt, kembali ke beranda"
          >
            <Image 
              src="/images/logo.png" 
              alt="NancyBeautyArt Logo" 
              width={100} 
              height={50} 
              className="hover:opacity-90 transition-opacity duration-300"
              priority
            />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
} 