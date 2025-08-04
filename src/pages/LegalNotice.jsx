
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal - RadarNormativo.com</title>
        <meta name="description" content="Aviso legal de RadarNormativo.com. Información sobre el titular del sitio web, condiciones de uso y responsabilidades." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm"
          >
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Aviso Legal</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Datos Identificativos</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
                a continuación se reflejan los siguientes datos:
              </p>
              <ul>
                <li><strong>Denominación social:</strong> RadarNormativo.com</li>
                <li><strong>Domicilio:</strong> [Dirección completa]</li>
                <li><strong>CIF:</strong> [Número de identificación fiscal]</li>
                <li><strong>Email:</strong> info@radarnormativo.com</li>
                <li><strong>Teléfono:</strong> [Número de teléfono]</li>
              </ul>

              <h2>2. Objeto</h2>
              <p>
                RadarNormativo.com es un medio de información digital especializado en noticias legales, 
                ayudas públicas, empleo, fiscalidad, pensiones y alertas normativas dirigido a ciudadanos 
                y empresas de España.
              </p>

              <h2>3. Condiciones de Uso</h2>
              <p>
                El acceso y uso de este sitio web implica la aceptación plena de las presentes condiciones. 
                Si no está de acuerdo con alguna de ellas, debe abstenerse de utilizar este sitio web.
              </p>

              <h2>4. Responsabilidad</h2>
              <p>
                La información contenida en este sitio web tiene carácter meramente informativo y no 
                constituye asesoramiento legal, fiscal o profesional. RadarNormativo.com no se hace 
                responsable de las decisiones tomadas en base a la información aquí publicada.
              </p>

              <h2>5. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseño gráfico, 
                código fuente, logotipos, marcas y cualquier otro elemento, están protegidos por derechos 
                de propiedad intelectual e industrial.
              </p>

              <h2>6. Enlaces</h2>
              <p>
                Este sitio web puede contener enlaces a sitios web de terceros. RadarNormativo.com no 
                se hace responsable del contenido de dichos sitios web ni de las consecuencias derivadas 
                de su uso.
              </p>

              <h2>7. Modificaciones</h2>
              <p>
                RadarNormativo.com se reserva el derecho a modificar cualquier tipo de información que 
                pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en 
                conocimiento de los usuarios dichas obligaciones.
              </p>

              <h2>8. Legislación Aplicable</h2>
              <p>
                Las presentes condiciones se rigen por la legislación española. Para la resolución de 
                cualquier controversia que pudiera derivarse del uso de este sitio web, las partes se 
                someten a los Juzgados y Tribunales de [Ciudad], renunciando expresamente a cualquier 
                otro fuero que pudiera corresponderles.
              </p>

              <h2>9. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este aviso legal, puede contactar con nosotros 
                a través del email: info@radarnormativo.com
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Última actualización: 15 de enero de 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
