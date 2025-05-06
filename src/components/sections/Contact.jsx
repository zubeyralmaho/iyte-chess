import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChessPiece } from '../ui/ChessPiece';


export const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id={id} className="py-16 relative overflow-hidden">
      {/* Decorative chess pieces */}
      <div className="absolute left-0 top-0 w-24 h-24 opacity-5 dark:opacity-10 pointer-events-none">
        <ChessPiece piece="knight" className="w-full h-full" />
      </div>
      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-5 dark:opacity-10 pointer-events-none">
        <ChessPiece piece="rook" className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bize Ulaşın</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <Card className="h-full">
              <Card.Header>
                <Card.Title>İletişim Bilgileri</Card.Title>
                <Card.Description>
                  Aşağıdaki kanallardan bize ulaşabilirsiniz.
                </Card.Description>
              </Card.Header>
              
              <Card.Content>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-4">
                      <Mail size={20} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">E-posta</h4>
                      <p className="text-gray-600 dark:text-gray-400">satranc@iyte.edu.tr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-4">
                      <MapPin size={20} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">Adres</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        İzmir Yüksek Teknoloji Enstitüsü<br />
                        Urla, İzmir
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 mr-4">
                      <Phone size={20} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telefon</h4>
                      <p className="text-gray-600 dark:text-gray-400">+90 552 665 60 20</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Sosyal Medya</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://instagram.com/iytesatranc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/company/iytesatranc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                {/* Google Maps İYTE Campus */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.9458883422886!2d26.63803!3d38.32172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb90ebad3c52cf%3A0xdf44c1f7edda89e9!2zxLB5dGUgS2FtcMO8cw!5e0!3m2!1str!2str!4v1616514481456!5m2!1str!2str"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="İYTE Kampüs Haritası"
                    className="w-full h-full"
                ></iframe>
                </div>
              </Card.Content>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="h-full">
              <Card.Header>
                <Card.Title>Bize Yazın</Card.Title>
                <Card.Description>
                  Mesajınızı bırakın, en kısa sürede size dönüş yapacağız.
                </Card.Description>
              </Card.Header>
              
              <Card.Content>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      İsim Soyisim
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full" loading={isSubmitting}>
                      <Send size={16} className="mr-2" />
                      Gönder
                    </Button>
                    
                    {/* Success message */}
                    {submitSuccess && (
                      <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm">
                        Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                      </div>
                    )}
                  </div>
                </form>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};