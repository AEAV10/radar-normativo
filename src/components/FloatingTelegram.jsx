
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FloatingTelegram = () => {
  const handleTelegramClick = () => {
    toast({
      title: "🚧 Canal de Telegram",
      description: "Esta funcionalidad no está implementada aún—¡pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <motion.button
      className="floating-telegram"
      onClick={handleTelegramClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingTelegram;
