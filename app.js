/**
 * KaryaTeknik - Persewaan Perkakas & Alat Teknik
 * Core Application Logic, Reactive State & Multi-Page Modular Support
 */

(function () {
  'use strict';

  // --- 1. Tool Data Catalog (SVG Vector Rendered for Crisp Visuals) ---
  const toolsData = [
    {
      id: 1,
      name: "Rotary Hammer Drill SDS-Plus 800W",
      brand: "Bosch GBH 2-26 DRE",
      category: "power-tools",
      categoryLabel: "Power Tools",
      priceDaily: 65000,
      priceWeekly: 380000,
      deposit: 200000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 98,
      specs: [
        "Daya Listrik: 800 Watt",
        "Kapasitas Bor Beton: s.d 26 mm",
        "Mode: Bor, Impact & Bobok Ringan",
        "Kecepatan: 0 - 900 RPM / 4000 BPM"
      ],
      includes: "1x Koper Heavy-Duty, 3x Mata Bor SDS (8, 10, 12mm), 1x Pahat Pointed Chisel, Gagang Samping & Rod Pengukur Kedalaman.",
      description: "Mesin bor beton spesialis tembok cor, kolom beton, dan batu keras. Dilengkapi mekanisme safety clutch yang melindungi tangan pengguna saat mata bor tersangkut.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="15" y="60" width="45" height="8" rx="2" fill="#94a3b8" />
          <polygon points="10,64 16,61 16,67" fill="#64748b" />
          <rect x="58" y="54" width="22" height="20" rx="3" fill="#0f172a" />
          <path d="M78 48 L118 50 L115 82 L78 80 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
          <path d="M115 45 L160 45 C168 45 175 52 175 62 L175 82 C175 90 168 94 160 94 L115 86 Z" fill="#0284c7" />
          <path d="M152 86 C160 90 168 100 164 118 C162 124 152 125 145 124 C138 114 142 100 138 88 Z" fill="#1e293b" />
          <rect x="140" y="94" width="10" height="6" rx="2" fill="#ef4444" />
          <rect x="92" y="78" width="8" height="38" rx="3" fill="#334155" />
        </svg>
      `
    },
    {
      id: 2,
      name: "Angle Grinder (Gerinda Tangan 4\")",
      brand: "Makita 9553B / 720W",
      category: "power-tools",
      categoryLabel: "Power Tools",
      priceDaily: 45000,
      priceWeekly: 260000,
      deposit: 150000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 94,
      specs: [
        "Daya Listrik: 720 Watt",
        "Diameter Mata: 100 mm (4 Inci)",
        "Kecepatan Tanpa Beban: 11.000 RPM",
        "Bobot Ringan: 1.8 kg"
      ],
      includes: "1x Unit Gerinda, 1x Pelindung Mata (Safety Guard), 1x Gagang Samping, 1x Kunci Pengencang Flange.",
      description: "Mesin gerinda andalan untuk pemotongan besi hollow, pipa baja, keramik, maupun pengikisan las dan pemolesan permukaan logam secara presisi.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <ellipse cx="45" cy="65" rx="12" ry="32" fill="#64748b" />
          <ellipse cx="45" cy="65" rx="5" ry="12" fill="#0f172a" />
          <path d="M42 42 L65 48 L65 82 L42 88 Z" fill="#0f4c5c" />
          <rect x="62" y="48" width="28" height="34" rx="4" fill="#94a3b8" />
          <path d="M90 52 L170 52 C178 52 182 56 182 65 C182 74 178 78 170 78 L90 78 Z" fill="#0d9488" />
          <rect x="135" y="56" width="30" height="18" rx="2" fill="#134e4a" />
          <rect x="178" y="62" width="12" height="6" rx="2" fill="#1e293b" />
        </svg>
      `
    },
    {
      id: 3,
      name: "Mesin Las Inverter 450W - 900W Eco",
      brand: "Lakoni Falcon 120e / MMA",
      category: "power-tools",
      categoryLabel: "Power Tools",
      priceDaily: 55000,
      priceWeekly: 320000,
      deposit: 200000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 91,
      specs: [
        "Daya: 450 Watt (Tarikan Awal Hemat)",
        "Arus Output: 10 - 120 Ampere",
        "Kawat Las Cocok: 1.6mm - 2.6mm",
        "Fitur: Anti-Stick & Overheat Cutoff"
      ],
      includes: "1x Mesin Las, 1x Tang Las Holder + Kabel 3m, 1x Tang Massa + Kabel 2m, 1x Kedok Las Handheld, 1x Sikat Kawat Pembersih Terak.",
      description: "Mesin las inverter hemat listrik yang sangat cocok untuk listrik rumahan 900VA/1300VA. Busur api stabil, minim spatter, dan hasil matang maksimal untuk pengerjaan pagar, kanopi, atau tralis.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="40" y="32" width="120" height="75" rx="8" fill="#d97706" stroke="#b45309" stroke-width="2" />
          <rect x="35" y="24" width="130" height="10" rx="3" fill="#1e293b" />
          <path d="M70 24 Q100 12 130 24" stroke="#475569" stroke-width="4" fill="none" stroke-linecap="round" />
          <rect x="52" y="46" width="34" height="24" rx="3" fill="#0f172a" />
          <text x="56" y="63" font-family="monospace" font-size="12" fill="#22c55e" font-weight="bold">120A</text>
          <circle cx="108" cy="58" r="9" fill="#1e293b" />
          <line x1="108" y1="58" x2="114" y2="54" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="65" cy="90" r="6" fill="#ef4444" />
          <circle cx="135" cy="90" r="6" fill="#0f172a" />
          <line x1="145" y1="48" x2="145" y2="72" stroke="#ffffff" stroke-width="2" opacity="0.4" />
          <line x1="149" y1="48" x2="149" y2="72" stroke="#ffffff" stroke-width="2" opacity="0.4" />
        </svg>
      `
    },
    {
      id: 4,
      name: "Circular Saw 7-1/4\" (Gergaji Kayu Listrik)",
      brand: "DeWalt DWE560 / 1350W",
      category: "power-tools",
      categoryLabel: "Power Tools",
      priceDaily: 60000,
      priceWeekly: 350000,
      deposit: 200000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 88,
      specs: [
        "Daya Listrik: 1350 Watt",
        "Diameter Pisau: 184 mm (7.25 Inci)",
        "Kedalaman Potong: 65 mm (Sudut 90°)",
        "Kemiringan Potong: 0 - 48 Derajat"
      ],
      includes: "1x Circular Saw, 1x Mata Gergaji Kayu TCT 40T (Tajam), 1x Guide Fence Paralel, 1x Kunci Hex Blade.",
      description: "Gergaji kayu elektrik bertenaga tinggi untuk membelah papan multiplek, balok kaso, dan furniture dengan hasil potongan lurus, rapi, dan cepat.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <ellipse cx="90" cy="72" rx="38" ry="38" fill="#cbd5e1" stroke="#64748b" stroke-width="2" stroke-dasharray="6,3" />
          <path d="M52 48 L128 48 C135 48 140 55 138 65 L132 82 L48 82 Z" fill="#eab308" />
          <path d="M125 45 L155 35 C162 32 170 38 168 46 L160 62 L135 56 Z" fill="#1e293b" />
          <rect x="40" y="85" width="110" height="8" rx="2" fill="#0f172a" />
          <rect x="110" y="60" width="18" height="18" rx="3" fill="#0284c7" />
        </svg>
      `
    },
    {
      id: 5,
      name: "Tamping Rammer (Stamper Kuda Pemadat Tanah)",
      brand: "Honda GX160 / 5.5 HP Original",
      category: "konstruksi",
      categoryLabel: "Konstruksi & Cor",
      priceDaily: 140000,
      priceWeekly: 820000,
      deposit: 500000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 97,
      specs: [
        "Mesin: 4-Tak Bensin Murni Honda GX160",
        "Daya Tumbuk: 10 - 13 kN",
        "Frekuensi Hentakan: 450 - 650 kali/menit",
        "Ukuran Plat Tumbuk: 340 x 285 mm"
      ],
      includes: "1x Unit Mesin Tamping Rammer (Kondisi Siap Pakai, Oli Terisi), Pengaman Foot Rammer, Buku Petunjuk Operasional.",
      description: "Mesin pemadat tanah fondasi, pengurukan lantai bangunan, dan perataan sirtu sebelum pengecoran jalan. Tenaga hentakan kuat menghasilkan kepadatan tanah optimal.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="65" y="108" width="70" height="14" rx="3" fill="#0f172a" stroke="#d97706" stroke-width="2" />
          <path d="M85 80 L115 80 L112 108 L88 108 Z" fill="#eab308" stroke="#ca8a04" stroke-width="1.5" />
          <line x1="86" y1="88" x2="114" y2="88" stroke="#1e293b" stroke-width="2" />
          <line x1="87" y1="96" x2="113" y2="96" stroke="#1e293b" stroke-width="2" />
          <line x1="88" y1="102" x2="112" y2="102" stroke="#1e293b" stroke-width="2" />
          <rect x="75" y="44" width="50" height="36" rx="4" fill="#dc2626" />
          <rect x="80" y="32" width="40" height="12" rx="2" fill="#1e293b" />
          <path d="M70 42 L60 22 L140 22 L130 42" stroke="#475569" stroke-width="3" fill="none" stroke-linecap="round" />
          <circle cx="100" cy="62" r="12" fill="#ffffff" opacity="0.8" />
          <text x="94" y="66" font-size="9" font-weight="bold" fill="#000">GX</text>
        </svg>
      `
    },
    {
      id: 6,
      name: "Jack Hammer Demolition Breaker 15kg",
      brand: "Makita HM1306 Heavy Breaker",
      category: "konstruksi",
      categoryLabel: "Konstruksi & Cor",
      priceDaily: 110000,
      priceWeekly: 650000,
      deposit: 400000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 93,
      specs: [
        "Daya Listrik: 1510 Watt",
        "Kekuatan Pukul: 28.8 Joule",
        "Kecepatan Pukul: 1450 BPM",
        "Tipe Chuck: Hex 30 mm"
      ],
      includes: "1x Kotak Koper Besi, 1x Mata Pahat Runcing (Pointed), 1x Mata Pahat Pipih (Flat Chisel), 1x Kunci Pembuka & Pelumas Gemuk Khusus.",
      description: "Mesin bobok beton berkekuatan tinggi untuk pembongkaran cor dak, pondasi beton bertulang, aspal jalan, dan perataan dinding batu tebal.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="94" y="85" width="12" height="35" fill="#94a3b8" />
          <polygon points="94,120 106,120 100,128" fill="#64748b" />
          <rect x="88" y="70" width="24" height="15" rx="3" fill="#0f172a" />
          <rect x="85" y="32" width="30" height="40" rx="3" fill="#0d9488" stroke="#115e59" stroke-width="1.5" />
          <path d="M80 32 L80 18 Q100 12 120 18 L120 32" stroke="#1e293b" stroke-width="5" fill="none" stroke-linecap="round" />
          <path d="M85 55 L65 55" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        </svg>
      `
    },
    {
      id: 7,
      name: "Molen Mini Beton / Concrete Mixer 140L",
      brand: "Tiger CM-140 / Motor Listrik 550W",
      category: "konstruksi",
      categoryLabel: "Konstruksi & Cor",
      priceDaily: 120000,
      priceWeekly: 700000,
      deposit: 400000,
      status: "limited",
      statusLabel: "Unit Terbatas",
      popularity: 87,
      specs: [
        "Kapasitas Tabung: 140 Liter (1 Sak Semen campur)",
        "Daya Motor Listrik: 550 Watt",
        "Roda Portabel: Karet Tebal Mudah Dipindah",
        "Kecepatan Putar: 28 - 32 RPM"
      ],
      includes: "1x Unit Molen Listrik Portabel Lengkap, Kabel Steker 5 meter tahan air, Roda Transportasi.",
      description: "Alat pengaduk adukan semen dan pasir praktis untuk proyek renovasi rumah bertingkat, ruko, dan saluran air. Suara jauh lebih halus dibanding mesin diesel.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <path d="M55 110 L85 65 L115 110" stroke="#475569" stroke-width="4" fill="none" stroke-linecap="round" />
          <circle cx="55" cy="110" r="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" />
          <circle cx="145" cy="110" r="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" />
          <line x1="55" y1="110" x2="145" y2="110" stroke="#334155" stroke-width="3" />
          <path d="M80 40 L125 30 L135 75 L85 85 Z" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="130" cy="52" r="16" fill="#ea580c" />
          <circle cx="133" cy="52" r="7" fill="#1e293b" />
          <rect x="70" y="55" width="22" height="24" rx="3" fill="#1e293b" />
        </svg>
      `
    },
    {
      id: 8,
      name: "Genset Silent 3000 Watt Inverter",
      brand: "Yamaha / Loncin LC3500i",
      category: "konstruksi",
      categoryLabel: "Konstruksi & Cor",
      priceDaily: 150000,
      priceWeekly: 880000,
      deposit: 500000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 92,
      specs: [
        "Output Maksimal: 3300 Watt (Murni Inverter)",
        "Tingkat Kebisingan: Silent (58 dB @ 7m)",
        "Bahan Bakar: Bensin Murni (Tangki 9 Liter)",
        "Tegangan: 220V Stabil (Aman untuk Elektronik / Las)"
      ],
      includes: "1x Unit Genset Silent, 1x Steker Industri 16A, 1x Kunci Busi, 1x Corong Oli.",
      description: "Genset inverter kedap suara untuk suplai daya listrik proyek di lokasi belum ada PLN, perbaikan malam hari, serta backup genset event.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="45" y="32" width="110" height="72" rx="10" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
          <rect x="75" y="22" width="50" height="10" rx="3" fill="#1e293b" />
          <rect x="60" y="44" width="80" height="32" rx="4" fill="#0f172a" />
          <circle cx="75" cy="60" r="6" fill="#f8fafc" />
          <circle cx="95" cy="60" r="6" fill="#f8fafc" />
          <circle cx="120" cy="60" r="4" fill="#22c55e" />
          <circle cx="65" cy="106" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2" />
          <circle cx="135" cy="106" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2" />
          <line x1="55" y1="84" x2="75" y2="84" stroke="#ffffff" stroke-width="2" opacity="0.6" />
          <line x1="55" y1="90" x2="75" y2="90" stroke="#ffffff" stroke-width="2" opacity="0.6" />
        </svg>
      `
    },
    {
      id: 9,
      name: "High Pressure Washer 120 Bar (Jet Cleaner)",
      brand: "Karcher K3 Full Control",
      category: "kebun-pembersih",
      categoryLabel: "Kebun & Cuci",
      priceDaily: 50000,
      priceWeekly: 290000,
      deposit: 150000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 89,
      specs: [
        "Tekanan Semprot: 120 Bar Max",
        "Daya Listrik: 850 Watt",
        "Debit Air: 380 Liter/jam",
        "Panjang Selang High Pressure: 8 Meter"
      ],
      includes: "1x Mesin Washer Karcher, 1x Gun Semprot Vario Power Jet, 1x Nozzle Dirt Blaster (Pembersih Lumut Tebal), 1x Selang Masuk Air + Filter Quick Connector.",
      description: "Mesin semprot air bertekanan tinggi untuk merontokkan kerak lumut paving block, membersihkan dinding sebelum cat ulang, cuci kendaraan, dan saluran teras.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="75" y="35" width="45" height="70" rx="8" fill="#eab308" stroke="#ca8a04" stroke-width="2" />
          <path d="M85 35 L85 18 L110 18 L110 35" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round" />
          <circle cx="97" cy="55" r="8" fill="#1e293b" />
          <rect x="85" y="72" width="25" height="20" rx="3" fill="#0f172a" />
          <line x1="128" y1="25" x2="128" y2="105" stroke="#475569" stroke-width="3" stroke-linecap="round" />
          <polygon points="125,25 131,25 128,18" fill="#eab308" />
          <circle cx="72" cy="104" r="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" />
          <circle cx="123" cy="104" r="10" fill="#0f172a" stroke="#cbd5e1" stroke-width="2" />
        </svg>
      `
    },
    {
      id: 10,
      name: "Chainsaw Pemotong Kayu 20\" (Bensin)",
      brand: "Stihl MS-250 Engine 45cc",
      category: "kebun-pembersih",
      categoryLabel: "Kebun & Cuci",
      priceDaily: 85000,
      priceWeekly: 500000,
      deposit: 250000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 85,
      specs: [
        "Kapasitas Mesin: 45.4 cc (2-Tak)",
        "Panjang Bar Pisau: 20 Inci (50 cm)",
        "Rantai: Stihl Asli Tajam (Tahan Aus)",
        "Sistem Pengaman: QuickStop Chain Brake"
      ],
      includes: "1x Mesin Chainsaw Stihl, 1x Rantai Cadangan Tajam, 1x Sarung Bar Pelindung, 1x Kunci Busi/Obeng Setelan Rantai, 1x Tabung Takar Oli Samping.",
      description: "Gergaji mesin untuk penebangan pohon besar, pemotongan dahan kebun, dan pemotongan kayu log untuk balok bangunan secara efisien.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <rect x="20" y="62" width="80" height="14" rx="7" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5" />
          <line x1="25" y1="69" x2="95" y2="69" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
          <path d="M100 52 L150 48 C158 48 165 55 165 65 L165 85 L100 85 Z" fill="#ea580c" />
          <rect x="145" y="70" width="28" height="26" rx="4" fill="#1e293b" />
          <path d="M108 36 L118 36 L116 52" stroke="#1e293b" stroke-width="4" fill="none" stroke-linecap="round" />
          <path d="M115 48 Q135 32 155 48" stroke="#334155" stroke-width="4" fill="none" stroke-linecap="round" />
        </svg>
      `
    },
    {
      id: 11,
      name: "Laser Level 16 Line 4D Green Beam",
      brand: "Hilda 4D Ultra Bright Light",
      category: "ukur-presisi",
      categoryLabel: "Alat Ukur & Presisi",
      priceDaily: 45000,
      priceWeekly: 260000,
      deposit: 150000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 96,
      specs: [
        "Jumlah Garis: 16 Line (4D 360° Horizontal & Vertikal)",
        "Warna Sinar: Hijau Terang (Jelas Siang Hari)",
        "Jarak Kerja: s.d 30 Meter",
        "Akurasi: ±1.5mm per 7 Meter, Self Leveling"
      ],
      includes: "1x Unit Laser Level 16 Line, 1x Tripod Alumunium 1.2m, 2x Baterai Lithium Rechargeable, 1x Remote Control Nirkabel, 1x Bracket Dinding Magnetik, 1x Hardcase Koper.",
      description: "Waterpass sinar laser hijau super presisi untuk pemasangan plafon gypsum, keramik lantai, partisi partisi partisi, kusen pintu & jendela tanpa perlu selang timbang.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <path d="M75 110 L95 85 L125 110" stroke="#475569" stroke-width="3" fill="none" />
          <line x1="100" y1="85" x2="100" y2="110" stroke="#475569" stroke-width="3" />
          <rect x="80" y="40" width="40" height="42" rx="6" fill="#166534" stroke="#14532d" stroke-width="2" />
          <rect x="86" y="46" width="28" height="14" rx="2" fill="#22c55e" opacity="0.8" />
          <line x1="60" y1="53" x2="140" y2="53" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="2,2" />
          <rect x="90" y="32" width="20" height="8" rx="2" fill="#0f172a" />
        </svg>
      `
    },
    {
      id: 12,
      name: "Tangga Teleskopik 5.0 Meter Heavy Duty",
      brand: "Krisbow Aluminium Alloy A-Line / Lurus",
      category: "tangga-k3",
      categoryLabel: "Tangga & Safety",
      priceDaily: 40000,
      priceWeekly: 230000,
      deposit: 150000,
      status: "ready",
      statusLabel: "Tersedia",
      popularity: 90,
      specs: [
        "Tinggi Maksimal: 5.0 Meter (Lurus) / 2.5 Meter (Bentuk Huruf A)",
        "Beban Maksimal: 150 kg",
        "Material: Aerospace Alumunium Tebal 1.5mm",
        "Kondisi Lipat Ringkas: Hanya 95 cm (Muat Bagasi Mobil)"
      ],
      includes: "1x Unit Tangga Teleskopik 5.0M, Tali Pengikat Velcro, Karet Kaki Anti Selip Tambahan.",
      description: "Tangga lipat teleskopik fleksibel yang bisa diatur ketinggiannya sesuai kebutuhan. Sangat portabel, kokoh, dan aman untuk instalasi kabel, plafon, kanopi, atau pengecatan.",
      svg: `
        <svg viewBox="0 0 200 130" class="tool-svg-thumb">
          <line x1="75" y1="18" x2="75" y2="112" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
          <line x1="125" y1="18" x2="125" y2="112" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
          <line x1="75" y1="28" x2="125" y2="28" stroke="#334155" stroke-width="3" />
          <line x1="75" y1="44" x2="125" y2="44" stroke="#334155" stroke-width="3" />
          <line x1="75" y1="60" x2="125" y2="60" stroke="#334155" stroke-width="3" />
          <line x1="75" y1="76" x2="125" y2="76" stroke="#334155" stroke-width="3" />
          <line x1="75" y1="92" x2="125" y2="92" stroke="#334155" stroke-width="3" />
          <line x1="75" y1="108" x2="125" y2="108" stroke="#334155" stroke-width="3" />
          <rect x="71" y="110" width="8" height="6" rx="2" fill="#0f172a" />
          <rect x="121" y="110" width="8" height="6" rx="2" fill="#0f172a" />
        </svg>
      `
    }
  ];

  // --- 2. Query Params Extraction (for cross-page filtering) ---
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategoryParam = urlParams.get('cat') || 'all';
  const initialQueryParam = urlParams.get('q') || '';

  // --- 3. Application State ---
  const state = {
    theme: localStorage.getItem('kt_theme') || 'light',
    cart: JSON.parse(localStorage.getItem('kt_cart') || '[]'),
    cartGlobalDays: 1,
    activeCategory: initialCategoryParam,
    searchQuery: initialQueryParam,
    sortBy: 'populer',
    calcToolId: parseInt(urlParams.get('toolId'), 10) || 1,
    calcDays: 1,
    calcQty: 1,
    calcDelivery: false
  };

  // --- 4. DOM Elements Cache (Defensive for Multi-Page) ---
  const el = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeToggleText: document.getElementById('themeToggleText'),
    navbarSearchInput: document.getElementById('navbarSearchInput'),
    catalogSearchInput: document.getElementById('catalogSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    sortSelect: document.getElementById('sortSelect'),
    categoryPillContainer: document.getElementById('categoryPillContainer'),
    toolsGrid: document.getElementById('toolsGrid'),
    previewToolsGrid: document.getElementById('previewToolsGrid'),
    emptyState: document.getElementById('emptyState'),
    resetFilterBtn: document.getElementById('resetFilterBtn'),
    
    // Cart Elements
    openCartBtn: document.getElementById('openCartBtn'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartEmptyMessage: document.getElementById('cartEmptyMessage'),
    cartCountBadge: document.getElementById('cartCountBadge'),
    cartDrawerFooter: document.getElementById('cartDrawerFooter'),
    cartGlobalDays: document.getElementById('cartGlobalDays'),
    cartDaysMinus: document.getElementById('cartDaysMinus'),
    cartDaysPlus: document.getElementById('cartDaysPlus'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartDiscountRow: document.getElementById('cartDiscountRow'),
    cartDiscountVal: document.getElementById('cartDiscountVal'),
    cartGrandTotal: document.getElementById('cartGrandTotal'),
    checkoutWhatsappBtn: document.getElementById('checkoutWhatsappBtn'),

    // Calculator Elements
    calcToolSelect: document.getElementById('calcToolSelect'),
    calcQty: document.getElementById('calcQty'),
    calcDays: document.getElementById('calcDays'),
    qtyMinusBtn: document.getElementById('qtyMinusBtn'),
    qtyPlusBtn: document.getElementById('qtyPlusBtn'),
    daysMinusBtn: document.getElementById('daysMinusBtn'),
    daysPlusBtn: document.getElementById('daysPlusBtn'),
    calcDeliveryCheck: document.getElementById('calcDeliveryCheck'),
    calcAddToCartBtn: document.getElementById('calcAddToCartBtn'),
    sumToolName: document.getElementById('sumToolName'),
    sumBaseRate: document.getElementById('sumBaseRate'),
    sumDuration: document.getElementById('sumDuration'),
    discountLine: document.getElementById('discountLine'),
    sumDiscountPercent: document.getElementById('sumDiscountPercent'),
    sumDiscountVal: document.getElementById('sumDiscountVal'),
    deliveryFeeLine: document.getElementById('deliveryFeeLine'),
    sumDeliveryVal: document.getElementById('sumDeliveryVal'),
    sumTotalCost: document.getElementById('sumTotalCost'),

    // Modals
    toolDetailModal: document.getElementById('toolDetailModal'),
    modalToolBody: document.getElementById('modalToolBody'),
    closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutModalBtn: document.getElementById('closeCheckoutModalBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    toastContainer: document.getElementById('toastContainer'),

    // Contact Form
    contactForm: document.getElementById('contactForm'),

    // Badge Counters
    countAll: document.getElementById('countAll'),
    countPower: document.getElementById('countPower'),
    countKonstruksi: document.getElementById('countKonstruksi'),
    countKebun: document.getElementById('countKebun'),
    countUkur: document.getElementById('countUkur'),
    countSafety: document.getElementById('countSafety')
  };

  // --- 5. Helper Functions ---
  function formatIDR(amount) {
    return 'Rp ' + Number(amount).toLocaleString('id-ID');
  }

  function showToast(message, icon = '✓') {
    if (!el.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- 6. Theme Controller ---
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeToggleText();

    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('kt_theme', state.theme);
        updateThemeToggleText();
        showToast(state.theme === 'dark' ? 'Mode Redup aktif (nyaman di mata malam)' : 'Mode Terang aktif');
      });
    }
  }

  function updateThemeToggleText() {
    if (el.themeToggleText) {
      el.themeToggleText.textContent = state.theme === 'light' ? 'Mode Redup' : 'Mode Terang';
    }
  }

  // --- 7. Category Counters ---
  function updateCategoryCounts() {
    if (!el.countAll) return;
    el.countAll.textContent = toolsData.length;
    if (el.countPower) el.countPower.textContent = toolsData.filter(t => t.category === 'power-tools').length;
    if (el.countKonstruksi) el.countKonstruksi.textContent = toolsData.filter(t => t.category === 'konstruksi').length;
    if (el.countKebun) el.countKebun.textContent = toolsData.filter(t => t.category === 'kebun-pembersih').length;
    if (el.countUkur) el.countUkur.textContent = toolsData.filter(t => t.category === 'ukur-presisi').length;
    if (el.countSafety) el.countSafety.textContent = toolsData.filter(t => t.category === 'tangga-k3').length;
  }

  // --- 8. Tool Filtering & Grid Rendering ---
  function getFilteredTools() {
    let list = [...toolsData];

    if (state.activeCategory && state.activeCategory !== 'all') {
      list = list.filter(item => item.category === state.activeCategory);
    }

    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q)
      );
    }

    if (state.sortBy === 'harga-rendah') {
      list.sort((a, b) => a.priceDaily - b.priceDaily);
    } else if (state.sortBy === 'harga-tinggi') {
      list.sort((a, b) => b.priceDaily - a.priceDaily);
    } else if (state.sortBy === 'nama') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => b.popularity - a.popularity);
    }

    return list;
  }

  function renderToolsCatalog() {
    if (!el.toolsGrid) return;
    const tools = getFilteredTools();

    if (tools.length === 0) {
      el.toolsGrid.innerHTML = '';
      if (el.emptyState) el.emptyState.style.display = 'block';
      return;
    }

    if (el.emptyState) el.emptyState.style.display = 'none';

    el.toolsGrid.innerHTML = tools.map(tool => {
      const isReady = tool.status === 'ready';
      return `
        <article class="tool-card" data-id="${tool.id}">
          <div class="tool-card-media">
            ${tool.svg}
            <span class="tool-status-badge ${isReady ? 'ready' : 'limited'}">
              ${tool.statusLabel}
            </span>
            <span class="tool-category-badge">${tool.categoryLabel}</span>
          </div>

          <div class="tool-card-content">
            <span class="tool-brand">${tool.brand}</span>
            <h3 class="tool-title">${tool.name}</h3>

            <ul class="tool-specs-list">
              ${tool.specs.slice(0, 2).map(s => `<li>${s}</li>`).join('')}
            </ul>

            <div class="tool-card-footer">
              <div class="tool-price-block">
                <span class="daily-price">${formatIDR(tool.priceDaily)}</span>
                <span class="price-unit">/ 24 jam</span>
              </div>
              <div class="tool-actions-flex">
                <button type="button" class="btn-detail" onclick="app.openDetail(${tool.id})">Detail</button>
                <button type="button" class="btn-rent" onclick="app.addToCart(${tool.id})">+ Sewa</button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- 9. Home Page Preview Grid Rendering ---
  function renderPreviewGrid() {
    if (!el.previewToolsGrid) return;
    // Show top 6 popular tools
    const popularTools = [...toolsData].sort((a, b) => b.popularity - a.popularity).slice(0, 6);

    el.previewToolsGrid.innerHTML = popularTools.map(tool => `
      <article class="tool-card" data-id="${tool.id}">
        <div class="tool-card-media">
          ${tool.svg}
          <span class="tool-status-badge ready">${tool.statusLabel}</span>
          <span class="tool-category-badge">${tool.categoryLabel}</span>
        </div>
        <div class="tool-card-content">
          <span class="tool-brand">${tool.brand}</span>
          <h3 class="tool-title">${tool.name}</h3>
          <ul class="tool-specs-list">
            ${tool.specs.slice(0, 2).map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="tool-card-footer">
            <div class="tool-price-block">
              <span class="daily-price">${formatIDR(tool.priceDaily)}</span>
              <span class="price-unit">/ 24 jam</span>
            </div>
            <div class="tool-actions-flex">
              <button type="button" class="btn-detail" onclick="app.openDetail(${tool.id})">Detail</button>
              <button type="button" class="btn-rent" onclick="app.addToCart(${tool.id})">+ Sewa</button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --- 10. Detail Modal ---
  function openDetailModal(toolId) {
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool || !el.modalToolBody || !el.toolDetailModal) return;

    el.modalToolBody.innerHTML = `
      <div class="modal-detail-grid">
        <div class="detail-img-box">
          ${tool.svg}
        </div>
        <div class="detail-info">
          <div class="detail-badge-row">
            <span class="tool-status-badge ${tool.status === 'ready' ? 'ready' : 'limited'}">${tool.statusLabel}</span>
            <span class="sub-badge" style="margin-bottom:0;">${tool.categoryLabel}</span>
          </div>
          <h3>${tool.name}</h3>
          <p class="tool-brand" style="margin-bottom: 12px;">Merk & Tipe: <strong>${tool.brand}</strong></p>
          <p class="detail-desc">${tool.description}</p>

          <table class="specs-table">
            <tbody>
              ${tool.specs.map(spec => {
                const parts = spec.split(':');
                const key = parts[0] || '';
                const val = parts.slice(1).join(':') || '';
                return `<tr><td>${key}</td><td>${val}</td></tr>`;
              }).join('')}
              <tr>
                <td>Tarif Harian (24 jam)</td>
                <td><strong class="text-success">${formatIDR(tool.priceDaily)}</strong></td>
              </tr>
              <tr>
                <td>Tarif Mingguan (7 hari)</td>
                <td><strong>${formatIDR(tool.priceWeekly)}</strong> (Hemat ~15%)</td>
              </tr>
              <tr>
                <td>Estimasi Deposit Jaminan</td>
                <td>${formatIDR(tool.deposit)} <small style="color:var(--text-muted);">(Refundable)</small></td>
              </tr>
            </tbody>
          </table>

          <div class="include-box">
            <strong>Kelengkapan Dalam Paket Sewa:</strong>
            <p>${tool.includes}</p>
          </div>

          <div style="display:flex; gap: 12px; margin-top: 18px;">
            <button class="btn btn-primary btn-block" onclick="app.addToCart(${tool.id}); app.closeDetail();">
              + Masukkan ke Daftar Sewa
            </button>
            <a href="kalkulator.html?toolId=${tool.id}" class="btn btn-secondary">
              Simulasi Biaya
            </a>
          </div>
        </div>
      </div>
    `;

    el.toolDetailModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    if (!el.toolDetailModal) return;
    el.toolDetailModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // --- 11. Cart Management System (Persistent via LocalStorage) ---
  function saveCart() {
    localStorage.setItem('kt_cart', JSON.stringify(state.cart));
    renderCart();
  }

  function addToCart(toolId, qty = 1) {
    const existing = state.cart.find(item => item.id === toolId);
    if (existing) {
      existing.qty += qty;
    } else {
      const tool = toolsData.find(t => t.id === toolId);
      if (!tool) return;
      state.cart.push({
        id: tool.id,
        name: tool.name,
        priceDaily: tool.priceDaily,
        qty: qty,
        svg: tool.svg
      });
    }

    saveCart();
    const itemObj = toolsData.find(t => t.id === toolId);
    if (itemObj) showToast(`"${itemObj.name}" masuk ke daftar sewa.`);
    updateCartBadge();
  }

  function updateCartBadge() {
    if (!el.cartCountBadge) return;
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    el.cartCountBadge.textContent = totalCount;
  }

  function renderCart() {
    updateCartBadge();
    if (!el.cartItemsList) return;

    if (state.cart.length === 0) {
      el.cartItemsList.innerHTML = '';
      if (el.cartEmptyMessage) el.cartEmptyMessage.style.display = 'block';
      if (el.cartDrawerFooter) el.cartDrawerFooter.style.display = 'none';
      return;
    }

    if (el.cartEmptyMessage) el.cartEmptyMessage.style.display = 'none';
    if (el.cartDrawerFooter) el.cartDrawerFooter.style.display = 'block';

    el.cartItemsList.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-thumb">
          ${item.svg}
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-price">${formatIDR(item.priceDaily)} /hari</div>
          <div class="cart-qty-ctrl">
            <button type="button" class="btn-micro" onclick="app.changeCartQty(${item.id}, -1)">-</button>
            <span class="cart-qty-val">${item.qty} Unit</span>
            <button type="button" class="btn-micro" onclick="app.changeCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" onclick="app.removeFromCart(${item.id})" title="Hapus dari daftar">✕</button>
      </div>
    `).join('');

    calculateCartTotals();
  }

  function changeCartQty(toolId, delta) {
    const item = state.cart.find(i => i.id === toolId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.id !== toolId);
    }
    saveCart();
  }

  function removeFromCart(toolId) {
    state.cart = state.cart.filter(i => i.id !== toolId);
    saveCart();
    showToast('Alat dihapus dari daftar sewa.');
  }

  function clearCart() {
    if (confirm('Yakin ingin mengosongkan seluruh daftar sewa?')) {
      state.cart = [];
      saveCart();
      showToast('Daftar sewa telah dikosongkan.');
    }
  }

  function calculateCartTotals() {
    if (!el.cartSubtotal) return;
    const days = parseInt(state.cartGlobalDays, 10) || 1;
    let subtotalDaily = 0;

    state.cart.forEach(item => {
      subtotalDaily += (item.priceDaily * item.qty);
    });

    const subtotalTotal = subtotalDaily * days;

    let discountPercent = 0;
    if (days >= 14) {
      discountPercent = 0.25;
    } else if (days >= 7) {
      discountPercent = 0.20;
    } else if (days >= 3) {
      discountPercent = 0.10;
    }

    const discountAmount = Math.round(subtotalTotal * discountPercent);
    const grandTotal = subtotalTotal - discountAmount;

    el.cartSubtotal.textContent = `${formatIDR(subtotalTotal)} (${days} Hari)`;
    
    if (discountPercent > 0 && el.cartDiscountRow) {
      el.cartDiscountRow.style.display = 'flex';
      el.cartDiscountVal.textContent = `- ${formatIDR(discountAmount)} (${discountPercent * 100}%)`;
    } else if (el.cartDiscountRow) {
      el.cartDiscountRow.style.display = 'none';
    }

    if (el.cartGrandTotal) el.cartGrandTotal.textContent = formatIDR(grandTotal);
  }

  function openCart() {
    if (!el.cartDrawer) return;
    el.cartDrawer.classList.add('open');
    if (el.cartOverlay) el.cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!el.cartDrawer) return;
    el.cartDrawer.classList.remove('open');
    if (el.cartOverlay) el.cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  // --- 12. Rental Calculator Module ---
  function initCalculator() {
    if (!el.calcToolSelect) return;

    el.calcToolSelect.innerHTML = toolsData.map(tool => `
      <option value="${tool.id}">${tool.name} - ${formatIDR(tool.priceDaily)}/hari</option>
    `).join('');

    el.calcToolSelect.value = state.calcToolId;

    el.calcToolSelect.addEventListener('change', (e) => {
      state.calcToolId = parseInt(e.target.value, 10);
      recalculateSimulation();
    });

    if (el.calcQty) {
      el.calcQty.addEventListener('input', (e) => {
        state.calcQty = Math.max(1, parseInt(e.target.value, 10) || 1);
        recalculateSimulation();
      });
    }

    if (el.qtyMinusBtn) {
      el.qtyMinusBtn.addEventListener('click', () => {
        state.calcQty = Math.max(1, state.calcQty - 1);
        el.calcQty.value = state.calcQty;
        recalculateSimulation();
      });
    }

    if (el.qtyPlusBtn) {
      el.qtyPlusBtn.addEventListener('click', () => {
        state.calcQty = Math.min(20, state.calcQty + 1);
        el.calcQty.value = state.calcQty;
        recalculateSimulation();
      });
    }

    if (el.calcDays) {
      el.calcDays.addEventListener('input', (e) => {
        state.calcDays = Math.max(1, parseInt(e.target.value, 10) || 1);
        recalculateSimulation();
      });
    }

    if (el.daysMinusBtn) {
      el.daysMinusBtn.addEventListener('click', () => {
        state.calcDays = Math.max(1, state.calcDays - 1);
        el.calcDays.value = state.calcDays;
        recalculateSimulation();
      });
    }

    if (el.daysPlusBtn) {
      el.daysPlusBtn.addEventListener('click', () => {
        state.calcDays = Math.min(60, state.calcDays + 1);
        el.calcDays.value = state.calcDays;
        recalculateSimulation();
      });
    }

    if (el.calcDeliveryCheck) {
      el.calcDeliveryCheck.addEventListener('change', (e) => {
        state.calcDelivery = e.target.checked;
        recalculateSimulation();
      });
    }

    if (el.calcAddToCartBtn) {
      el.calcAddToCartBtn.addEventListener('click', () => {
        addToCart(state.calcToolId, state.calcQty);
        state.cartGlobalDays = state.calcDays;
        if (el.cartGlobalDays) el.cartGlobalDays.value = state.calcDays;
        calculateCartTotals();
        openCart();
      });
    }

    recalculateSimulation();
  }

  function recalculateSimulation() {
    if (!el.sumToolName) return;
    const tool = toolsData.find(t => t.id === state.calcToolId);
    if (!tool) return;

    el.sumToolName.textContent = tool.name;
    if (el.sumBaseRate) el.sumBaseRate.textContent = `${formatIDR(tool.priceDaily)} /hari`;
    if (el.sumDuration) el.sumDuration.textContent = `${state.calcDays} Hari × ${state.calcQty} Unit`;

    const rawSubtotal = tool.priceDaily * state.calcQty * state.calcDays;

    let discountPercent = 0;
    if (state.calcDays >= 14) {
      discountPercent = 0.25;
    } else if (state.calcDays >= 7) {
      discountPercent = 0.20;
    } else if (state.calcDays >= 3) {
      discountPercent = 0.10;
    }

    const discountAmount = Math.round(rawSubtotal * discountPercent);

    if (el.discountLine) {
      if (discountPercent > 0) {
        el.discountLine.style.display = 'flex';
        if (el.sumDiscountPercent) el.sumDiscountPercent.textContent = `${discountPercent * 100}%`;
        if (el.sumDiscountVal) el.sumDiscountVal.textContent = `- ${formatIDR(discountAmount)}`;
      } else {
        el.discountLine.style.display = 'none';
      }
    }

    const deliveryFee = state.calcDelivery ? 50000 : 0;
    if (el.deliveryFeeLine) {
      if (state.calcDelivery) {
        el.deliveryFeeLine.style.display = 'flex';
        if (el.sumDeliveryVal) el.sumDeliveryVal.textContent = formatIDR(deliveryFee);
      } else {
        el.deliveryFeeLine.style.display = 'none';
      }
    }

    const finalTotal = rawSubtotal - discountAmount + deliveryFee;
    if (el.sumTotalCost) el.sumTotalCost.textContent = formatIDR(finalTotal);
  }

  function setCalcDays(days) {
    state.calcDays = days;
    if (el.calcDays) el.calcDays.value = days;
    recalculateSimulation();
    showToast(`Durasi simulasi diatur: ${days} Hari`);
  }

  // --- 13. WhatsApp Checkout Flow ---
  function initCheckout() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    const startDateInput = document.getElementById('custStartDate');
    if (startDateInput) {
      startDateInput.value = dateStr;
      startDateInput.min = new Date().toISOString().split('T')[0];
    }

    if (el.checkoutWhatsappBtn) {
      el.checkoutWhatsappBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
          showToast('Pilih setidaknya 1 alat untuk disewa!', '⚠️');
          return;
        }
        closeCart();
        if (el.checkoutModal) {
          el.checkoutModal.classList.add('show');
          document.body.style.overflow = 'hidden';
        }
      });
    }

    if (el.closeCheckoutModalBtn && el.checkoutModal) {
      el.closeCheckoutModalBtn.addEventListener('click', () => {
        el.checkoutModal.classList.remove('show');
        document.body.style.overflow = '';
      });
    }

    if (el.checkoutForm) {
      el.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('custName').value.trim();
        const phone = document.getElementById('custPhone').value.trim();
        const address = document.getElementById('custAddress').value.trim();
        const delivery = document.getElementById('custDeliveryType').value;
        const startDate = document.getElementById('custStartDate').value;
        const days = parseInt(state.cartGlobalDays, 10) || 1;

        let text = `Halo *KaryaTeknik Rental*, saya ingin menyewa perkakas dengan rincian berikut:\n\n`;
        text += `👤 *Penyewa:* ${name}\n`;
        text += `📞 *No WhatsApp:* ${phone}\n`;
        text += `📍 *Lokasi Proyek:* ${address}\n`;
        text += `🚚 *Metode Pengambilan:* ${delivery}\n`;
        text += `📅 *Tanggal Mulai:* ${startDate}\n`;
        text += `⏱️ *Rencana Durasi:* ${days} Hari\n\n`;
        text += `🛠️ *DAFTAR ALAT YANG DISEWA:*\n`;

        let totalNormal = 0;
        state.cart.forEach((item, idx) => {
          const itemTotal = item.priceDaily * item.qty * days;
          totalNormal += itemTotal;
          text += `${idx + 1}. ${item.name} (${item.qty} unit) - ${formatIDR(item.priceDaily)}/hari\n`;
        });

        let discountPercent = 0;
        if (days >= 14) discountPercent = 0.25;
        else if (days >= 7) discountPercent = 0.20;
        else if (days >= 3) discountPercent = 0.10;

        const discountAmt = Math.round(totalNormal * discountPercent);
        const grandTotal = totalNormal - discountAmt;

        text += `\n💵 *Estimasi Subtotal:* ${formatIDR(totalNormal)}`;
        if (discountPercent > 0) {
          text += `\n🏷️ *Diskon Durasi (${discountPercent * 100}%):* - ${formatIDR(discountAmt)}`;
        }
        text += `\n💰 *Total Estimasi Biaya:* *${formatIDR(grandTotal)}*`;
        text += `\n\nMohon konfirmasi ketersediaan unit dan persyaratan verifikasinya. Terima kasih!`;

        const waNumber = "6285179519815";
        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

        if (el.checkoutModal) el.checkoutModal.classList.remove('show');
        document.body.style.overflow = '';

        showToast('Membuka WhatsApp untuk mengirim rincian sewa...');
        window.open(waUrl, '_blank');
      });
    }
  }

  // --- 14. Contact Form WA Handler ---
  function initContactForm() {
    if (!el.contactForm) return;
    el.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      let text = `Halo *KaryaTeknik Rental*, saya ingin berkonsultasi:\n\n`;
      text += `👤 *Nama:* ${name}\n`;
      text += `📞 *No Kontak:* ${phone}\n`;
      text += `📌 *Keperluan:* ${subject}\n\n`;
      text += `💬 *Pesan:*\n"${message}"`;

      const waUrl = `https://wa.me/6285179519815?text=${encodeURIComponent(text)}`;
      showToast('Membuka WhatsApp untuk konsultasi...');
      window.open(waUrl, '_blank');
    });
  }

  // --- 15. Accordion FAQ ---
  function initAccordion() {
    const items = document.querySelectorAll('.accordion-item');
    if (!items.length) return;

    items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const collapse = item.querySelector('.accordion-collapse');
      if (!header || !collapse) return;

      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        items.forEach(other => {
          other.classList.remove('active');
          const h = other.querySelector('.accordion-header');
          const c = other.querySelector('.accordion-collapse');
          if (h) h.setAttribute('aria-expanded', 'false');
          if (c) c.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          collapse.style.maxHeight = collapse.scrollHeight + "px";
        }
      });
    });

    // Expand first item
    if (items[0]) {
      items[0].classList.add('active');
      const h = items[0].querySelector('.accordion-header');
      const c = items[0].querySelector('.accordion-collapse');
      if (h) h.setAttribute('aria-expanded', 'true');
      if (c) c.style.maxHeight = c.scrollHeight + "px";
    }
  }

  // --- 16. Event Listeners ---
  function initListeners() {
    // Navbar Search
    if (el.navbarSearchInput) {
      if (state.searchQuery) el.navbarSearchInput.value = state.searchQuery;

      el.navbarSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = el.navbarSearchInput.value.trim();
          if (!window.location.pathname.includes('katalog.html')) {
            window.location.href = `katalog.html?q=${encodeURIComponent(val)}`;
          }
        }
      });

      el.navbarSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (el.catalogSearchInput) el.catalogSearchInput.value = state.searchQuery;
        if (el.clearSearchBtn) el.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        renderToolsCatalog();
      });
    }

    if (el.clearSearchBtn) {
      el.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        if (el.navbarSearchInput) el.navbarSearchInput.value = '';
        if (el.catalogSearchInput) el.catalogSearchInput.value = '';
        el.clearSearchBtn.style.display = 'none';
        renderToolsCatalog();
      });
    }

    // Catalog Search
    if (el.catalogSearchInput) {
      if (state.searchQuery) el.catalogSearchInput.value = state.searchQuery;
      el.catalogSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (el.navbarSearchInput) el.navbarSearchInput.value = state.searchQuery;
        if (el.clearSearchBtn) el.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        renderToolsCatalog();
      });
    }

    // Sort select
    if (el.sortSelect) {
      el.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderToolsCatalog();
      });
    }

    // Category Filter Pills
    if (el.categoryPillContainer) {
      const pills = el.categoryPillContainer.querySelectorAll('.pill-btn');
      // Set active based on query param
      pills.forEach(p => {
        const cat = p.getAttribute('data-category');
        p.classList.toggle('active', cat === state.activeCategory);
      });

      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          pills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.activeCategory = pill.getAttribute('data-category');
          renderToolsCatalog();
        });
      });
    }

    // Reset filter button
    if (el.resetFilterBtn) {
      el.resetFilterBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        if (el.navbarSearchInput) el.navbarSearchInput.value = '';
        if (el.catalogSearchInput) el.catalogSearchInput.value = '';
        if (el.clearSearchBtn) el.clearSearchBtn.style.display = 'none';
        if (el.categoryPillContainer) {
          const pills = el.categoryPillContainer.querySelectorAll('.pill-btn');
          pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
        }
        renderToolsCatalog();
      });
    }

    // Cart Drawer Open/Close
    if (el.openCartBtn) el.openCartBtn.addEventListener('click', openCart);
    if (el.closeCartBtn) el.closeCartBtn.addEventListener('click', closeCart);
    if (el.cartOverlay) el.cartOverlay.addEventListener('click', closeCart);

    // Cart Global Days control
    if (el.cartGlobalDays) {
      el.cartGlobalDays.addEventListener('input', (e) => {
        state.cartGlobalDays = Math.max(1, parseInt(e.target.value, 10) || 1);
        calculateCartTotals();
      });
    }

    if (el.cartDaysMinus) {
      el.cartDaysMinus.addEventListener('click', () => {
        state.cartGlobalDays = Math.max(1, state.cartGlobalDays - 1);
        el.cartGlobalDays.value = state.cartGlobalDays;
        calculateCartTotals();
      });
    }

    if (el.cartDaysPlus) {
      el.cartDaysPlus.addEventListener('click', () => {
        state.cartGlobalDays = Math.min(60, state.cartGlobalDays + 1);
        el.cartGlobalDays.value = state.cartGlobalDays;
        calculateCartTotals();
      });
    }

    // Detail Modal Close
    if (el.closeDetailModalBtn) el.closeDetailModalBtn.addEventListener('click', closeDetailModal);
    if (el.toolDetailModal) {
      el.toolDetailModal.addEventListener('click', (e) => {
        if (e.target === el.toolDetailModal) closeDetailModal();
      });
    }
    if (el.checkoutModal) {
      el.checkoutModal.addEventListener('click', (e) => {
        if (e.target === el.checkoutModal) {
          el.checkoutModal.classList.remove('show');
          document.body.style.overflow = '';
        }
      });
    }

    // Global ESC Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDetailModal();
        closeCart();
        if (el.checkoutModal) {
          el.checkoutModal.classList.remove('show');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // --- 17. Public API Exposed to Global window.app ---
  window.app = {
    addToCart,
    changeCartQty,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
    openDetail: openDetailModal,
    closeDetail: closeDetailModal,
    setCalcDays,
    quickAdd: (id) => {
      addToCart(id, 1);
      openCart();
    },
    filterCategory: (cat) => {
      if (window.location.pathname.includes('katalog.html')) {
        state.activeCategory = cat;
        if (el.categoryPillContainer) {
          const pills = el.categoryPillContainer.querySelectorAll('.pill-btn');
          pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === cat));
        }
        renderToolsCatalog();
      } else {
        window.location.href = `katalog.html?cat=${encodeURIComponent(cat)}`;
      }
    }
  };

  // --- 18. App Initialization ---
  function init() {
    initTheme();
    updateCategoryCounts();
    renderToolsCatalog();
    renderPreviewGrid();
    renderCart();
    initCalculator();
    initCheckout();
    initContactForm();
    initAccordion();
    initListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
