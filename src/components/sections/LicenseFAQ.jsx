import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, ExternalLink } from 'lucide-react';

export const LicenseFAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems = [
    {
      question: "Satranç Sporcu Lisansı Nedir?",
      answer: "Satranç sporcu lisansı, Türkiye Satranç Federasyonu (TSF) tarafından verilen ve sporcunun resmi turnuvalara katılmasını sağlayan bir kimlik belgesidir. Bu lisans, UKD (Ulusal Kuvvet Derecesi) ve ELO puanı kazanmak ve resmi turnuvalarda yer alabilmek için gereklidir."
    },
    {
      question: "Nasıl Satranç Sporcu Lisansı Alınır?",
      answer: (
        <>
          <p className="mb-2">16 Eylül 2022 tarihinden itibaren sporcu lisans tescil, vize ve transfer işlemleri Gençlik Spor İl ve İlçe Müdürlükleri tarafından yürütülmektedir.</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Gençlik ve Spor İl/İlçe Müdürlükleri Üzerinden:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>İkamet ettiğiniz ildeki/ilçedeki Gençlik ve Spor Müdürlüğüne gerekli belgelerle başvurmanız gerekmektedir</li>
              </ul>
            </li>
            <li>
              <strong>E-Devlet Üzerinden (Yakında):</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Spor Bilgi Sistemi entegrasyon çalışmaları tamamlandığında E-Devlet üzerinden de lisans işlemleri yapılabilecektir</li>
              </ul>
            </li>
          </ol>
          <div className="mt-3">
            <p className="font-medium">Detaylı bilgi için: <a href="https://lisans.tsf.org.tr/online/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 inline-flex items-center">
                https://lisans.tsf.org.tr/online/ <ExternalLink size={14} className="ml-1" />
              </a>
            </p>
          </div>
        </>
      )
    },
    {
      question: "İlk Kez Lisans Çıkartmak İçin Gerekli Belgeler Nelerdir?",
      answer: (
        <ul className="list-disc pl-5">
          <li>18 yaşından küçükler için veli/vasi izin belgesi</li>
          <li>Spor yapmaya elverişliliğine dair yazılı beyan</li>
          <li>İki adet vesikalık fotoğraf</li>
          <li><strong>Not:</strong> Satranç branşında ilk kez lisans çıkaracak T.C vatandaşlarından ücret alınmamaktadır.</li>
        </ul>
      )
    },
    {
      question: "Lisans Vizesi (Yenileme) İşlemi Nasıl Yapılır?",
      answer: (
        <>
          <p>Lisans vizesi (yenileme) için gerekli belgeler:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Spor yapmaya elverişliliğine dair yazılı beyan</li>
            <li>T.C. Vatandaşı tüm sporcular için 202,50 Türk Lirası vize bedelinin TSF Lisans Hesabına yatırıldığına dair dekont</li>
            <li>Not: Yabancı sporcuların ödemesi gereken tutar TSF talimatında ayrıca belirtilmiştir</li>
          </ul>
          <p className="mt-3">Lisans yenileme işlemlerini Gençlik Spor İl ve İlçe Müdürlüklerine başvurarak yapabilirsiniz.</p>
        </>
      )
    },
    {
      question: "Yasal Dayanaklar Nelerdir?",
      answer: (
        <>
          <p>Sporcu Lisans ve Vize işlemleri aşağıdaki yasal dayanaklara göre yürütülmektedir:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>14.12.2019 tarihinde Resmi Gazete'de yayımlanarak yürürlüğe giren "Sporcu Lisans Tescil, Vize ve Transfer Yönetmeliği"</li>
            <li>16.09.2022 tarihinde yürürlüğe giren "Türkiye Satranç Federasyonu Sporcu Lisans Tescil, Vize ve Transfer Talimatı"</li>
          </ul>
          <p className="mt-3">Bu yönetmelik ve talimatlar gereğince, sporcu lisans tescil, vize ve transfer işlemleri Gençlik Spor İl ve İlçe Müdürlükleri tarafından yürütülmektedir.</p>
        </>
      )
    },
    {
      question: "Lisans Olmadan Turnuvalara Katılabilir miyim?",
      answer: (
        <ul className="list-disc pl-5">
          <li>TSF tarafından düzenlenen resmi turnuvalara katılmak için lisans zorunludur</li>
          <li>UKD ve ELO puanı kazanmak için lisans gereklidir</li>
          <li>Kulüp içi (İYTE Satranç Topluluğu) ve bazı özel turnuvalara lisans olmadan katılabilirsiniz</li>
        </ul>
      )
    },
    {
      question: "İYTE Satranç Topluluğu Olarak Nasıl Yardımcı Oluyoruz?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Lisans başvuru ve yenileme süreçleri hakkında güncel bilgilendirme</li>
          <li>Gençlik ve Spor İl/İlçe Müdürlüklerine yapılacak başvurularda rehberlik</li>
          <li>Gerekli belgelerin hazırlanması konusunda destek</li>
          <li>TSF ile iletişim ve güncel mevzuat takibi</li>
          <li>Toplu başvuru organizasyonları ile sürecin kolaylaştırılması</li>
        </ul>
      )
    }
  ];

  return (
    
    <section id="license-info" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Satranç Sporcu Lisansı - Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sporcu lisansı almak, yenilemek ve kullanmak hakkında merak edilenler
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 text-left font-medium"
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>
                  {openItem === index ? (
                    <ChevronUp size={20} className="flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown size={20} className="flex-shrink-0 ml-2" />
                  )}
                </button>
                
                <div 
                  className={`p-4 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
                    openItem === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden p-0'
                  }`}
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-start">
              <Info size={24} className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <p className="mb-2">
                  Bu bilgiler 16.09.2022 tarihinde yürürlüğe giren "Türkiye Satranç Federasyonu Sporcu Lisans Tescil, Vize ve Transfer Talimatı" baz alınarak hazırlanmıştır.
                </p>
                <p>
                  Güncel bilgiler ve destek için topluluğumuz yöneticileri ile iletişime geçebilir veya haftalık toplantılarımıza katılabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseFAQ;