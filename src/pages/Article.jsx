
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ExternalLink, AlertTriangle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Simulated article data
    const articlesData = {
      1: {
        id: 1,
        title: "Nueva ayuda de 1.200€ para familias numerosas: requisitos y cómo solicitarla",
        content: `
          <p>El Gobierno ha aprobado una nueva prestación económica de hasta 1.200€ anuales dirigida específicamente a familias numerosas, con el objetivo de apoyar a las familias con mayor número de hijos en el contexto económico actual.</p>
          
          <h2>¿Quién puede solicitar esta ayuda?</h2>
          <p>Podrán beneficiarse de esta nueva prestación las familias que cumplan los siguientes requisitos:</p>
          <ul>
            <li>Tener reconocida la condición de familia numerosa</li>
            <li>Contar con tres o más hijos a cargo</li>
            <li>No superar determinados umbrales de renta familiar</li>
            <li>Estar empadronados en territorio español</li>
          </ul>
          
          <h2>Cuantías de la ayuda</h2>
          <p>La ayuda se estructura en diferentes tramos según el número de hijos:</p>
          <ul>
            <li>Familias con 3 hijos: 600€ anuales</li>
            <li>Familias con 4 hijos: 900€ anuales</li>
            <li>Familias con 5 o más hijos: 1.200€ anuales</li>
          </ul>
          
          <h2>Cómo solicitar la prestación</h2>
          <p>La solicitud deberá presentarse a través de la sede electrónica del Ministerio de Derechos Sociales, aportando la siguiente documentación:</p>
          <ul>
            <li>Título de familia numerosa vigente</li>
            <li>Declaración de la renta del ejercicio anterior</li>
            <li>Certificado de empadronamiento</li>
            <li>Libro de familia actualizado</li>
          </ul>
          
          <h2>Plazos y fechas importantes</h2>
          <p>El plazo de solicitud estará abierto desde el 1 de febrero hasta el 31 de mayo de 2024. Las resoluciones se comunicarán antes del 30 de septiembre, y el abono se realizará en el último trimestre del año.</p>
        `,
        category: "Ayudas",
        date: "2024-01-15",
        isAlert: true,
        officialLinks: [
          {
            title: "Ministerio de Derechos Sociales",
            url: "https://www.mdsocialesa2030.gob.es"
          },
          {
            title: "Sede Electrónica - Solicitud",
            url: "https://sede.mdsocialesa2030.gob.es"
          }
        ]
      },
      2: {
        id: 2,
        title: "Cambios en el IRPF 2024: nuevas deducciones y tramos fiscales",
        content: `
          <p>La reforma fiscal para 2024 introduce importantes modificaciones en el Impuesto sobre la Renta de las Personas Físicas (IRPF) que afectarán a millones de contribuyentes españoles.</p>
          
          <h2>Nuevos tramos fiscales</h2>
          <p>Se han modificado los tramos del impuesto para hacer el sistema más progresivo:</p>
          <ul>
            <li>Hasta 12.450€: 19%</li>
            <li>De 12.450€ a 20.200€: 24%</li>
            <li>De 20.200€ a 35.200€: 30%</li>
            <li>De 35.200€ a 60.000€: 37%</li>
            <li>De 60.000€ a 300.000€: 45%</li>
            <li>Más de 300.000€: 47%</li>
          </ul>
          
          <h2>Nuevas deducciones</h2>
          <p>Se introducen nuevas deducciones fiscales:</p>
          <ul>
            <li>Deducción por gastos de guardería: hasta 1.000€</li>
            <li>Deducción por rehabilitación energética: hasta 5.000€</li>
            <li>Deducción por cuidado de mayores: hasta 1.500€</li>
          </ul>
          
          <h2>Entrada en vigor</h2>
          <p>Estos cambios entrarán en vigor el 1 de enero de 2024 y se aplicarán en la declaración de la renta correspondiente al ejercicio 2024, que se presentará en 2025.</p>
        `,
        category: "Fiscalidad",
        date: "2024-01-14",
        isAlert: false,
        officialLinks: [
          {
            title: "Agencia Tributaria",
            url: "https://www.agenciatributaria.es"
          }
        ]
      }
    };

    const currentArticle = articlesData[id];
    setArticle(currentArticle);

    // Simulated related articles
    setRelatedArticles([
      { id: 3, title: "Subida del SMI: nuevo salario mínimo interprofesional para 2024", category: "Empleo" },
      { id: 4, title: "Nuevas bonificaciones para autónomos menores de 30 años", category: "Autónomos" }
    ]);
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Enlace copiado",
        description: "El enlace del artículo se ha copiado al portapapeles",
      });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Artículo no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - RadarNormativo.com</title>
        <meta name="description" content={article.content.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.replace(/<[^>]*>/g, '').substring(0, 160)} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-6"
              >
                <Link
                  to="/"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Volver al inicio
                </Link>
              </motion.div>

              {/* Article Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-8 mb-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                  {article.isAlert && (
                    <span className="alert-badge">
                      <AlertTriangle className="w-3 h-3" />
                      Alerta Importante
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {article.title}
                </h1>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Compartir
                  </Button>
                </div>
              </motion.header>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Article Content */}
                <div className="lg:w-2/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-lg p-8 shadow-sm"
                  >
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* AdSense Content Ad */}
                    <div className="adsense-content">
                      Google AdSense - Anuncio de Contenido (336x280)
                    </div>

                    {/* Official Links */}
                    {article.officialLinks && article.officialLinks.length > 0 && (
                      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Enlaces Oficiales</h3>
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
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                  {/* AdSense Sidebar */}
                  <div className="adsense-sidebar mb-8">
                    Google AdSense - Lateral (300x250)
                  </div>

                  {/* Related Articles */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold mb-4 text-gray-900">Artículos Relacionados</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <div key={relatedArticle.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <Link to={`/articulo/${relatedArticle.id}`}>
                            <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors mb-2">
                              {relatedArticle.title}
                            </h4>
                          </Link>
                          <span className="text-sm text-gray-500">{relatedArticle.category}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Newsletter Signup */}
                  <div className="bg-blue-50 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">¿Te ha gustado este artículo?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Suscríbete a nuestro newsletter para recibir más contenido como este.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Suscribirme
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Article;
