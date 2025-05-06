import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Mail, Linkedin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChessPiece } from '../ui/ChessPiece';

export const Team = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: 'Doğukan Güreke',
      position: 'Topluluk Başkanı',
      department: 'Fizik',
      year: 2,
      image: '/assets/images/dogukan.jpeg',
      elo: 2100,
      role: 'yönetim',
      social: {
        email: 'dogukangureke@std.iyte.edu.tr',
        instagram: 'dogukan_gureke',
        linkedin: 'NA'
      }
    },
    {
      id: 2,
      name: 'Eyüpcan Günerhan',
      position: 'Başkan Yardımcısı',
      department: 'Elektrik-Haberleşme Mühendisliği',
      year: 1,
      image: '/assets/images/eyupcan.jpeg',
      elo: 2000,
      role: 'yönetim',
      social: {
        email: 'eyupcangunerhan@hotmail.com',
        instagram: 'eyupcangunerhan',
        linkedin: 'eyupcangunerhan'
      }
    },
    {
      id: 3,
      name: 'Furkan Duran',
      position: 'Sosyal Medya Sorumlusu',
      department: 'Fizik',
      year: 2,
      image: '/assets/images/furkanduran.jpeg',
      elo: 1945,
      role: 'yönetim',
      social: {
        email: 'furkanduran721@gmail.com',
        instagram: 'furkanduran217',
        linkedin: 'furkanduran'
      }
    },
    {
      id: 4,
      name: 'Zübeyr Almaho',
      position: 'Eğitim ve Teknoloji Direktörü',
      department: 'Bilgisayar Mühendisliği',
      year: 2,
      image: '/assets/images/zubeyralmaho.jpeg',
      elo: 1680,
      role: 'yönetim',
      social: {
        email: 'mail@zubeyralmaho.com',
        instagram: 'zubeyr.almaho',
        linkedin: 'zubeyr-almaho'
      }
    },
    {
      id: 5,
      name: 'Ali Tezcan Özenç',
      position: 'Sosyal Sorumluluk Koordinatörü',
      department: 'Makine Mühendisliği',
      year: 1,
      image: '/api/placeholder/400/400',
      elo: 2100,
      role: 'yönetim',
      social: {
        email: 'tezcanozenc@gmail.com',
        instagram: 'burakozturk',
        linkedin: 'burakozturk'
      }
    },
    {
      id: 6,
      name: 'Gizem Şahin',
      position: 'Takım Üyesi',
      department: 'Endüstriyel Tasarım',
      year: 2,
      image: '/api/placeholder/400/400',
      elo: 1780,
      role: 'takım',
      social: {
        email: 'gizem@example.com',
        instagram: 'gizemsahin',
        linkedin: 'gizemsahin'
      }
    },
    {
      id: 7,
      name: 'Can Aydın',
      position: 'Sosyal Medya Sorumlusu',
      department: 'Matematik',
      year: 3,
      image: '/api/placeholder/400/400',
      elo: 1550,
      role: 'yönetim',
      social: {
        email: 'can@example.com',
        instagram: 'canaydin',
        linkedin: 'canaydin'
      }
    },
    {
      id: 8,
      name: 'Deniz Korkmaz',
      position: 'Eğitmen',
      department: 'Bilgisayar Mühendisliği',
      year: 4,
      image: '/api/placeholder/400/400',
      elo: 1820,
      role: 'eğitmen',
      social: {
        email: 'deniz@example.com',
        instagram: 'denizkorkmaz',
        linkedin: 'denizkorkmaz'
      }
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'yönetim', label: 'Yönetim' },
    { id: 'takım', label: 'Takım' },
    { id: 'eğitmen', label: 'Eğitmenler' }
  ];

  // Filter members
  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === activeFilter);

  // Carousel controls (simplified)
  const handlePrevious = () => {
    console.log('Previous carousel item');
  };

  const handleNext = () => {
    console.log('Next carousel item');
  };

  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Takımımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ekibimizle Tanışın</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            İYTE Satranç Topluluğu'nu yöneten, eğitim veren ve turnuvalarda temsil eden takım arkadaşlarımız.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-lg bg-gray-200 dark:bg-gray-800">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${activeFilter === filter.id 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'bg-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team grid with carousel controls */}
        <div className="relative">
          {/* Carousel navigation (non-functional in this example) */}
          <button 
            onClick={handlePrevious}
            className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white dark:bg-gray-800 shadow-md z-10 hidden md:flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white dark:bg-gray-800 shadow-md z-10 hidden md:flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Team member card component
const TeamMemberCard = ({ member }) => {
  const { name, position, department, year, image, elo, social } = member;
  
  // Calculate rating badge color based on ELO rating
  const getRatingColor = (rating) => {
    if (rating >= 2000) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    if (rating >= 1800) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (rating >= 1600) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  return (
    <Card hover className="text-center overflow-visible">
      {/* Chess piece decoration */}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center z-10">
        <ChessPiece 
          piece={elo >= 2000 ? 'queen' : elo >= 1800 ? 'rook' : elo >= 1600 ? 'bishop' : 'knight'} 
          size={20} 
          color={elo >= 2000 ? 'black' : 'black'} 
        />
      </div>
      
      {/* Avatar image */}
      <div className="pt-6 px-6">
        <div className="w-24 h-24 rounded-full mx-auto overflow-hidden mb-4 ring-4 ring-gray-200 dark:ring-gray-700">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{position}</p>
        
        {/* ELO rating badge */}
        <div className="mt-2">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(elo)}`}>
            ELO: {elo}
          </span>
        </div>
      </div>
      
      {/* Details */}
      <Card.Content>
        <div className="space-y-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <p>{department}</p>
          <p>{year}. Sınıf</p>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-3 pt-2">
          <a href={`mailto:${social.email}`} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="E-posta">
            <Mail size={16} className="text-gray-500 dark:text-gray-400" />
          </a>
          <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Instagram">
            <Instagram size={16} className="text-gray-500 dark:text-gray-400" />
          </a>
          <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="LinkedIn">
            <Linkedin size={16} className="text-gray-500 dark:text-gray-400" />
          </a>
        </div>
      </Card.Content>
    </Card>
    
    
  );
};