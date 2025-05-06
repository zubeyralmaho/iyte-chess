import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const Events = ({ id }) => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Güncellenmiş etkinlik verileri
  const events = {
    upcoming: [
      {
        id: 1,
        title: 'İYTE Satranç Turnuvası',
        date: '5-6 Nisan 2025',
        time: '35+30 zaman temposu',
        location: 'İYTE Kimya Mühendisliği Kantini',
        category: 'Turnuva',
        attendees: 0,
        description: 'İYTE Satranç Topluluğu olarak düzenlediğimiz İYTE Satranç Turnuvası için kayıtlar başladı! Son başvuru tarihi 4 Nisan 2025, saat 17:00.',
        image: '/assets/images/TurnuvaTaslak.png'
      },
      {
        id: 2,
        title: '#çarşambasatrançilegüzel',
        date: 'Her Çarşamba',
        time: '17:15 - 20:00',
        location: 'İYTE Kampüsü',
        category: 'Eğitim',
        attendees: 15,
        description: 'Her hafta düzenlediğimiz etkinlikle satranç eğitimi alabilir veya serbest maçlar yapabilirsiniz.',
        image: '/assets/images/carsambasatranc.jpeg'
      },
      
      {
        id: 3,
        title: 'Minik Eller Satranç Öğreniyor Projesi',
        date: 'Devam Ediyor',
        time: 'Belirli Aralıklarla',
        location: 'Avni Kaya Kokucu Okulu',
        category: 'Sosyal Sorumluluk',
        attendees: 20,
        description: 'İYTE Satranç Topluluğu ve Toplumsal Sorumluluk Projeleri Koordinatörlüğü iş birliğiyle yürütülen projemizle ilkokul öğrencilerine satranç eğitimi veriyoruz.',
        image: '/assets/images/minikellersatranc.jpeg'
      }
    ],
    past: [
      {
        id: 7,
        title: 'IM Serkan Soysal ile Online Turnuva',
        date: '10 Aralık 2024',
        time: 'Online',
        location: 'Google Forms üzerinden katılım',
        category: 'Özel Etkinlik',
        attendees: 32,
        description: 'International Master Serkan Soysal\'a karşı oynama fırsatı edinilen özel online turnuvamız.',
        image: '/assets/images/SerkanSoysal.png'
      },
      {
        id: 8,
        title: 'Chess960 Blitz Turnuvası',
        date: '11 Aralık 2024',
        time: '17:15 - 20:00',
        location: 'Kütüphane Toplantı Salonu',
        category: 'Turnuva',
        attendees: 24,
        description: '960 farklı rastgele açılış içeren, açılış ezberlemesinin imkansız olduğu Chess960 formatıyla düzenlenen hızlı satranç turnuvası (3+2 dakika).',
        image: '/assets/images/blitzsatranc.jpg'
      },
      {
        id: 9,
        title: 'Hızlı Satranç (Blitz) Turnuvası',
        date: '24 Nisan 2024',
        time: '16:00 - 19:30',
        location: 'Yaşar Üniversitesi',
        category: 'Turnuva',
        attendees: 24,
        description: '5 dakikalık hızlı satranç formatında düzenlenen eğlenceli turnuva etkinliğimiz.',
        image: '/assets/images/yasarsatranc.png'
      }
    ]
  };

  const filteredEvents = events[activeTab] || [];

  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Etkinliklerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Yaklaşan ve Geçmiş Etkinlikler</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Turnuvalardan eğitimlere, söyleşilerden dostluk maçlarına kadar tüm etkinliklerimizi takip edin.
          </p>
        </div>

        {/* Düzenli Etkinlik Banner'ı */}
        <div className="mb-12 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row items-center p-6">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-2">#çarşambasatrançilegüzel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Her çarşamba düzenlediğimiz etkinliklerimizde satranç eğitimlerimize katılabilir veya serbest oyunlar oynayabilirsiniz.
              </p>
              <a 
                href="https://chat.whatsapp.com/GXbgIS8Ot3zEBeNGfwjjtQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Bize Katıl
                </Button>
              </a>
            </div>
            <div className="md:w-1/3 rounded-lg overflow-hidden">
              <img 
                src="/assets/images/carsambaa.jpg" 
                alt="Çarşamba Satranç Etkinliği" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-gray-200 dark:bg-gray-800">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === 'upcoming' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm' 
                  : 'bg-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Yaklaşan Etkinlikler
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === 'past' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm' 
                  : 'bg-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Geçmiş Etkinlikler
            </button>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        
      </div>
    </section>
  );
};

// Event card component
const EventCard = ({ event }) => {
  const { title, date, time, location, category, attendees, description, image } = event;
  
  // Badge colors based on category
  const categoryColors = {
    'Turnuva': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Eğitim': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Söyleşi': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Sosyal Sorumluluk': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    'Özel Etkinlik': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'default': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
  };

  const badgeClass = categoryColors[category] || categoryColors.default;

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
          {category}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        
        {/* Event details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <Calendar size={16} className="text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
          </div>
          
          <div className="flex items-start">
            <Clock size={16} className="text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{time}</span>
          </div>
          
          <div className="flex items-start">
            <MapPin size={16} className="text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{location}</span>
          </div>
          
          {attendees > 0 && (
            <div className="flex items-start">
              <Users size={16} className="text-gray-500 dark:text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{attendees} Katılımcı</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        
      </div>
    </Card>
  );
};