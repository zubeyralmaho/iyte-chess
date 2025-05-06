import React, { useState } from 'react';
import { Trophy, Calendar, Medal, Users, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChessPiece } from '../ui/ChessPiece';

export const Achievements = ({ id }) => {
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  
  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: 'İzmir Üniversiteler Arası Satranç Turnuvası',
      date: 'Mart 2025',
      position: '1.',
      description: 'İYTE Satranç Takımı, İzmir\'deki üniversiteler arasında düzenlenen turnuvada birinci oldu. 12 üniversiteden 48 oyuncunun katıldığı turnuvada, takımımız tüm maçlarını kazanarak şampiyonluğa ulaştı.',
      participants: ['Burak Öztürk', 'Zeynep Kaya', 'Mustafa Demir', 'Gizem Şahin'],
      image: '/api/placeholder/800/400',
      medals: {
        gold: 3,
        silver: 1,
        bronze: 0
      }
    },
    {
      id: 2,
      title: 'Ege Bölgesi Satranç Şampiyonası',
      date: 'Kasım 2024',
      position: '2.',
      description: 'İYTE Satranç Takımı, Ege Bölgesi\'nde düzenlenen şampiyonada ikinci oldu. 8 ilden toplam 24 takımın katıldığı turnuvada oyuncularımız gösterdikleri performansla gümüş madalya kazandı.',
      participants: ['Burak Öztürk', 'Mustafa Demir', 'Deniz Korkmaz', 'Elif Yıldız'],
      image: '/api/placeholder/800/400',
      medals: {
        gold: 1,
        silver: 2,
        bronze: 1
      }
    },
    {
      id: 3,
      title: 'İYTE Açık Satranç Turnuvası',
      date: 'Mayıs 2024',
      position: 'Organizatör',
      description: 'İYTE Satranç Topluluğu olarak düzenlediğimiz açık turnuvaya 120\'den fazla oyuncu katıldı. Türkiye\'nin farklı şehirlerinden ve üniversitelerinden gelen oyuncular arasında İYTE öğrencileri de yer aldı.',
      participants: [],
      image: '/api/placeholder/800/400',
      medals: {
        gold: 0,
        silver: 0,
        bronze: 0
      }
    },
    {
      id: 4,
      title: 'Ulusal Üniversiteler Satranç Şampiyonası',
      date: 'Nisan 2024',
      position: '5.',
      description: 'Türkiye genelindeki 32 üniversiteden takımların katıldığı şampiyonada İYTE olarak 5. sırada yer aldık. Takımımız, yüksek reytingli rakiplerine karşı etkileyici bir performans gösterdi.',
      participants: ['Burak Öztürk', 'Zeynep Kaya', 'Mustafa Demir', 'Deniz Korkmaz'],
      image: '/api/placeholder/800/400',
      medals: {
        gold: 0,
        silver: 1,
        bronze: 2
      }
    }
  ];

  // Toggle expanded achievement
  const toggleExpand = (id) => {
    setExpandedAchievement(expandedAchievement === id ? null : id);
  };

  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Başarılarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kazandığımız Ödüller</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            İYTE Satranç Topluluğu olarak katıldığımız turnuvalar ve elde ettiğimiz başarılar.
          </p>
        </div>
        
        {/* Stats summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatsCard
            icon={<Trophy size={24} className="text-yellow-500" />}
            title="Turnuvalar"
            value="25+"
            description="Katıldığımız turnuva"
          />
          
          <StatsCard
            icon={<Medal size={24} className="text-yellow-500" />}
            title="Altın"
            value="12"
            description="Altın madalya"
          />
          
          <StatsCard
            icon={<Medal size={24} className="text-gray-400" />}
            title="Gümüş"
            value="18"
            description="Gümüş madalya"
          />
          
          <StatsCard
            icon={<Medal size={24} className="text-amber-700" />}
            title="Bronz"
            value="14"
            description="Bronz madalya"
          />
        </div>
        
        {/* Achievements timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isExpanded={expandedAchievement === achievement.id}
              toggleExpand={() => toggleExpand(achievement.id)}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats card component
const StatsCard = ({ icon, title, value, description }) => {
  return (
    <Card className="text-center py-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400 font-medium">{title}</p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{description}</p>
    </Card>
  );
};

// Achievement card component
const AchievementCard = ({ achievement, isExpanded, toggleExpand, isEven }) => {
  const { title, date, position, description, participants, image, medals } = achievement;
  
  // Position badge color
  const getPositionBadge = (pos) => {
    if (pos === '1.') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    if (pos === '2.') return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    if (pos === '3.') return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {/* Timeline connector */}
        {isEven && (
          <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 flex items-center hidden md:flex">
            <div className="w-6 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        )}
        {!isEven && (
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex items-center hidden md:flex">
            <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            <div className="w-6 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row">
          {/* Image (shown only when expanded on mobile) */}
          <div className={`md:w-1/3 ${isExpanded ? 'block' : 'hidden md:block'}`}>
            <img src={image} alt={title} className="w-full h-full object-cover aspect-video md:aspect-square" />
          </div>
          
          {/* Content */}
          <div className="md:w-2/3 p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-800">
                    <Calendar size={14} className="text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionBadge(position)}`}>
                    {position} Pozisyon
                  </span>
                  
                  {/* Medal icons */}
                  {medals.gold > 0 && (
                    <div className="flex items-center">
                      <Trophy size={14} className="text-yellow-500 mr-1" />
                      <span className="text-xs font-medium">{medals.gold}</span>
                    </div>
                  )}
                  
                  {medals.silver > 0 && (
                    <div className="flex items-center">
                      <Trophy size={14} className="text-gray-400 mr-1" />
                      <span className="text-xs font-medium">{medals.silver}</span>
                    </div>
                  )}
                  
                  {medals.bronze > 0 && (
                    <div className="flex items-center">
                      <Trophy size={14} className="text-amber-700 mr-1" />
                      <span className="text-xs font-medium">{medals.bronze}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Expand/collapse button */}
              <button 
                onClick={toggleExpand}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={isExpanded ? 'Daralt' : 'Genişlet'}
              >
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                />
              </button>
            </div>
            
            {/* Expandable content */}
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {description}
              </p>
              
              {/* Participants */}
              {participants.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Users size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-sm font-medium">Katılımcılar</span>
                  </div>
                  <div className="flex flex-wrap">
                    {participants.map((name, index) => (
                      <span 
                        key={index} 
                        className="mr-1 mb-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* View details button (on mobile only) */}
              <div className="mt-4 md:hidden">
                <Button size="sm" variant="outline" className="w-full">
                  Detayları Gör
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};