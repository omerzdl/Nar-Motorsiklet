import { ProductCategory, Brand, ContactInfo, Feature } from './types';
import { ShieldCheck, Wrench, MapPin } from 'lucide-react';

export const brands: Brand[] = [
  { name: 'MONDIAL' },
  { name: 'KUBA' },
  { name: 'HONDA' },
  { name: 'YAMAHA' },
  { name: 'KANUNI' },
  { name: 'YUKI' },
  { name: 'TVS' },
  { name: 'BAJAJ' },
  { name: 'ARORA' },
  { name: 'RKS' }
];

export const productCategories: ProductCategory[] = [
  {
    title: 'Motosiklet Yağları',
    subtitle: 'Yüksek Performans & Bakım',
    tags: ['Motul 5100', 'Motul 7100', 'Castrol Power1', 'Japan Oil', 'Scooter Yağları'],
    products: [
       { name: 'Motul 5100 10W40', image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&q=80&w=500' },
       { name: 'Castrol Power 1', image: 'https://images.unsplash.com/photo-1635770311904-7667375a00a0?auto=format&fit=crop&q=80&w=500' },
       { name: 'Zincir Yağları', image: 'https://images.unsplash.com/photo-1626435368945-813c9eb87e8e?auto=format&fit=crop&q=80&w=500' },
       { name: 'Fren Hidrolikleri', image: 'https://images.unsplash.com/photo-1486262715619-72a604e3d7b9?auto=format&fit=crop&q=80&w=500' }
    ]
  },
  {
    title: 'Yedek Parça & Sarf',
    subtitle: 'Mekanik Aksam & Kitler',
    tags: ['Lastik', 'Ampul', 'Akü', 'Fren Balatası', 'Zincir Seti', 'Silindir', 'Kayış', 'Baga'],
    products: [
        { name: 'Performans Varyatör', image: 'https://images.unsplash.com/photo-1603358052163-54948a474668?auto=format&fit=crop&q=80&w=500' },
        { name: 'Anlas Lastik Seti', image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=500' },
        { name: 'BS Akü Grubu', image: 'https://images.unsplash.com/photo-1625717316335-862d64f0f089?auto=format&fit=crop&q=80&w=500' },
        { name: 'Gold Zincir Dişli Seti', image: 'https://images.unsplash.com/photo-1530267885472-a42e557b7f14?auto=format&fit=crop&q=80&w=500' }
    ]
  },
  {
    title: 'Aksesuar & Koruma',
    subtitle: 'Kask, Konfor & Estetik',
    tags: ['Kask', 'Tank Ped', 'Paspas', 'Koruma Demiri', 'Çanta', 'Branda', 'Kilit'],
    products: [
      { name: 'LS2 Rapid Full Face Kask', image: 'https://images.unsplash.com/photo-1544605963-c3c1e55047b0?q=80&w=500&auto=format&fit=crop' },
      { name: 'LS2 Storm II Güneş Vizörlü', image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=500&auto=format&fit=crop' },
      { name: 'MTS Yarım Kask (Mat Siyah)', image: 'https://images.unsplash.com/photo-1558498427-0b1a0e10444c?q=80&w=500&auto=format&fit=crop' },
      { name: 'MTS Çene Açılır Kask', image: 'https://images.unsplash.com/photo-1613531406838-8954752c0356?q=80&w=500&auto=format&fit=crop' },
      { name: 'PCX Karbon Tank Ped', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=500&auto=format&fit=crop' },
      { name: 'Honda Dio Tank Ped', image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=500&auto=format&fit=crop' },
      { name: 'TVS Jüpiter Paspas', image: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?q=80&w=500&auto=format&fit=crop' },
      { name: 'Honda Dio Paspas', image: 'https://images.unsplash.com/photo-1609630823858-a16e8854c9c7?q=80&w=500&auto=format&fit=crop' }
    ]
  }
];

export const contactInfo: ContactInfo = {
  phone: '+905431829426',
  address: 'İnkılap Mahallesi İsmet İnönü Caddesi 95, 35700 Bergama/İzmir',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=İnkılap+Mahallesi+İsmet+İnönü+Caddesi+95+Bergama+İzmir',
  email: 'iletisim@narmotosiklet.com'
};

export const features: Feature[] = [
  {
    title: 'Orijinal & Kaliteli Parça',
    description: 'Motosikletiniz için en uyumlu ve uzun ömürlü yedek parçaları temin ediyoruz.',
    icon: ShieldCheck
  },
  {
    title: 'Uzman Desteği',
    description: 'Doğru parçayı bulmanız için teknik bilgi ve tecrübemizle yanınızdayız.',
    icon: Wrench
  },
  {
    title: 'Merkezi Konum',
    description: 'Bergama merkezine yakın, ulaşımı kolay mağazamızdayız.',
    icon: MapPin
  }
];