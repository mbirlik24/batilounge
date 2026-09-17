export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  tag?: string; // 'Özel Lezzet', 'Popüler', 'Özel Sunum', 'Ev Yapımı', 'Vejetaryen', '24/7 Favori'
  prepTime?: string;
  calories?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  itemCount?: number;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'Tüm Menü', iconName: 'Utensils', description: 'Bati Lounge lezzet koleksiyonu' },
  { id: 'ana-yemek', name: 'Ana Yemek & Izgara', iconName: 'Flame', description: 'Özenle dinlendirilmiş etler ve özel soslar' },
  { id: 'kahvalti', name: 'Kahvaltı & Brunch', iconName: 'SunMedium', description: 'Günün her saati taze ve zengin lezzetler' },
  { id: 'atistirmalik', name: 'Atıştırmalık & Başlangıç', iconName: 'Sparkles', description: 'Paylaşımlık sıcak tabaklar ve sepetler' },
  { id: 'burger-wrap', name: 'Burger & Wrap', iconName: 'Sandwich', description: 'El yapımı brioche ekmekleri ve sulu köfteler' },
  { id: 'pizza-pide', name: 'Pizza, Pide & Tost', iconName: 'Pizza', description: 'Taş fırın kıvamında çıtır hamurlar ve tostlar' },
  { id: 'makarna-salata', name: 'Makarna & Salatalar', iconName: 'Salad', description: 'İtalyan usulü taze makarna ve taze yeşillikler' },
  { id: 'tatli', name: 'Tatlı & Meyve', iconName: 'Cake', description: 'Ev yapımı sufleler, artisan pastalar ve taze meyveler' },
  { id: 'kahve-cay', name: 'Kahve & Çay Ritüeli', iconName: 'Coffee', description: 'Taze çekirdek kahveler, bitki çayları ve demlemeler' },
  { id: 'soguk-icecek', name: 'Soğuk İçecek & Mocktail', iconName: 'GlassWater', description: 'Taze sıkılmış sular, frappe, frozen ve ferahlatıcılar' },
  { id: 'lounge-nargile', name: 'Lounge & Nargile', iconName: 'Wind', description: 'Premium tütün harmanları ve imza miksoloji' },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- ANA YEMEK & IZGARA ---
  {
    id: 'bonfile-cafe-de-paris',
    name: 'Bonfile Cafe de Paris',
    category: 'ana-yemek',
    price: 920,
    description: '220g dinlendirilmiş dana bonfile dilimleri, otantik Cafe de Paris tereyağlı baharat sosu, fırınlanmış sebzeler ve el kesimi patates tava eşliğinde.',
    tag: 'Özel Lezzet',
    prepTime: '20 dk',
    calories: '680 kcal',
    image: '/menu-images/bonfile-cafe-de-paris-soslu.webp'
  },
  {
    id: 'bonfile-lokum',
    name: 'Bonfile Lokum',
    category: 'ana-yemek',
    price: 920,
    description: 'Kömür ateşinde marine edilmiş pamuk kıvamında bonfile yaprakları, trüf aromalı tereyağı ve ızgara domates-biber.',
    tag: 'Popüler',
    prepTime: '18 dk',
    calories: '610 kcal',
    image: '/menu-images/bonfile-lokum.webp'
  },
  {
    id: 'kavurma-sac',
    name: 'Kavurma Sac',
    category: 'ana-yemek',
    price: 830,
    description: 'Geleneksel döküm sacda tereyağıyla kavrulmuş dana kuşbaşı, arpacık soğan, közlenmiş köy biberi ve tırnak pide ile.',
    tag: 'Geleneksel',
    prepTime: '18 dk',
    calories: '740 kcal',
    image: '/menu-images/kavurma-sac.webp'
  },
  {
    id: 'kofte-izgara',
    name: 'Köfte Izgara',
    category: 'ana-yemek',
    price: 710,
    description: 'Özel baharatlı anne köftesi reçetesi, ızgara biber, köz domates, sumaklı kırmızı soğan ve patates tava ile.',
    tag: 'Klasik',
    prepTime: '15 dk',
    calories: '580 kcal',
    image: '/menu-images/kofte-izgara.webp'
  },
  {
    id: 'schnitzel-cafe-de-paris',
    name: 'Schnitzel Cafe de Paris',
    category: 'ana-yemek',
    price: 650,
    description: 'Altın sarısı panko kaplı taze tavuk göğsü, zengin aromalı Cafe de Paris sos ve hafif roka salatası.',
    tag: 'Özel Lezzet',
    prepTime: '15 dk',
    calories: '620 kcal',
    image: '/menu-images/schnitzel-cafe-de-paris-soslu.webp'
  },
  {
    id: 'tavuk-schnitzel',
    name: 'Tavuk Schnitzel',
    category: 'ana-yemek',
    price: 620,
    description: 'Çıtır panko pane tavuk fileto, eritilmiş tereyağı, taze limon dilimleri ve hardallı patates püresi veya patates tava.',
    prepTime: '14 dk',
    calories: '550 kcal',
    image: '/menu-images/tavuk-schnitzel.webp'
  },
  {
    id: 'tavuk-bbq-soslu',
    name: 'Tavuk BBQ Soslu',
    category: 'ana-yemek',
    price: 620,
    description: 'Füme barbekü sosuyla sırlanmış ızgara tavuk parçaları, susam ve çıtır patates.',
    prepTime: '15 dk',
    calories: '530 kcal',
    image: '/menu-images/tavuk-bbq-soslu.webp'
  },
  {
    id: 'tavuk-pirzola-kekikli',
    name: 'Tavuk Pirzola Kekikli',
    category: 'ana-yemek',
    price: 630,
    description: 'Taze dağ kekiği ve zeytinyağı marinasyonlu ızgara kemiksiz tavuk pirzola, közlenmiş sebzelerle.',
    prepTime: '16 dk',
    calories: '490 kcal',
    image: '/menu-images/tavuk-pirzola-kekikli.webp'
  },
  {
    id: 'tavuk-mantar-soslu',
    name: 'Tavuk Mantar Soslu',
    category: 'ana-yemek',
    price: 630,
    description: 'Kültür ve istiridye mantarlı krema sosunda pişirilmiş julyen tavuk göğsü, pirinç pilavı ve patates tava.',
    prepTime: '15 dk',
    calories: '560 kcal',
    image: '/menu-images/tavuk-mantar-soslu.webp'
  },
  {
    id: 'tavuk-kori-soslu',
    name: 'Tavuk Köri Soslu',
    category: 'ana-yemek',
    price: 630,
    description: 'Hint köri baharatları, taze krema, mantar ve kapya biberle harmanlanmış yumuşak tavuk dilimleri.',
    prepTime: '15 dk',
    calories: '540 kcal',
    image: '/menu-images/tavuk-kori-soslu.webp'
  },
  {
    id: 'fajita-combo',
    name: 'Fajita Combo (Et & Tavuk)',
    category: 'ana-yemek',
    price: 570,
    description: 'Cızırdayan döküm tavada marine edilmiş dana eti ve tavuk dilimleri, renkli biberler, guacamole, salsa, ekşi krema ve ılık tortilla.',
    tag: 'Özel Sunum',
    prepTime: '20 dk',
    calories: '720 kcal',
    image: '/menu-images/fajita-combo.webp'
  },
  {
    id: 'fajita-etli',
    name: 'Fajita Etli',
    category: 'ana-yemek',
    price: 570,
    description: 'Döküm tavada sotelenmiş dana bonfile şeritleri, ızgara soğan ve biberler, 3 çeşit sos ve sıcak lavaşlar.',
    prepTime: '18 dk',
    calories: '650 kcal',
    image: '/menu-images/fajita-etli.webp'
  },
  {
    id: 'fajita-tavuk',
    name: 'Fajita Tavuk',
    category: 'ana-yemek',
    price: 550,
    description: 'Meksika baharatlarıyla marine edilmiş tavuk şeritleri, köz sebzeler ve dipsoslar.',
    prepTime: '16 dk',
    calories: '590 kcal',
    image: '/menu-images/fajita-tavuk.webp'
  },

  // --- KAHVALTI ---
  {
    id: 'serpme-kahvalti',
    name: 'Serpme Kahvaltı (2 Kişilik)',
    category: 'kahvalti',
    price: 1500,
    description: 'Ezine beyaz peynir, eski kaşar, çeçil, tulum peyniri, siyah & yeşil zeytin, petek bal-kaymak, ev reçelleri, çikolata kreması, sucuk tava, sahanda yumurta, sigara böreği, patates tava, simit, taze söğüş tabağı ve sınırsız demlik çay.',
    tag: 'Popüler',
    prepTime: '15 dk',
    calories: '1450 kcal',
    image: '/menu-images/serpme-kahvalti.webp'
  },
  {
    id: 'kahvalti-tabagi',
    name: 'Bati Lounge Kahvaltı Tabağı',
    category: 'kahvalti',
    price: 750,
    description: 'Beyaz peynir, taze kaşar, domates, salatalık, haşlanmış köy yumurtası, siyah & yeşil zeytin, bal-tereyağı, reçel, sigara böreği, patates tava ve 2 bardak çay.',
    tag: 'Popüler',
    prepTime: '10 dk',
    calories: '680 kcal',
    image: '/menu-images/kahvalti-tabagi.webp'
  },
  {
    id: 'menemen-karisik',
    name: 'Menemen Karışık (Kaşar & Sucuk)',
    category: 'kahvalti',
    price: 440,
    description: 'Taze tarla domatesleri, tatlı sivri biberler, Afyon sucuğu ve eriyen kaşar peyniriyle bakır tavada.',
    tag: 'Ev Yapımı',
    prepTime: '12 dk',
    calories: '490 kcal',
    image: '/menu-images/menemen-karisik.webp'
  },
  {
    id: 'menemen-sade',
    name: 'Geleneksel Menemen',
    category: 'kahvalti',
    price: 410,
    description: 'Köy yumurtası, tereyağında hafif kavrulmuş domates ve yeşil biberle bakır sahanda sıcak servis.',
    prepTime: '10 dk',
    calories: '340 kcal',
    image: '/menu-images/menemen.webp'
  },
  {
    id: 'omlet-karisik',
    name: 'Omlet Karışık',
    category: 'kahvalti',
    price: 320,
    description: 'Kaşar peyniri, dana sucuk ve mantar dolgulu, yanında mini Akdeniz yeşilliği ile.',
    prepTime: '10 dk',
    calories: '410 kcal',
    image: '/menu-images/omlet-karisik.webp'
  },
  {
    id: 'omlet-mantarli',
    name: 'Omlet Mantarlı',
    category: 'kahvalti',
    price: 320,
    description: 'Tereyağında sotelenmiş taze kültür mantarları ve kekikli çırpılmış yumurta.',
    prepTime: '10 dk',
    calories: '320 kcal',
    image: '/menu-images/omlet-mantarli.webp'
  },
  {
    id: 'omlet-sade',
    name: 'Omlet Sade',
    category: 'kahvalti',
    price: 280,
    description: 'Hafif ve puf kıvamında tereyağlı 3 yumurtalı omlet.',
    prepTime: '8 dk',
    calories: '280 kcal',
    image: '/menu-images/omlet-sade.webp'
  },
  {
    id: 'sucuk-tava',
    name: 'Sucuk Tava',
    category: 'kahvalti',
    price: 320,
    description: 'Hakiki fermente dana sucuk dilimleri, sahanda kendi yağında kızartılmış.',
    prepTime: '8 dk',
    calories: '420 kcal',
    image: '/menu-images/sucuk-tava.webp'
  },
  {
    id: 'yumurta-sahanda',
    name: 'Sahanda Yumurta',
    category: 'kahvalti',
    price: 280,
    description: 'Trabzon tereyağında pişirilmiş iki adet göz yumurta, pul biber ve taze ekmekle.',
    prepTime: '6 dk',
    calories: '260 kcal',
    image: '/menu-images/yumurta-sahanda.webp'
  },

  // --- ATIŞTIRMALIK & BAŞLANGIÇ ---
  {
    id: 'bati-lounge-sepet',
    name: 'Batı Lounge Combo Sepet',
    category: 'atistirmalik',
    price: 620,
    description: 'Çıtır tavuk parçaları, sigara böreği, paçanga dilimleri, sosis tava, soğan halkaları, elma dilim patates, cheddar sos ve sarımsaklı mayonez ile dev paylaşım sepeti.',
    tag: 'En Çok Satan',
    prepTime: '12 dk',
    calories: '890 kcal',
    image: '/menu-images/bati-lounge-sepet.webp'
  },
  {
    id: 'citir-tavuk',
    name: 'Çıtır Tavuk Sepeti',
    category: 'atistirmalik',
    price: 530,
    description: 'Özel baharat karışımlı mısır gevreği kaplı tavuk tenders, patates tava ve ballı hardal sos.',
    tag: 'Popüler',
    prepTime: '10 dk',
    calories: '540 kcal',
    image: '/menu-images/citir-tavuk.webp'
  },
  {
    id: 'pacanga-boregi',
    name: 'Paçanga Böreği (3 Adet)',
    category: 'atistirmalik',
    price: 470,
    description: 'Çemenli kayseri pastırması, bol kaşar peyniri, domates ve biber dolgulu çıtır yufka böreği.',
    tag: 'Ev Yapımı',
    prepTime: '10 dk',
    calories: '480 kcal',
    image: '/menu-images/pacanga-boregi.webp'
  },
  {
    id: 'sigara-boregi',
    name: 'Sigara Böreği (5 Adet)',
    category: 'atistirmalik',
    price: 430,
    description: 'Maydanozlu Ezine peyniri dolgulu, altın rengi kızartılmış geleneksel kalem börek.',
    prepTime: '8 dk',
    calories: '360 kcal',
    image: '/menu-images/sigara-boregi.webp'
  },
  {
    id: 'sosis-tava',
    name: 'Sosis Tava',
    category: 'atistirmalik',
    price: 360,
    description: 'Kekikli domates sosunda sotelenmiş dana kokteyl sosisler, patates tava ile.',
    prepTime: '8 dk',
    calories: '410 kcal',
    image: '/menu-images/sosis-tava.webp'
  },
  {
    id: 'patates-tava',
    name: 'Patates Tava (Özel Baharatlı)',
    category: 'atistirmalik',
    price: 350,
    description: 'Cajun baharatlı ve deniz tuzlu çıtır patates kızartması, trüflü mayonez ile.',
    prepTime: '6 dk',
    calories: '380 kcal',
    image: '/menu-images/patates-tava.webp'
  },
  {
    id: 'sogan-halkasi',
    name: 'Çıtır Soğan Halkası (10 Adet)',
    category: 'atistirmalik',
    price: 310,
    description: 'Bira hamuru kaplamalı çıtır soğan halkaları, acılı barbekü sos ile.',
    prepTime: '6 dk',
    calories: '310 kcal',
    image: '/menu-images/sogan-halkasi.webp'
  },

  // --- BURGER & WRAP ---
  {
    id: 'burger-bati-lounge',
    name: 'Batı Lounge Special Burger',
    category: 'burger-wrap',
    price: 570,
    description: '180g ev yapımı dana köfte, karamelize soğan, çıtır füme kaburga, eritilmiş cheddar, trüf mayonez, taze marul, brioche ekmeği ve baharatlı patates.',
    tag: 'Özel Lezzet',
    prepTime: '15 dk',
    calories: '840 kcal',
    image: '/menu-images/burger-bati-lounge.webp'
  },
  {
    id: 'cheeseburger',
    name: 'Double Cheddar Cheeseburger',
    category: 'burger-wrap',
    price: 490,
    description: '150g sulu burger köftesi, çift kat eritilmiş İngiliz cheddar peyniri, kornişon turşu, ev yapımı burger sosu.',
    tag: 'Favori',
    prepTime: '14 dk',
    calories: '720 kcal',
    image: '/menu-images/cheeseburger.webp'
  },
  {
    id: 'hamburger-klasik',
    name: 'Klasik Hamburger',
    category: 'burger-wrap',
    price: 480,
    description: '150g ızgara dana köfte, domates, marul, tatlı turşu ve el yapımı patates tava.',
    prepTime: '12 dk',
    calories: '620 kcal',
    image: '/menu-images/hamburger.webp'
  },
  {
    id: 'wrap-etli',
    name: 'Wrap Etli',
    category: 'burger-wrap',
    price: 570,
    description: 'Sotelenmiş dana bonfile şeritleri, köz biber, eritilmiş kaşar peyniri ve mantar, sıcak tortillada sarılı.',
    tag: 'Doyurucu',
    prepTime: '14 dk',
    calories: '610 kcal',
    image: '/menu-images/wrap-etli.webp'
  },
  {
    id: 'wrap-izgara-kofte',
    name: 'Wrap Izgara Köfte',
    category: 'burger-wrap',
    price: 570,
    description: 'Izgara köfte dilimleri, köz patlıcan sosu, domates, sumaklı soğan ve kaşar peyniri.',
    prepTime: '12 dk',
    calories: '590 kcal',
    image: '/menu-images/wrap-izgara-kofte.webp'
  },
  {
    id: 'wrap-tavuk-mantar',
    name: 'Wrap Tavuk & Mantar',
    category: 'burger-wrap',
    price: 550,
    description: 'Kremalı tavuk ve mantar sotesi, rendelenmiş mozarella ve çıtır patates eşliğinde.',
    prepTime: '12 dk',
    calories: '530 kcal',
    image: '/menu-images/wrap-tavuk-ve-mantar.webp'
  },

  // --- PIZZA, PİDE & TOST ---
  {
    id: 'pizza-bati-special',
    name: 'Batı Lounge Special Pizza',
    category: 'pizza-pide',
    price: 610,
    description: 'İtalyan domates sosu, mozzarella, dana sucuk, füme et dilimleri, mantar, közlenmiş kapya biber, mısır ve kekikli zeytinyağı.',
    tag: 'Özel Lezzet',
    prepTime: '15 dk',
    calories: '880 kcal',
    image: '/menu-images/bati-lounge-special-pizza.webp'
  },
  {
    id: 'pizza-karisik',
    name: 'Pizza Karışık',
    category: 'pizza-pide',
    price: 570,
    description: 'Mozzarella, sucuk, salam, sosis, mantar, yeşil biber, siyah zeytin ve mısır.',
    tag: 'Klasik',
    prepTime: '15 dk',
    calories: '820 kcal',
    image: '/menu-images/karisik-pizza.webp'
  },
  {
    id: 'pizza-4-peynirli',
    name: 'Pizza 4 Peynirli (Quattro Formaggi)',
    category: 'pizza-pide',
    price: 550,
    description: 'Mozzarella, gorgonzola/rokfor esintisi, gouda ve parmesan peyniri, taze fesleğenle.',
    prepTime: '14 dk',
    calories: '790 kcal',
    image: '/menu-images/4-peynirli-pizza.webp'
  },
  {
    id: 'pizza-bbq',
    name: 'Pizza Barbekü Tavuklu',
    category: 'pizza-pide',
    price: 550,
    description: 'Füme barbekü sos tabanı, mozzarella, ızgara tavuk parçaları, kırmızı soğan ve mısır.',
    prepTime: '14 dk',
    calories: '760 kcal',
    image: '/menu-images/bbq-pizza.webp'
  },
  {
    id: 'pizza-margarita',
    name: 'Pizza Margherita',
    category: 'pizza-pide',
    price: 530,
    description: 'San Marzano domates sosu, manda mozzarellası, sızma zeytinyağı ve taze fesleğen yaprakları.',
    prepTime: '12 dk',
    calories: '650 kcal',
    image: '/menu-images/margarita-pizza.webp'
  },
  {
    id: 'kavurma-pide',
    name: 'Kavurmalı Kaşarlı Pide',
    category: 'pizza-pide',
    price: 590,
    description: 'Taş fırında pişen çıtır hamur üzerinde bol dana kavurma ve eriyen köy kaşarı, tereyağlı kenarlar.',
    tag: 'Fırından Taze',
    prepTime: '14 dk',
    calories: '810 kcal',
    image: '/menu-images/kavurma-pide.webp'
  },
  {
    id: 'karisik-pide',
    name: 'Karışık Pide',
    category: 'pizza-pide',
    price: 570,
    description: 'Kıymalı harç, dana sucuk, taze kaşar peyniri ve domates-biber.',
    prepTime: '14 dk',
    calories: '780 kcal',
    image: '/menu-images/karisik-pide.webp'
  },
  {
    id: 'peynirli-pide',
    name: 'Peynirli Pide',
    category: 'pizza-pide',
    price: 500,
    description: 'Ezine ve kaşar peyniri harmanlı, tereyağlı çıtır taş fırın pidesi.',
    prepTime: '12 dk',
    calories: '690 kcal',
    image: '/menu-images/peynirli-pide.webp'
  },
  {
    id: 'ayvalik-tostu',
    name: 'Ayvalık Tostu',
    category: 'pizza-pide',
    price: 430,
    description: 'Özel Ayvalık ekmeğinde bol sucuk, salam, sosis, kaşar, turşu, domates ve Rus salatası.',
    tag: 'Doyurucu',
    prepTime: '10 dk',
    calories: '640 kcal',
    image: '/menu-images/ayvalik-tostu.webp'
  },
  {
    id: 'kavurmali-tost',
    name: 'Kavurmalı Kaşarlı Tost',
    category: 'pizza-pide',
    price: 390,
    description: 'Köy ekmeğinde lezzetli dana kavurma ve bol kaşar peyniri, domates-salatalık ile.',
    prepTime: '8 dk',
    calories: '520 kcal',
    image: '/menu-images/kavurmali-tost.webp'
  },
  {
    id: 'cheddar-tost',
    name: 'Cheddar & Sucuk Tost',
    category: 'pizza-pide',
    price: 390,
    description: 'Yoğun cheddar peyniri ve baharatlı dana sucuk, çıtır tost ekmeğinde.',
    prepTime: '8 dk',
    calories: '490 kcal',
    image: '/menu-images/cheddar-tost.webp'
  },
  {
    id: 'karisik-tost',
    name: 'Karışık Tost',
    category: 'pizza-pide',
    price: 370,
    description: 'Kasap sucuğu ve eriyen kaşar peyniri, çıtır patates ile.',
    prepTime: '8 dk',
    calories: '450 kcal',
    image: '/menu-images/karisik-tost.webp'
  },
  {
    id: 'cift-kasarli-tost',
    name: 'Çift Kaşarlı Tost',
    category: 'pizza-pide',
    price: 350,
    description: 'Bol sütlü taze kaşar peyniriyle hazırlanan klasik tereyağlı tost.',
    prepTime: '7 dk',
    calories: '410 kcal',
    image: '/menu-images/cift-kasarli-tost.webp'
  },
  {
    id: 'beyaz-peynirli-tost',
    name: 'Beyaz Peynirli Domatesli Tost',
    category: 'pizza-pide',
    price: 340,
    description: 'Ezine beyaz peynir, kekikli tarla domatesi ve zeytin ezmesi sürülü tost.',
    prepTime: '7 dk',
    calories: '380 kcal',
    image: '/menu-images/beyaz-peynirli-tost.webp'
  },

  // --- MAKARNA & SALATALAR ---
  {
    id: 'fettuccine-alfredo',
    name: 'Fettuccine Alfredo',
    category: 'makarna-salata',
    price: 480,
    description: 'Taze el yapımı fettuccine makarna, krema sosunda sotelenmiş jülyen tavuk ve mantar, sarımsak, taze parmesan peyniri ve fesleğen.',
    tag: 'İtalyan Klasiği',
    prepTime: '12 dk',
    calories: '670 kcal',
    image: '/menu-images/fettuccine-alfredo.webp'
  },
  {
    id: 'penne-al-karne',
    name: 'Penne Al Karne',
    category: 'makarna-salata',
    price: 480,
    description: 'Sotelenmiş dana bonfile parçaları, kestane mantarı, demi-glace krema sosu ve parmesan rendesi.',
    tag: 'Özel Lezzet',
    prepTime: '14 dk',
    calories: '690 kcal',
    image: '/menu-images/penne-al-karne.webp'
  },
  {
    id: 'spagetti-bolognese',
    name: 'Spagetti Bolognese',
    category: 'makarna-salata',
    price: 480,
    description: 'Ağır ateşte 4 saat pişmiş kıymalı kök sebzeli İtalyan ragu sosu, fesleğen ve parmesan.',
    prepTime: '12 dk',
    calories: '590 kcal',
    image: '/menu-images/spagetti-bolognese.webp'
  },
  {
    id: 'penne-arabiata',
    name: 'Penne All’Arrabbiata',
    category: 'makarna-salata',
    price: 430,
    description: 'Acılı sarımsaklı domates sosu, dilimlenmiş siyah zeytin, taze maydanoz ve parmesan peyniri.',
    tag: 'Hafif Acılı',
    prepTime: '10 dk',
    calories: '480 kcal',
    image: '/menu-images/penne-arabiata.webp'
  },
  {
    id: 'spagetti-napolitan',
    name: 'Spagetti Napolitan',
    category: 'makarna-salata',
    price: 480,
    description: 'Fesleğenli taze domates sosu, zeytinyağı ve parmesan.',
    prepTime: '10 dk',
    calories: '460 kcal',
    image: '/menu-images/spagetti-napolitan.webp'
  },
  {
    id: 'beef-salata',
    name: 'Ilık Bonfile Dilimli Beef Salata',
    category: 'makarna-salata',
    price: 520,
    description: 'Marine edilmiş ızgara bonfile dilimleri, körpe Akdeniz yeşillikleri, çeri domates, kurutulmuş domates, ceviz, parmesan ve balzamik sos.',
    tag: 'Fit & Lüks',
    prepTime: '12 dk',
    calories: '460 kcal',
    image: '/menu-images/beef-salata.webp'
  },
  {
    id: 'tavuklu-sezar-salata',
    name: 'Tavuklu Sezar Salata',
    category: 'makarna-salata',
    price: 480,
    description: 'Izgara tavuk fileto, taze marul yaprakları, sarımsaklı kruton ekmekler, Sezar sos ve ince traş parmesan.',
    tag: 'Popüler',
    prepTime: '10 dk',
    calories: '420 kcal',
    image: '/menu-images/tavuklu-sezar-salata.webp'
  },
  {
    id: 'hellim-peynirli-salata',
    name: 'Izgara Hellim Salata',
    category: 'makarna-salata',
    price: 480,
    description: 'Kömürde ızgara edilmiş Kıbrıs hellim peyniri, nar ekşili zeytinyağlı taze mevsim yeşillikleri, mısır ve ceviz içi.',
    prepTime: '10 dk',
    calories: '390 kcal',
    image: '/menu-images/hellim-peynirli-salata.webp'
  },
  {
    id: 'ton-balikli-salata',
    name: 'Ton Balıklı Akdeniz Salatası',
    category: 'makarna-salata',
    price: 470,
    description: 'Parça ton balığı, haşlanmış mısır, kapari, zeytin, kırmızı soğan, taze yeşillikler ve limon sos.',
    prepTime: '8 dk',
    calories: '370 kcal',
    image: '/menu-images/ton-balikli-salata.webp'
  },

  // --- TATLI & MEYVE ---
  {
    id: 'sufle-ev-yapimi',
    name: 'Ev Yapımı Sıcak Çikolatalı Sufle',
    category: 'tatli',
    price: 360,
    description: 'Belçika çikolatasıyla anında fırınlanan akışkan sıcak sufle, yanında vanilyalı Maraş dondurması ile.',
    tag: 'Popüler',
    prepTime: '12 dk',
    calories: '510 kcal',
    image: '/menu-images/sufle-ev-yapimi.webp'
  },
  {
    id: 'browni',
    name: 'Ilık Fıstıklı Brownie',
    category: 'tatli',
    price: 370,
    description: 'Cevizli ve yoğun Belçika çikolatalı fırın brownie, sıcak çikolata ganajı ve dondurma eşliğinde.',
    tag: 'Popüler',
    prepTime: '8 dk',
    calories: '540 kcal',
    image: '/menu-images/browni.webp'
  },
  {
    id: 'bati-lounge-pasta',
    name: 'Batı Lounge Özel İmza Pasta',
    category: 'tatli',
    price: 360,
    description: 'Günün taze artisan pasta reçetesi, çıtır pralin taban, kadife krema ve orman meyvesi coulis.',
    tag: 'Özel Sunum',
    prepTime: '5 dk',
    calories: '460 kcal',
    image: '/menu-images/bati-lounge-pasta.webp'
  },
  {
    id: 'tiramisu',
    name: 'Orijinal İtalyan Tiramisu',
    category: 'tatli',
    price: 360,
    description: 'Espresso ile ıslatılmış savoiardi kedidili bisküvileri, mascarpone peynirli ipeksi krema ve saf kakao tozu.',
    prepTime: '5 dk',
    calories: '390 kcal',
    image: '/menu-images/tiramusu.webp'
  },
  {
    id: 'cheesecake-san-sebastian',
    name: 'San Sebastian Cheesecake',
    category: 'tatli',
    price: 340,
    description: 'Yüksek ısıda fırınlanmış karamelize dış kabuk, akışkan krema dokusu, sıcak Belçika çikolatası dökülerek servis.',
    tag: 'Favori',
    prepTime: '5 dk',
    calories: '480 kcal',
    image: '/menu-images/cheesecake.webp'
  },
  {
    id: 'profiterol',
    name: 'Özel Çikolatalı Profiterol',
    category: 'tatli',
    price: 360,
    description: 'Taze şu hamurları içinde nefis pastacı kreması, bol sıcak çikolata sosu ve Antep fıstığı tozu.',
    prepTime: '5 dk',
    calories: '420 kcal',
    image: '/menu-images/profiterol.webp'
  },
  {
    id: 'meyve-tabagi',
    name: 'Lüks Mevsim Meyveleri Tabağı',
    category: 'tatli',
    price: 650,
    description: 'Özenle dilimlenmiş ananas, çilek, kivi, muz, elma, portakal, üzüm ve taze nane yaprakları ile paylaşımlık sunum.',
    tag: 'Paylaşımlık',
    prepTime: '10 dk',
    calories: '280 kcal',
    image: '/menu-images/meyve-tabagi.webp'
  },
  {
    id: 'kuruyemis',
    name: 'Lüks Kavrulmuş Kuruyemiş Tabağı',
    category: 'tatli',
    price: 320,
    description: 'Kaju, Antep fıstığı, kavrulmuş badem, fındık ve ceviz içi karışımı.',
    prepTime: '3 dk',
    calories: '410 kcal',
    image: '/menu-images/kuruyemis.webp'
  },

  // --- KAHVE & ÇAY RİTÜELİ ---
  {
    id: 'kahve-turk',
    name: 'Geleneksel Türk Kahvesi',
    category: 'kahve-cay',
    price: 180,
    description: 'Taze çekilmiş taş değirmen çekirdekleri, közde yavaş pişirme, lokum ve su ikramı ile.',
    tag: 'Klasik',
    prepTime: '5 dk',
    calories: '15 kcal',
    image: '/menu-images/kahve-turk.webp'
  },
  {
    id: 'kahve-turk-double',
    name: 'Double Türk Kahvesi',
    category: 'kahve-cay',
    price: 220,
    description: 'Duble fincanda yoğun aromalı geleneksel Türk kahvesi.',
    prepTime: '5 dk',
    calories: '25 kcal',
    image: '/menu-images/kahve-turk-double.webp'
  },
  {
    id: 'kahve-dibek',
    name: 'Dibek Kahvesi',
    category: 'kahve-cay',
    price: 180,
    description: 'Havanla dövülmüş 7 çeşit baharatlı ve yumuşak içimli aromatik Türk kahvesi.',
    prepTime: '5 dk',
    calories: '35 kcal',
    image: '/menu-images/kahve-turk-dibek.webp'
  },
  {
    id: 'flat-white',
    name: 'Flat White (Specialty Roast)',
    category: 'kahve-cay',
    price: 250,
    description: 'Double ristretto üzerine mikro köpüklü ipeksi sıcak süt, güçlü espresso notaları.',
    tag: 'Barista Seçimi',
    prepTime: '4 dk',
    calories: '120 kcal',
    image: '/menu-images/flat-white.webp'
  },
  {
    id: 'cafe-latte',
    name: 'Caffe Latte',
    category: 'kahve-cay',
    price: 250,
    description: 'Espresso, buharda ısıtılmış kadife süt ve hafif süt kreması.',
    prepTime: '4 dk',
    calories: '140 kcal',
    image: '/menu-images/cafe-latte.webp'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'kahve-cay',
    price: 250,
    description: 'Eşit oranlı espresso, sıcak süt ve yoğun süt köpüğü, kakao serpintisi ile.',
    prepTime: '4 dk',
    calories: '110 kcal',
    image: '/menu-images/cappuccino.webp'
  },
  {
    id: 'americano',
    name: 'Caffe Americano',
    category: 'kahve-cay',
    price: 250,
    description: 'Double shot taze espresso ve sıcak suyun berrak dengesi.',
    prepTime: '3 dk',
    calories: '10 kcal',
    image: '/menu-images/americano.webp'
  },
  {
    id: 'espresso-double',
    name: 'Double Espresso',
    category: 'kahve-cay',
    price: 280,
    description: '%100 Arabica çekirdeklerinden yoğun kremalı çift shot İtalyan espresso.',
    prepTime: '2 dk',
    calories: '5 kcal',
    image: '/menu-images/espresso-double.webp'
  },
  {
    id: 'chai-latte',
    name: 'Chai Tea Latte',
    category: 'kahve-cay',
    price: 250,
    description: 'Siyah çay, tarçın, kakule, zencefil baharat harmanı ve buharlanmış tatlı süt köpüğü.',
    prepTime: '4 dk',
    calories: '180 kcal',
    image: '/menu-images/chai-latte.webp'
  },
  {
    id: 'white-chocolate-mocha',
    name: 'White Chocolate Mocha',
    category: 'kahve-cay',
    price: 250,
    description: 'Beyaz çikolata sosu, espresso, süt ve krema.',
    prepTime: '4 dk',
    calories: '260 kcal',
    image: '/menu-images/white-chocolate-mocha.webp'
  },
  {
    id: 'sahlep',
    name: 'Geleneksel Dağ Sahlepi',
    category: 'kahve-cay',
    price: 250,
    description: 'Doğal sahlep tozu, tam yağlı süt ve bol tarçınla sıcacık kış lezzeti.',
    prepTime: '5 dk',
    calories: '220 kcal',
    image: '/menu-images/sahlep.webp'
  },
  {
    id: 'cay-bardak',
    name: 'Taze Demleme Bardak Çay',
    category: 'kahve-cay',
    price: 55,
    description: 'Rize yaylalarından harmanlanmış, bakır semaverde demlenmiş taze çay.',
    prepTime: '1 dk',
    calories: '2 kcal',
    image: '/menu-images/cay-bardak.webp'
  },
  {
    id: 'cay-yesil-cesitleri',
    name: 'Özel Bitki & Yeşil Çay Potu',
    category: 'kahve-cay',
    price: 300,
    description: 'Yaseminli yeşil çay, ıhlamur, adaçayı, kış çayı veya papatya seçenekleriyle porselen pot servisi.',
    prepTime: '5 dk',
    calories: '5 kcal',
    image: '/menu-images/cay-yesil-cesitleri.webp'
  },

  // --- SOĞUK İÇECEK & MOCKTAIL ---
  {
    id: 'bati-sunset-mocktail',
    name: 'Bati Sunset Signature Mocktail',
    category: 'soguk-icecek',
    price: 280,
    description: 'Taze nar suyu, çarkıfelek (passion fruit), misket limonu, zencefil gazozu ve biberiye dumanı.',
    tag: 'İmza İçecek',
    prepTime: '4 dk',
    calories: '110 kcal',
    image: '/menu-images/bati-sunset-mocktail.webp'
  },
  {
    id: 'limonata-ev-yapimi',
    name: 'Ev Yapımı Taze Nane Limonata',
    category: 'soguk-icecek',
    price: 230,
    description: 'Taze sıkılmış Bodrum limonları, taze nane yaprakları ve hafif esmer şeker ile buz gibi ferahlık.',
    tag: 'Ev Yapımı',
    prepTime: '3 dk',
    calories: '95 kcal',
    image: '/menu-images/limonata.webp'
  },
  {
    id: 'meyve-suyu-taze',
    name: 'Taze Sıkılmış Portakal / Nar Suyu',
    category: 'soguk-icecek',
    price: 320,
    description: 'Sipariş anında taze portakal veya nar preslenerek katkısız servis edilir.',
    tag: 'Doğal',
    prepTime: '4 dk',
    calories: '130 kcal',
    image: '/menu-images/meyve-suyu-taze-sikilmis.webp'
  },
  {
    id: 'milkshake-cesitleri',
    name: 'Artisan Milkshake (Çilek / Çikolata / Karamel / Muz)',
    category: 'soguk-icecek',
    price: 250,
    description: 'Hakiki İtalyan dondurması, taze süt, krema ve çikolata/meyve parçacıkları ile.',
    prepTime: '4 dk',
    calories: '320 kcal',
    image: '/menu-images/milkshake.webp'
  },
  {
    id: 'frozen-cesitleri',
    name: 'Buzlu Frozen (Karpuz / Çilek / Mango / Böğürtlen)',
    category: 'soguk-icecek',
    price: 250,
    description: 'Taze meyve püreleri ve kırılmış buzun eşsiz ferahlatıcı uyumu.',
    prepTime: '3 dk',
    calories: '140 kcal',
    image: '/menu-images/frozen.webp'
  },
  {
    id: 'frappe-cesitleri',
    name: 'Frappe & Iced Latte',
    category: 'soguk-icecek',
    price: 250,
    description: 'Köpürtülmüş soğuk espresso, soğuk süt, buz ve isteğe göre vanilya / karamel şurubu.',
    prepTime: '3 dk',
    calories: '110 kcal',
    image: '/menu-images/frappe.webp'
  },
  {
    id: 'churchill',
    name: 'Klasik Churchill',
    category: 'soguk-icecek',
    price: 110,
    description: 'Taze limon suyu, kaya tuzu ve doğal maden suyu.',
    prepTime: '2 dk',
    calories: '15 kcal',
    image: '/menu-images/churchill.webp'
  },
  {
    id: 'redbull',
    name: 'Red Bull Energy Drink',
    category: 'soguk-icecek',
    price: 220,
    description: 'Klasik veya şekersiz kutu enerji içeceği.',
    prepTime: '1 dk',
    calories: '115 kcal',
    image: '/menu-images/redbull.webp'
  },

  // --- LOUNGE & NARGİLE ---
  {
    id: 'nargile-bati-special',
    name: 'Batı Lounge Imperial Blend Nargile',
    category: 'lounge-nargile',
    price: 680,
    description: 'Özel ithal Dark Leaf ve Blonde tütün harmanı, buzlu cam marpuç, doğal Hindistan cevizi kömürü ile pürüzsüz yoğun duman performansı.',
    tag: 'Özel Sunum',
    prepTime: '8 dk',
    calories: '-',
    image: '/menu-images/imperial-nargile.webp'
  },
  {
    id: 'nargile-love66',
    name: 'Love 66 & Lady Killer Special',
    category: 'lounge-nargile',
    price: 640,
    description: 'Kavun, çarkıfelek, taze nane ve kırmızı orman meyveleri esintili ferahlatıcı premium karışım.',
    tag: 'Popüler',
    prepTime: '8 dk',
    calories: '-',
    image: '/menu-images/imperial-nargile.webp'
  },
  {
    id: 'nargile-cift-elma',
    name: 'Klasik Çift Elma & Anason Nargile',
    category: 'lounge-nargile',
    price: 620,
    description: 'Otantik lezzet sevenler için geleneksel çift elma aroması.',
    prepTime: '8 dk',
    calories: '-',
    image: '/menu-images/imperial-nargile.webp'
  },
  {
    id: 'nargile-meyve-baslikli',
    name: 'Taze Ananas Başlıklı VIP Nargile',
    category: 'lounge-nargile',
    price: 890,
    description: 'Oyulmuş taze ananas başlığı içinde özel tropikal aromalar ve buzlu hortum ile lüks sunum.',
    tag: 'VIP Özel',
    prepTime: '12 dk',
    calories: '-',
    image: '/menu-images/ananas-vip-nargile.webp'
  },
];
