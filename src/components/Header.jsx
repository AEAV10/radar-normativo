import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const legalLinks = [
    { name: 'Aviso Legal', path: '/aviso-legal' },
    { name: 'Privacidad', path: '/politica-privacidad' },
    { name: 'Cookies', path: '/politica-cookies' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="adsense-banner">
        Google AdSense - Banner Superior (728x90)
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://horizons-cdn.hostinger.com/146e7d56-b1cc-4518-bb1a-777d880c6cda/214d26e1282a28ba0d6cc8764e67f3da.png" 
              alt="Logo de RadarNormativo" 
              className="w-10 h-10 object-contain" 
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">RadarNormativo</h1>
              <p className="text-xs text-gray-600">Información legal actualizada</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t py-4"
          >
            <nav>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;