import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, MessageSquare } from 'lucide-react';
import contact from '../content/contact.json';
import type { ContactInfo } from '../types';

const Contact: React.FC = () => {
  const contactInfo = contact as ContactInfo;

  return (
    <PageLayout
      title="Contacto"
      description="Póngase en contacto con MEIK LABS para consultas sobre nuestros servicios"
    >
      <div className="py-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark text-center mb-6">
          Contacte con Nosotros
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Estamos aquí para responder a sus preguntas y discutir cómo podemos ayudar a su empresa.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-dark mb-2">
                Teléfono / WhatsApp
              </h3>
              <div className="space-y-2">
                <a
                  href={`tel:${contactInfo.contact.phone}`}
                  className="block text-gray-600 hover:text-primary"
                >
                  {contactInfo.contact.phone}
                </a>
                <a
                  href={`https://wa.me/${contactInfo.contact.whatsapp.replace(/\D/g, '')}`}
                  className="inline-flex items-center text-gray-600 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-dark mb-2">
                Email
              </h3>
              <p className="text-gray-600">
                <a href={`mailto:${contactInfo.contact.email}`} className="hover:text-primary">
                  {contactInfo.contact.email}
                </a>
              </p>
            </div>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-dark mb-2">
                Horario
              </h3>
              <p className="text-gray-600">
                {contactInfo.schedule.weekdays}
                <br />
                {contactInfo.schedule.weekend}
              </p>
            </div>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href={contactInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={contactInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href={contactInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <div id="contact-form" className="p-8">
              <h2 className="text-2xl font-display font-bold text-neutral-dark mb-6">
                Envíenos un Mensaje
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </Card>

          <Card padding="none">
            <div className="h-full min-h-[400px] bg-neutral-light rounded-lg">
              <div className="w-full h-full">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-lg text-neutral-dark mb-2">
                      Nuestra Ubicación
                    </h3>
                    <p className="text-gray-600">
                      {contactInfo.company.address.street}
                      <br />
                      {contactInfo.company.address.city}, {contactInfo.company.address.country}
                      <br />
                      {contactInfo.company.address.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;