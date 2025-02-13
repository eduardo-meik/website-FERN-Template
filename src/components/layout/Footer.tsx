import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Beaker, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleLegalLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Beaker className="h-8 w-8" />
              <span className="font-display font-bold text-xl">MEIK LABS</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Pioneros en el futuro de la IA y tecnologías de Gemelos Digitales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-gray-300 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/investigacion" className="text-gray-300 hover:text-white transition-colors">
                  Investigación
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-gray-300">Avenida Innovación 123, Ciudad Tecnológica</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:contact@meiklabs.com" className="text-gray-300 hover:text-white">
                  contact@meiklabs.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLegalLinkClick('/terms')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Términos de Uso
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLegalLinkClick('/privacy')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLegalLinkClick('/cookies')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Cookies
                </span>
              </li>
              <li className="cursor-pointer">
                <span
                  onClick={() => handleLegalLinkClick('/disclaimer')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aviso Legal
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Mantente Informado</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas actualizaciones en IA y tecnología de Gemelos Digitales.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              © {currentYear} MEIK LABS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <span
                onClick={() => handleLegalLinkClick('/privacy')}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidad
              </span>
              <span
                onClick={() => handleLegalLinkClick('/terms')}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Términos de Servicio
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};