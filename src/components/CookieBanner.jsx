
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBanner = ({ onAccept, onReject }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="cookie-banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. 
              Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
              <Link to="/politica-cookies" className="text-blue-400 hover:text-blue-300 underline">
                Política de Cookies
              </Link>.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onReject}
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              Rechazar
            </Button>
            <Button
              size="sm"
              onClick={onAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
