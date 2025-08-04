import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import FloatingTelegram from '@/components/FloatingTelegram';
import NewsletterModal from '@/components/NewsletterModal';
import Home from '@/pages/Home';
import LegalNotice from '@/pages/LegalNotice';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import Contact from '@/pages/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }

    const newsletterShown = localStorage.getItem('newsletterShown');
    if (!newsletterShown) {
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  const handleCookieReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieBanner(false);
  };

  const handleNewsletterClose = () => {
    localStorage.setItem('newsletterShown', 'true');
    setShowNewsletterModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      
      <AnimatePresence>
        {showCookieBanner && (
          <CookieBanner 
            onAccept={handleCookieAccept}
            onReject={handleCookieReject}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNewsletterModal && (
          <NewsletterModal onClose={handleNewsletterClose} />
        )}
      </AnimatePresence>

      <FloatingTelegram />
      <Toaster />
    </div>
  );
}

export default App;