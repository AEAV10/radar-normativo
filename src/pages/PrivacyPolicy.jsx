
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - RadarNormativo.com</title>
        <meta name="description" content="Política de privacidad de RadarNormativo.com. Información sobre el tratamiento de datos personales conforme al RGPD." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-sm"
          >
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Política de Privacidad</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>1. Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es RadarNormativo.com, 
                con domicilio en [Dirección completa] y email de contacto: info@radarnormativo.com
              </p>

              <h2>2. Datos que Recopilamos</h2>
              <p>Recopilamos los siguientes tipos de datos personales:</p>
              <ul>
                <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                <li><strong>Datos de suscripción:</strong> Email para el newsletter (voluntario)</li>
                <li><strong>Datos de contacto:</strong> Nombre, email y mensaje en el formulario de contacto</li>
                <li><strong>Cookies:</strong> Según se detalla en nuestra Política de Cookies</li>
              </ul>

              <h2>3. Finalidad del Tratamiento</h2>
              <p>Tratamos sus datos personales para las siguientes finalidades:</p>
              <ul>
                <li>Proporcionar el servicio de información legal</li>
                <li>Envío de newsletter (con su consentimiento)</li>
                <li>Responder a consultas y solicitudes</li>
                <li>Análisis estadístico del uso del sitio web</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h2>4. Base Legal</h2>
              <p>Las bases legales para el tratamiento de sus datos son:</p>
              <ul>
                <li><strong>Consentimiento:</strong> Para el envío de newsletter y uso de cookies</li>
                <li><strong>Interés legítimo:</strong> Para análisis estadísticos y mejora del servicio</li>
                <li><strong>Ejecución de contrato:</strong> Para responder a sus consultas</li>
                <li><strong>Cumplimiento legal:</strong> Para cumplir obligaciones normativas</li>
              </ul>

              <h2>5. Conservación de Datos</h2>
              <p>
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las 
                finalidades para las que fueron recogidos y para cumplir con las obligaciones legales 
                aplicables.
              </p>

              <h2>6. Destinatarios</h2>
              <p>
                Sus datos personales no serán comunicados a terceros, salvo en los siguientes casos:
              </p>
              <ul>
                <li>Cuando sea necesario para la prestación del servicio</li>
                <li>Cuando exista una obligación legal</li>
                <li>Proveedores de servicios tecnológicos (hosting, analytics)</li>
                <li>Con su consentimiento expreso</li>
              </ul>

              <h2>7. Transferencias Internacionales</h2>
              <p>
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio 
                Económico Europeo. En estos casos, garantizamos que se aplican las medidas de seguridad 
                adecuadas conforme al RGPD.
              </p>

              <h2>8. Sus Derechos</h2>
              <p>Conforme al RGPD, usted tiene los siguientes derechos:</p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento</li>
                <li><strong>Retirada del consentimiento:</strong> En cualquier momento</li>
              </ul>

              <h2>9. Ejercicio de Derechos</h2>
              <p>
                Para ejercer sus derechos, puede contactar con nosotros en: info@radarnormativo.com
                También puede presentar una reclamación ante la Agencia Española de Protección de Datos.
              </p>

              <h2>10. Medidas de Seguridad</h2>
              <p>
                Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus datos 
                personales contra el acceso no autorizado, la alteración, divulgación o destrucción.
              </p>

              <h2>11. Menores de Edad</h2>
              <p>
                Este sitio web no está dirigido a menores de 14 años. No recopilamos conscientemente 
                datos personales de menores de esta edad.
              </p>

              <h2>12. Modificaciones</h2>
              <p>
                Nos reservamos el derecho a modificar esta política de privacidad. Los cambios serán 
                publicados en esta página con la fecha de la última actualización.
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

export default PrivacyPolicy;
