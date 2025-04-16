'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Analytics() {
  useEffect(() => {
    // Mendefinisikan variabel A/B Testing
    const abTestVersion = Math.random() < 0.5 ? 'A' : 'B';
    window.abTestVersion = abTestVersion;
    
    // Menetapkan versi untuk A/B Testing pada body
    document.body.setAttribute('data-version', abTestVersion);
    
    // Melacak pengunjung dan interaksi
    if (typeof window !== 'undefined') {
      // Fungsi pelacakan dasar (studi kasus demo)
      window.trackEvent = (eventName, properties = {}) => {
        properties.abTestVersion = abTestVersion;
        properties.timestamp = new Date().toISOString();
        properties.url = window.location.href;
        properties.referrer = document.referrer;
        properties.viewport = `${window.innerWidth}x${window.innerHeight}`;
        
        // Di sini dalam implementasi sebenarnya, data dikirim ke server atau layanan analitik
        console.log('[TRACKING]', eventName, properties);
        
        // Jika terintegrasi dengan Google Analytics
        if (window.gtag) {
          window.gtag('event', eventName, properties);
        }
      };
      
      // Memulai pelacakan halaman yang dilihat
      window.trackEvent('page_view');
      
      // Menyiapkan heatmap (demo)
      setupHeatmap();
    }
  }, []);
  
  // Fungsi demonstrasi untuk heatmap sederhana
  const setupHeatmap = () => {
    if (typeof window !== 'undefined') {
      const heatmapContainer = document.createElement('div');
      heatmapContainer.id = 'heatmap-container';
      heatmapContainer.style.position = 'fixed';
      heatmapContainer.style.top = '0';
      heatmapContainer.style.left = '0';
      heatmapContainer.style.width = '100%';
      heatmapContainer.style.height = '100%';
      heatmapContainer.style.pointerEvents = 'none';
      heatmapContainer.style.zIndex = '9999';
      document.body.appendChild(heatmapContainer);
      
      // Dalam implementasi sebenarnya, gunakan library seperti heatmap.js
      // Di sini hanya contoh sederhana untuk demo
      
      document.addEventListener('click', (e) => {
        // Mencatat klik untuk heatmap
        window.trackEvent('click', {
          x: e.clientX,
          y: e.clientY,
          element: e.target.tagName,
          elementId: e.target.id,
          elementClass: e.target.className,
        });
        
        // Visual feedback (hanya demo)
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
        dot.style.left = `${e.clientX - 5}px`;
        dot.style.top = `${e.clientY - 5}px`;
        heatmapContainer.appendChild(dot);
        
        // Hapus dot setelah 3 detik untuk menghindari overload memori
        setTimeout(() => {
          if (dot.parentNode) {
            dot.parentNode.removeChild(dot);
          }
        }, 3000);
      });
      
      // Melacak scroll
      let lastScrollY = window.scrollY;
      document.addEventListener('scroll', () => {
        // Throttle event untuk menghindari terlalu banyak event
        if (Math.abs(window.scrollY - lastScrollY) > 100) {
          window.trackEvent('scroll', {
            depth: window.scrollY,
            maxDepth: document.body.scrollHeight,
            percentage: (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100,
          });
          lastScrollY = window.scrollY;
        }
      });
    }
  };

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      
      {/* Hotjar Script untuk heatmap profesional */}
      <Script
        id="hotjar"
        strategy="afterInteractive"
      >
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:XXXXXXX,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      
      {/* Facebook Pixel untuk tracking konversi */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
} 