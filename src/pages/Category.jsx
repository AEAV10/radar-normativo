
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, AlertTriangle } from 'lucide-react';

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(() => {
    // Simulated category data
    const categoryData = {
      'ayudas': {
        name: 'Ayudas Públicas',
        description: 'Subvenciones, becas y ayudas económicas disponibles para ciudadanos y empresas',
        articles: [
          {
            id: 1,
            title: "Nueva ayuda de 1.200€ para familias numerosas: requisitos y cómo solicitarla",
            excerpt: "El Gobierno aprueba una nueva prestación económica dirigida a familias con tres o más hijos.",
            date: "2024-01-15",
            isAlert: true
          },
          {
            id: 9,
            title: "Ayudas para la digitalización de pequeñas empresas: hasta 12.000€",
            excerpt: "Nuevo programa de subvenciones para la transformación digital de pymes y autónomos.",
            date: "2024-01-09",
            isAlert: false
          }
        ]
      },
      'empleo': {
        name: 'Empleo',
        description: 'Normativas laborales, derechos de los trabajadores y oportunidades de empleo',
        articles: [
          {
            id: 3,
            title: "Subida del SMI: nuevo salario mínimo interprofesional para 2024",
            excerpt: "El salario mínimo se incrementa hasta los 1.134€ mensuales.",
            date: "2024-01-13",
            isAlert: true
          },
          {
            id: 8,
            title: "Modificaciones en las prestaciones por desempleo",
            excerpt: "Cambios en los requisitos y cuantías de las prestaciones por desempleo.",
            date: "2024-01-08",
            isAlert: false
          }
        ]
      },
      'autonomos': {
        name: 'Autónomos',
        description: 'Información específica para trabajadores autónomos y freelancers',
        articles: [
          {
            id: 4,
            title: "Nuevas bonificaciones para autónomos menores de 30 años",
            excerpt: "Reducciones en las cuotas de la Seguridad Social para jóvenes emprendedores.",
            date: "2024-01-12",
            isAlert: false
          }
        ]
      },
      'fiscalidad': {
        name: 'Fiscalidad',
        description: 'Impuestos, declaraciones y obligaciones fiscales',
        articles: [
          {
            id: 2,
            title: "Cambios en el IRPF 2024: nuevas deducciones y tramos fiscales",
            excerpt: "La reforma fiscal introduce importantes modificaciones que afectarán a la declaración de la renta.",
            date: "2024-01-14",
            isAlert: false
          }
        ]
      },
      'pensiones': {
        name: 'Pensiones',
        description: 'Sistema de pensiones, jubilación y prestaciones sociales',
        articles: [
          {
            id: 5,
            title: "Actualización del sistema de pensiones: qué cambia en 2024",
            excerpt: "Nuevas modificaciones en el cálculo y requisitos de las pensiones de jubilación.",
            date: "2024-01-11",
            isAlert: false
          }
        ]
      },
      'alertas-legales': {
        name: 'Alertas Legales',
        description: 'Cambios normativos urgentes y alertas importantes',
        articles: [
          {
            id: 6,
            title: "Alerta: nueva normativa sobre protección de datos en empresas",
            excerpt: "Entrada en vigor de nuevas obligaciones en materia de protección de datos.",
            date: "2024-01-10",
            isAlert: true
          }
        ]
      }
    };

    const currentCategory = categoryData[category] || {
      name: 'Categoría no encontrada',
      description: '',
      articles: []
    };

    setCategoryInfo(currentCategory);
    setArticles(currentCategory.articles);
  }, [category]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>{categoryInfo.name} - RadarNormativo.com</title>
        <meta name="description" content={`${categoryInfo.description}. Información legal actualizada sobre ${categoryInfo.name.toLowerCase()} en España.`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Category Header */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{categoryInfo.name}</h1>
              <p className="text-xl text-gray-600">{categoryInfo.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {articles.length > 0 ? (
                  <div className="space-y-8">
                    {articles.map((article, index) => (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg p-6 shadow-sm border"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-medium text-blue-600">{categoryInfo.name}</span>
                          {article.isAlert && (
                            <span className="alert-badge">
                              <AlertTriangle className="w-3 h-3" />
                              Alerta Importante
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">
                          <Link to={`/articulo/${article.id}`} className="hover:text-blue-600 transition-colors">
                            {article.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                          <Link
                            to={`/articulo/${article.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            Leer más <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-12 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      No hay artículos disponibles
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Aún no hay contenido publicado en esta categoría. Vuelve pronto para ver las últimas noticias.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Volver al inicio <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* AdSense Sidebar */}
                <div className="adsense-sidebar mb-8">
                  Google AdSense - Lateral (300x250)
                </div>

                {/* Related Categories */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Otras Categorías</h3>
                  <div className="space-y-2">
                    <Link to="/categoria/ayudas" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Ayudas Públicas
                    </Link>
                    <Link to="/categoria/empleo" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Empleo
                    </Link>
                    <Link to="/categoria/autonomos" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Autónomos
                    </Link>
                    <Link to="/categoria/fiscalidad" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Fiscalidad
                    </Link>
                    <Link to="/categoria/pensiones" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Pensiones
                    </Link>
                    <Link to="/categoria/alertas-legales" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                      Alertas Legales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Category;
