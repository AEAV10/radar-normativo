import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <img 
                src="https://horizons-cdn.hostinger.com/146e7d56-b1cc-4518-bb1a-777d880c6cda/214d26e1282a28ba0d6cc8764e67f3da.png" 
                alt="Logo de RadarNormativo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-xl font-bold">RadarNormativo.com</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tu fuente confiable de información legal actualizada. Ayudas públicas, empleo, 
              fiscalidad, pensiones y alertas legales para ciudadanos de España.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 RadarNormativo.com. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Legal</span>
            <ul className="space-y-2">
              <li><Link to="/aviso-legal" className="text-gray-300 hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link to="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/politica-cookies" className="text-gray-300 hover:text-white transition-colors">Política de Cookies</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            RadarNormativo.com es un medio de información legal independiente. 
            La información publicada tiene carácter informativo y no constituye asesoramiento legal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;