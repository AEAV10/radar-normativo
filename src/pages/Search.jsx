
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search as SearchIcon, Calendar, ArrowRight } from 'lucide-react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate search functionality
    const performSearch = () => {
      setIsLoading(true);
      
      // Simulated search results
      const allArticles = [
        {
          id: 1,
          title: "Nueva ayuda de 1.200€ para familias numerosas: requisitos y cómo solicitarla",
          excerpt: "El Gobierno aprueba una nueva prestación económica dirigida a familias con tres o más hijos.",
          category: "Ayudas",
          date: "2024-01-15"
        },
        {
          id: 2,
          title: "Cambios en el IRPF 2024: nuevas deducciones y tramos fiscales",
          excerpt: "La reforma fiscal introduce importantes modificaciones que afectarán a la declaración de la renta.",
          category: "Fiscalidad",
          date: "2024-01-14"
        },
        {
          id: 3,
          title: "Subida del SMI: nuevo salario mínimo interprofesional para 2024",
          excerpt: "El salario mínimo se incrementa hasta los 1.134€ mensuales.",
          category: "Empleo",
          date: "2024-01-13"
        },
        {
          id: 4,
          title: "Nuevas bonificaciones para autónomos menores de 30 años",
          excerpt: "Reducciones en las cuotas de la Seguridad Social para jóvenes emprendedores.",
          category: "Autónomos",
          date: "2024-01-12"
        }
      ];

      // Filter articles based on search query
      const filteredResults = query 
        ? allArticles.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            article.category.toLowerCase().includes(query.toLowerCase())
          )
        : [];

      setTimeout(() => {
        setResults(filteredResults);
        setIsLoading(false);
      }, 500);
    };

    performSearch();
  }, [query]);

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
        <title>{query ? `Resultados para "${query}"` : 'Buscar'} - RadarNormativo.com</title>
        <meta name="description" content={`Resultados de búsqueda para "${query}" en RadarNormativo.com`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-3xl font-bold mb-4 text-gray-900">
                {query ? `Resultados para "${query}"` : 'Buscar'}
              </h1>
              {query && (
                <p className="text-gray-600">
                  {isLoading ? 'Buscando...' : `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {isLoading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-sm animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  ))}
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-blue-600">{article.category}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-gray-900">
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
              ) : query ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-12 text-center shadow-sm"
                >
                  <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    No se encontraron resultados
                  </h3>
                  <p className="text-gray-600 mb-6">
                    No hemos encontrado artículos que coincidan con tu búsqueda "{query}".
                    Intenta con otros términos o explora nuestras categorías.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link
                      to="/categoria/ayudas"
                      className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      Ayudas
                    </Link>
                    <Link
                      to="/categoria/empleo"
                      className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      Empleo
                    </Link>
                    <Link
                      to="/categoria/fiscalidad"
                      className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      Fiscalidad
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-12 text-center shadow-sm"
                >
                  <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Buscar en RadarNormativo
                  </h3>
                  <p className="text-gray-600">
                    Utiliza el buscador en la parte superior para encontrar información legal específica.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
