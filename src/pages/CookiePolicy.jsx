
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - RadarNormativo.com</title>
        <meta name="description" content="Política de cookies de RadarNormativo.com. Información sobre el uso de cookies y tecnologías similares." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm"
          >
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Política de Cookies</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
                visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias 
                durante un período de tiempo.
              </p>

              <h2>2. ¿Qué Cookies Utilizamos?</h2>
              
              <h3>Cookies Técnicas (Necesarias)</h3>
              <p>Estas cookies son esenciales para el funcionamiento del sitio web:</p>
              <ul>
                <li><strong>Cookies de sesión:</strong> Mantienen la sesión del usuario</li>
                <li><strong>Cookies de preferencias:</strong> Recuerdan configuraciones del usuario</li>
                <li><strong>Cookies de seguridad:</strong> Protegen contra ataques maliciosos</li>
              </ul>

              <h3>Cookies de Análisis</h3>
              <p>Nos ayudan a entender cómo los usuarios interactúan con el sitio web:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento</li>
                <li><strong>Cookies de rendimiento:</strong> Miden la velocidad de carga</li>
              </ul>

              <h3>Cookies de Publicidad</h3>
              <p>Utilizadas para mostrar anuncios relevantes:</p>
              <ul>
                <li><strong>Google AdSense:</strong> Personalización de anuncios</li>
                <li><strong>Cookies de remarketing:</strong> Anuncios basados en visitas previas</li>
              </ul>

              <h3>Cookies de Terceros</h3>
              <p>Cookies establecidas por servicios externos:</p>
              <ul>
                <li><strong>Redes sociales:</strong> Botones de compartir</li>
                <li><strong>Servicios de mapas:</strong> Integración de mapas</li>
                <li><strong>Videos embebidos:</strong> Reproductores de video</li>
              </ul>

              <h2>3. Finalidad de las Cookies</h2>
              <p>Utilizamos cookies para:</p>
              <ul>
                <li>Garantizar el correcto funcionamiento del sitio web</li>
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Analizar el tráfico y uso del sitio web</li>
                <li>Personalizar el contenido y los anuncios</li>
                <li>Proporcionar funciones de redes sociales</li>
                <li>Mejorar la seguridad del sitio web</li>
              </ul>

              <h2>4. Base Legal</h2>
              <p>
                El uso de cookies se basa en su consentimiento, excepto para las cookies técnicas 
                que son necesarias para el funcionamiento del sitio web.
              </p>

              <h2>5. Duración de las Cookies</h2>
              <p>Las cookies pueden ser:</p>
              <ul>
                <li><strong>De sesión:</strong> Se eliminan al cerrar el navegador</li>
                <li><strong>Persistentes:</strong> Permanecen hasta su fecha de expiración o eliminación manual</li>
              </ul>

              <h2>6. Gestión de Cookies</h2>
              <p>Puede gestionar las cookies de las siguientes maneras:</p>
              
              <h3>Banner de Cookies</h3>
              <p>
                Al visitar nuestro sitio web por primera vez, aparecerá un banner informativo 
                donde puede aceptar o rechazar el uso de cookies no esenciales.
              </p>

              <h3>Configuración del Navegador</h3>
              <p>Puede configurar su navegador para:</p>
              <ul>
                <li>Bloquear todas las cookies</li>
                <li>Permitir solo cookies de sitios web específicos</li>
                <li>Eliminar cookies al cerrar el navegador</li>
                <li>Recibir notificaciones antes de que se instalen cookies</li>
              </ul>

              <h3>Enlaces de Configuración por Navegador</h3>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>

              <h2>7. Cookies de Terceros</h2>
              <p>Algunos servicios de terceros que utilizamos pueden establecer sus propias cookies:</p>
              <ul>
                <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad</a></li>
                <li><strong>Google AdSense:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Política de anuncios</a></li>
              </ul>

              <h2>8. Retirada del Consentimiento</h2>
              <p>
                Puede retirar su consentimiento para el uso de cookies en cualquier momento 
                modificando la configuración de su navegador o contactando con nosotros.
              </p>

              <h2>9. Consecuencias de Deshabilitar Cookies</h2>
              <p>
                Si deshabilita las cookies, algunas funcionalidades del sitio web pueden no 
                funcionar correctamente, como recordar sus preferencias o mantener su sesión iniciada.
              </p>

              <h2>10. Actualizaciones</h2>
              <p>
                Esta política de cookies puede actualizarse periódicamente. Le recomendamos 
                revisarla regularmente para estar informado de cualquier cambio.
              </p>

              <h2>11. Contacto</h2>
              <p>
                Para cualquier consulta sobre nuestra política de cookies, puede contactar con 
                nosotros en: info@radarnormativo.com
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

export default CookiePolicy;
