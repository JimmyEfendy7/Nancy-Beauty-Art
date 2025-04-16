import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load komponen yang tidak perlu dimuat langsung
const Features = dynamic(() => import('./components/Features'), {
  loading: () => <div className="section bg-gray-50 dark:bg-gray-900 min-h-[500px] flex items-center justify-center">
    <div className="animate-pulse text-primary">Memuat...</div>
  </div>
});

const Testimonials = dynamic(() => import('./components/Testimonials'), {
  loading: () => <div className="section bg-white dark:bg-gray-800 min-h-[500px] flex items-center justify-center">
    <div className="animate-pulse text-primary">Memuat...</div>
  </div>
});

const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="section bg-gray-50 dark:bg-gray-900 min-h-[500px] flex items-center justify-center">
    <div className="animate-pulse text-primary">Memuat...</div>
  </div>
});

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="bg-gray-900 text-white min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-primary">Memuat...</div>
  </div>
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
} 