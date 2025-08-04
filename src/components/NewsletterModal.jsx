
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const NewsletterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "🚧 Newsletter",
        description: "Esta funcionalidad no está implementada aún—¡pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      });
      onClose();
    }
  };

  return (
    <motion.div
      className="newsletter-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="newsletter-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡No te pierdas nada!
          </h3>
          <p className="text-gray-600">
            Recibe las últimas noticias legales directamente en tu email. 
            Información actualizada sobre ayudas, empleo y normativas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Suscribirme al Newsletter
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Al suscribirte aceptas nuestra política de privacidad. 
          Puedes darte de baja en cualquier momento.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default NewsletterModal;
