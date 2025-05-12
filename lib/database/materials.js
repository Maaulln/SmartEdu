// Data materi pembelajaran
export const materials = [
  {
    id: 1,
    title: "Pengenalan Aljabar Linear",
    description: "Mempelajari konsep dasar aljabar linear dan aplikasinya",
    content: `
      <h2>Pengenalan Aljabar Linear</h2>
      <p>Aljabar linear adalah cabang matematika yang mempelajari vektor, ruang vektor, transformasi linear, dan sistem persamaan linear. Aljabar linear memiliki aplikasi yang luas dalam berbagai bidang seperti fisika, ekonomi, teknik, dan ilmu komputer.</p>
      
      <h3>Konsep Dasar</h3>
      <p>Beberapa konsep dasar dalam aljabar linear meliputi:</p>
      <ul>
        <li>Vektor dan operasi vektor</li>
        <li>Matriks dan operasi matriks</li>
        <li>Sistem persamaan linear</li>
        <li>Ruang vektor</li>
        <li>Transformasi linear</li>
      </ul>
      
      <h3>Aplikasi Aljabar Linear</h3>
      <p>Aljabar linear digunakan dalam berbagai aplikasi seperti:</p>
      <ul>
        <li>Grafik komputer dan animasi</li>
        <li>Analisis data dan statistik</li>
        <li>Pemrosesan sinyal</li>
        <li>Optimisasi</li>
        <li>Machine learning</li>
      </ul>
    `,
    category: "Matematika",
    level: "Menengah",
    duration: "2 jam 30 menit",
    rating: 4.7,
    totalRatings: 128,
    progress: 75,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Aljabar", "Vektor", "Matriks"],
    lastUpdated: "2023-04-15",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
    sections: [
      {
        id: 1,
        title: "Pendahuluan",
        duration: "15 menit",
        completed: true,
      },
      {
        id: 2,
        title: "Vektor dan Operasi Vektor",
        duration: "30 menit",
        completed: true,
      },
      {
        id: 3,
        title: "Matriks dan Operasi Matriks",
        duration: "45 menit",
        completed: true,
      },
      {
        id: 4,
        title: "Sistem Persamaan Linear",
        duration: "30 menit",
        completed: false,
      },
      {
        id: 5,
        title: "Aplikasi Aljabar Linear",
        duration: "30 menit",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Hukum Newton dan Aplikasinya",
    description: "Memahami hukum gerak Newton dan penerapannya dalam kehidupan sehari-hari",
    content: `
      <h2>Hukum Newton dan Aplikasinya</h2>
      <p>Hukum Newton tentang gerak adalah tiga hukum fisika yang menjadi dasar mekanika klasik. Hukum-hukum ini menjelaskan hubungan antara gaya yang bekerja pada suatu benda dan gerak yang dihasilkan.</p>
      
      <h3>Hukum Pertama Newton (Hukum Inersia)</h3>
      <p>Sebuah benda akan tetap dalam keadaan diam atau bergerak dengan kecepatan konstan dalam garis lurus, kecuali jika ada gaya eksternal yang bekerja padanya.</p>
      
      <h3>Hukum Kedua Newton</h3>
      <p>Percepatan suatu benda berbanding lurus dengan gaya yang bekerja padanya dan berbanding terbalik dengan massanya. Formula: F = m × a</p>
      
      <h3>Hukum Ketiga Newton</h3>
      <p>Untuk setiap aksi, selalu ada reaksi yang sama besar dan berlawanan arah.</p>
      
      <h3>Aplikasi Hukum Newton</h3>
      <p>Hukum Newton diaplikasikan dalam berbagai aspek kehidupan sehari-hari, seperti:</p>
      <ul>
        <li>Desain kendaraan dan sistem transportasi</li>
        <li>Olahraga dan aktivitas fisik</li>
        <li>Konstruksi bangunan</li>
        <li>Teknologi luar angkasa</li>
      </ul>
    `,
    category: "Fisika",
    level: "Dasar",
    duration: "1 jam 45 menit",
    rating: 4.5,
    totalRatings: 96,
    progress: 40,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mekanika", "Gaya", "Gerak"],
    lastUpdated: "2023-04-10",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
    sections: [
      {
        id: 1,
        title: "Pendahuluan",
        duration: "15 menit",
        completed: true,
      },
      {
        id: 2,
        title: "Hukum Pertama Newton",
        duration: "20 menit",
        completed: true,
      },
      {
        id: 3,
        title: "Hukum Kedua Newton",
        duration: "25 menit",
        completed: false,
      },
      {
        id: 4,
        title: "Hukum Ketiga Newton",
        duration: "20 menit",
        completed: false,
      },
      {
        id: 5,
        title: "Aplikasi Hukum Newton",
        duration: "25 menit",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: "Struktur Atom dan Tabel Periodik",
    description: "Eksplorasi struktur atom dan organisasi tabel periodik unsur",
    content: `
      <h2>Struktur Atom dan Tabel Periodik</h2>
      <p>Atom adalah unit dasar materi yang terdiri dari inti atom (proton dan neutron) dan elektron yang mengelilingi inti. Tabel periodik adalah pengaturan sistematis unsur-unsur kimia berdasarkan nomor atom, konfigurasi elektron, dan sifat kimia yang berulang.</p>
      
      <h3>Struktur Atom</h3>
      <p>Atom terdiri dari tiga partikel subatomik utama:</p>
      <ul>
        <li>Proton: partikel bermuatan positif yang berada di inti atom</li>
        <li>Neutron: partikel netral yang berada di inti atom</li>
        <li>Elektron: partikel bermuatan negatif yang mengelilingi inti atom</li>
      </ul>
      
      <h3>Tabel Periodik</h3>
      <p>Tabel periodik mengatur unsur-unsur berdasarkan:</p>
      <ul>
        <li>Nomor atom (jumlah proton)</li>
        <li>Konfigurasi elektron</li>
        <li>Sifat kimia yang berulang</li>
      </ul>
      
      <h3>Golongan dan Periode</h3>
      <p>Tabel periodik terdiri dari golongan (kolom vertikal) dan periode (baris horizontal):</p>
      <ul>
        <li>Golongan: unsur-unsur dalam satu golongan memiliki sifat kimia yang mirip</li>
        <li>Periode: unsur-unsur dalam satu periode memiliki jumlah kulit elektron yang sama</li>
      </ul>
    `,
    category: "Kimia",
    level: "Dasar",
    duration: "2 jam 15 menit",
    rating: 4.8,
    totalRatings: 112,
    progress: 90,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Atom", "Elektron", "Periodik"],
    lastUpdated: "2023-04-05",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
    sections: [
      {
        id: 1,
        title: "Pendahuluan",
        duration: "15 menit",
        completed: true,
      },
      {
        id: 2,
        title: "Struktur Atom",
        duration: "30 menit",
        completed: true,
      },
      {
        id: 3,
        title: "Partikel Subatomik",
        duration: "25 menit",
        completed: true,
      },
      {
        id: 4,
        title: "Tabel Periodik",
        duration: "35 menit",
        completed: true,
      },
      {
        id: 5,
        title: "Golongan dan Periode",
        duration: "30 menit",
        completed: false,
      },
    ],
  },
  {
    id: 4,
    title: "Tata Bahasa Inggris Dasar",
    description: "Mempelajari dasar-dasar tata bahasa Inggris untuk komunikasi efektif",
    category: "Bahasa Inggris",
    level: "Dasar",
    duration: "3 jam",
    rating: 4.6,
    totalRatings: 150,
    progress: 60,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Grammar", "Vocabulary", "Speaking"],
    lastUpdated: "2023-04-01",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
  },
  {
    id: 5,
    title: "Kalkulus Diferensial",
    description: "Memahami konsep turunan dan aplikasinya dalam pemecahan masalah",
    category: "Matematika",
    level: "Lanjut",
    duration: "4 jam 30 menit",
    rating: 4.9,
    totalRatings: 85,
    progress: 30,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Turunan", "Limit", "Fungsi"],
    lastUpdated: "2023-03-28",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
  },
  {
    id: 6,
    title: "Termodinamika",
    description: "Eksplorasi prinsip-prinsip termodinamika dan aplikasinya",
    category: "Fisika",
    level: "Menengah",
    duration: "3 jam 15 menit",
    rating: 4.4,
    totalRatings: 78,
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Energi", "Entropi", "Suhu"],
    lastUpdated: "2023-03-25",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
  },
  {
    id: 7,
    title: "Reaksi Kimia Organik",
    description: "Mempelajari berbagai jenis reaksi dalam kimia organik",
    category: "Kimia",
    level: "Lanjut",
    duration: "5 jam",
    rating: 4.7,
    totalRatings: 92,
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Organik", "Reaksi", "Karbon"],
    lastUpdated: "2023-03-20",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
  },
  {
    id: 8,
    title: "Public Speaking",
    description: "Teknik dan strategi untuk berbicara di depan umum dengan percaya diri",
    category: "Bahasa Inggris",
    level: "Menengah",
    duration: "2 jam 45 menit",
    rating: 4.8,
    totalRatings: 135,
    progress: 0,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Speaking", "Confidence", "Presentation"],
    lastUpdated: "2023-03-15",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
  },
  {
    id: 9,
    title: "Machine Learning untuk Pemula",
    description: "Pengenalan konsep dasar machine learning dan implementasinya",
    category: "Komputer",
    level: "Menengah",
    duration: "4 jam",
    rating: 4.9,
    totalRatings: 210,
    progress: 0,
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI", "Machine Learning", "Data Science"],
    lastUpdated: "2023-03-10",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
    featured: true,
  },
  {
    id: 10,
    title: "Biologi Molekuler",
    description: "Mempelajari struktur dan fungsi molekul dalam sistem biologis",
    category: "Biologi",
    level: "Lanjut",
    duration: "5 jam 30 menit",
    rating: 4.7,
    totalRatings: 95,
    progress: 0,
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Molekul", "DNA", "Protein"],
    lastUpdated: "2023-03-05",
    author: {
      id: "3",
      name: "Tutor Demo",
    },
    featured: true,
  },
]
