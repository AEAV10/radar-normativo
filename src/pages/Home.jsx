import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, AlertTriangle, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allNews } from '@/_posts';
import { toast } from '@/components/ui/use-toast';

const NewsArticle = ({ article }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 md:p-8 shadow-sm border"
    >
      <header className="mb-4">
        <div className="flex items-center gap-4 mb-3">
          {article.isAlert && (
            <span className="alert-badge">
              <AlertTriangle className="w-3 h-3" />
              Alerta Importante
            </span>
          )}
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(article.date)}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {article.title}
        </h2>
      </header>
      
      <div 
        className="prose prose-lg max-w-none mb-6 text-gray-800"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {article.officialLinks && article.officialLinks.length > 0 && (
        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">Enlaces Oficiales</h3>
          <div className="space-y-2">
            {article.officialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
      
      <div className="adsense-content mt-6">
        Google AdSense - Anuncio de Contenido (Adaptable)
      </div>
    </motion.article>
  );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sortedNews = useMemo(() => {
    return allNews.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const filteredNews = useMemo(() => {
    if (!searchQuery) {
      return sortedNews;
    }
    return sortedNews.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedNews]);
  
  const handleSubscribeClick = () => {
    toast({
        title: "🚧 Newsletter",
        description: "Esta funcionalidad no está implementada aún—¡pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>RadarNormativo.com - Información Legal Actualizada para España</title>
        <meta name="description" content="Tu fuente confiable de noticias legales: ayudas públicas, empleo, fiscalidad, pensiones y alertas normativas para ciudadanos de España. Información actualizada diariamente." />
        <meta name="keywords" content="noticias legales, ayudas públicas, empleo España, fiscalidad, pensiones, autónomos, alertas legales" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                  Últimas Noticias y Alertas Legales
                </h1>
                <p className="text-lg text-center text-gray-600">
                  Toda la información normativa que necesitas, en un solo lugar.
                </p>
              </div>

              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar en las noticias..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg search-input focus:outline-none text-lg"
                />
              </div>

              <div className="space-y-8">
                <AnimatePresence>
                  {filteredNews.length > 0 ? (
                    filteredNews.map(article => (
                      <NewsArticle key={article.id} article={article} />
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 bg-white rounded-lg border"
                    >
                      <p className="text-gray-600 text-lg">No se encontraron noticias para "{searchQuery}".</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Mantente Siempre Informado</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Suscríbete a nuestro newsletter para recibir un resumen semanal con las noticias legales más importantes directamente en tu email.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleSubscribeClick}>
                  Suscribirme al Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;