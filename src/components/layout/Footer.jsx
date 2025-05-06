import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { ChessPiece } from '../ui/ChessPiece';

export const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <ChessPiece piece="knight" size={24} color="black" />
              </div>
              <h3 className="text-xl font-bold">İYTE Satranç</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              İzmir Yüksek Teknoloji Enstitüsü Satranç Topluluğu, satrancı seven ve geliştirmek isteyen tüm öğrencileri bir araya getiren resmi öğrenci topluluğudur.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/iytesatranc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com/company/iytesatranc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:satranc@iyte.edu.tr" 
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Etkinlikler
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Takımımız
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Başarılarımız
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-medium mb-4">Kaynaklar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  Satranç Eğitim Materyalleri
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  Turnuva Kayıtları
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  Çevrimiçi Satranç Platformları
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  TSF - Türkiye Satranç Federasyonu
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  FIDE - Uluslararası Satranç Federasyonu
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">İletişim</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  İzmir Yüksek Teknoloji Enstitüsü<br />
                  Öğrenci Toplulukları Binası, Oda 105<br />
                  Urla, İzmir
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:satranc@iyte.edu.tr" className="hover:text-white transition-colors">
                  satranc@iyte.edu.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} İYTE Satranç Topluluğu. Tüm Hakları Saklıdır.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Gizlilik Politikası
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Kullanım Koşulları
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              İYTE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};