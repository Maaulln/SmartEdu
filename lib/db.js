// Database sementara untuk aplikasi
export const initialData = {
  // Data pengguna
  users: [
    {
      id: "1",
      name: "Pengguna Demo",
      email: "maaulln@gmail.com",
      password: "password",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "student",
      createdAt: "2023-01-15T08:30:00Z",
      bio: "Saya adalah seorang pelajar yang bersemangat untuk belajar hal-hal baru.",
      phone: "081234567890",
      address: "Jakarta, Indonesia",
      progress: {
        completedMaterials: 24,
        totalMaterials: 120,
        completedQuizzes: 18,
        totalQuizzes: 30,
        totalPoints: 1250,
        streak: 7,
      },
    },
    {
      id: "2",
      name: "Admin Demo",
      email: "admin@example.com",
      password: "admin123",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "admin",
      createdAt: "2022-12-10T10:15:00Z",
    },
    {
      id: "3",
      name: "Tutor Demo",
      email: "tutor@example.com",
      password: "tutor123",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "tutor",
      createdAt: "2023-01-05T14:20:00Z",
    },
  ],

  // Data materi pembelajaran
  materials: [
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
      description:
        "Memahami hukum gerak Newton dan penerapannya dalam kehidupan sehari-hari",
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
      description:
        "Eksplorasi struktur atom dan organisasi tabel periodik unsur",
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
      description:
        "Mempelajari dasar-dasar tata bahasa Inggris untuk komunikasi efektif",
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
      description:
        "Memahami konsep turunan dan aplikasinya dalam pemecahan masalah",
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
      description:
        "Teknik dan strategi untuk berbicara di depan umum dengan percaya diri",
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
      description:
        "Pengenalan konsep dasar machine learning dan implementasinya",
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
      description:
        "Mempelajari struktur dan fungsi molekul dalam sistem biologis",
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
  ],

  // Data kuis
  quizzes: [
    {
      id: 1,
      title: "Aljabar Linear Dasar",
      description: "Uji pemahaman Anda tentang konsep dasar aljabar linear",
      category: "Matematika",
      difficulty: "Menengah",
      totalQuestions: 15,
      duration: "30 menit",
      dueDate: "2023-05-20",
      status: "available",
      progress: 0,
      image: "/placeholder.svg?height=100&width=200",
      questions: [
        {
          id: 1,
          question: "Apa yang dimaksud dengan vektor?",
          options: [
            "Besaran yang hanya memiliki nilai",
            "Besaran yang memiliki nilai dan arah",
            "Besaran yang hanya memiliki arah",
            "Besaran yang tidak memiliki nilai dan arah",
          ],
          correctAnswer: 1,
          explanation:
            "Vektor adalah besaran yang memiliki nilai (magnitudo) dan arah.",
        },
        {
          id: 2,
          question:
            "Jika A dan B adalah matriks, maka A + B = B + A adalah contoh dari sifat...",
          options: ["Asosiatif", "Komutatif", "Distributif", "Identitas"],
          correctAnswer: 1,
          explanation:
            "Sifat komutatif menyatakan bahwa urutan operasi penjumlahan tidak mempengaruhi hasil.",
        },
        // Tambahkan pertanyaan lainnya
      ],
    },
    {
      id: 2,
      title: "Hukum Newton",
      description: "Kuis tentang hukum gerak Newton dan aplikasinya",
      category: "Fisika",
      difficulty: "Dasar",
      totalQuestions: 10,
      duration: "20 menit",
      dueDate: "2023-05-18",
      status: "available",
      progress: 0,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      title: "Tabel Periodik Unsur",
      description:
        "Menguji pengetahuan Anda tentang tabel periodik dan sifat unsur",
      category: "Kimia",
      difficulty: "Dasar",
      totalQuestions: 20,
      duration: "40 menit",
      dueDate: "2023-05-25",
      status: "available",
      progress: 0,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 4,
      title: "Grammar Bahasa Inggris",
      description: "Kuis tentang tata bahasa Inggris dasar",
      category: "Bahasa Inggris",
      difficulty: "Dasar",
      totalQuestions: 25,
      duration: "45 menit",
      dueDate: "2023-05-15",
      status: "in_progress",
      progress: 40,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 5,
      title: "Kalkulus Diferensial",
      description: "Uji pemahaman Anda tentang konsep turunan dan aplikasinya",
      category: "Matematika",
      difficulty: "Lanjut",
      totalQuestions: 15,
      duration: "45 menit",
      dueDate: "2023-05-22",
      status: "in_progress",
      progress: 60,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 6,
      title: "Termodinamika",
      description: "Kuis tentang prinsip-prinsip termodinamika",
      category: "Fisika",
      difficulty: "Menengah",
      totalQuestions: 12,
      duration: "30 menit",
      dueDate: "2023-05-10",
      status: "completed",
      score: 85,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 7,
      title: "Reaksi Kimia Organik",
      description: "Menguji pengetahuan Anda tentang reaksi kimia organik",
      category: "Kimia",
      difficulty: "Lanjut",
      totalQuestions: 20,
      duration: "50 menit",
      dueDate: "2023-05-05",
      status: "completed",
      score: 92,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 8,
      title: "Public Speaking",
      description: "Kuis tentang teknik dan strategi public speaking",
      category: "Bahasa Inggris",
      difficulty: "Menengah",
      totalQuestions: 15,
      duration: "30 menit",
      dueDate: "2023-05-08",
      status: "completed",
      score: 78,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 9,
      title: "Ujian Tengah Semester Matematika",
      description: "Ujian komprehensif tentang materi matematika semester ini",
      category: "Matematika",
      difficulty: "Menengah",
      totalQuestions: 30,
      duration: "120 menit",
      date: "20 Mei 2023",
      time: "09:00 - 11:00",
      status: "upcoming",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 10,
      title: "Ujian Praktikum Fisika",
      description: "Ujian praktikum tentang konsep fisika dasar",
      category: "Fisika",
      difficulty: "Menengah",
      totalQuestions: 15,
      duration: "90 menit",
      date: "22 Mei 2023",
      time: "13:00 - 15:00",
      status: "upcoming",
      image: "/placeholder.svg?height=100&width=200",
    },
  ],

  // Data forum diskusi
  discussions: [
    {
      id: 1,
      title: "Bagaimana cara memahami konsep vektor dalam aljabar linear?",
      content:
        "Saya kesulitan memahami konsep vektor dalam aljabar linear, terutama pada bagian transformasi linear. Bisakah seseorang menjelaskan dengan cara yang lebih sederhana?",
      category: "Matematika",
      tags: ["Aljabar Linear", "Vektor"],
      author: {
        id: 101,
        name: "Ahmad Rizki",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-10T08:30:00Z",
      views: 120,
      likes: 15,
      replies: [
        {
          id: 1001,
          content:
            "Vektor dapat dibayangkan sebagai panah yang memiliki panjang dan arah. Dalam konteks aljabar linear, vektor adalah elemen dari ruang vektor. Transformasi linear adalah fungsi antara ruang vektor yang mempertahankan operasi penjumlahan dan perkalian skalar.",
          author: {
            id: 102,
            name: "Siti Rahayu",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          createdAt: "2023-05-10T09:15:00Z",
          likes: 8,
          isLiked: false,
        },
        {
          id: 1002,
          content:
            "Saya sarankan untuk mencoba memvisualisasikan vektor. Coba gambar vektor di kertas dan lihat bagaimana mereka berperilaku saat dijumlahkan atau dikalikan dengan skalar. Untuk transformasi linear, bayangkan bagaimana vektor-vektor tersebut berubah (diregangkan, diputar, dll) saat ditransformasikan.",
          author: {
            id: 103,
            name: "Budi Santoso",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          createdAt: "2023-05-10T10:30:00Z",
          likes: 5,
          isLiked: false,
        },
      ],
      isLiked: false,
      isPinned: false,
      isResolved: false,
    },
    {
      id: 2,
      title: "Perbedaan antara hukum Newton pertama, kedua, dan ketiga",
      content:
        "Saya sering bingung membedakan ketiga hukum Newton. Bisakah seseorang menjelaskan perbedaan dan aplikasi dari masing-masing hukum tersebut?",
      category: "Fisika",
      tags: ["Hukum Newton", "Mekanika"],
      author: {
        id: 102,
        name: "Siti Rahayu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-09T14:15:00Z",
      views: 95,
      likes: 12,
      replies: [
        {
          id: 2001,
          content:
            "Hukum pertama Newton (hukum inersia): Benda akan tetap diam atau bergerak dengan kecepatan konstan kecuali ada gaya eksternal yang bekerja padanya.\n\nHukum kedua Newton: Percepatan benda berbanding lurus dengan gaya yang bekerja padanya dan berbanding terbalik dengan massanya (F = m × a).\n\nHukum ketiga Newton: Untuk setiap aksi, selalu ada reaksi yang sama besar dan berlawanan arah.",
          author: {
            id: 103,
            name: "Budi Santoso",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          createdAt: "2023-05-09T15:00:00Z",
          likes: 10,
          isLiked: false,
        },
      ],
      isLiked: true,
      isPinned: false,
      isResolved: true,
    },
    {
      id: 3,
      title: "Tips menghafalkan tabel periodik unsur",
      content:
        "Saya kesulitan menghafalkan tabel periodik unsur. Apakah ada tips atau trik untuk memudahkan proses menghafal?",
      category: "Kimia",
      tags: ["Tabel Periodik", "Unsur Kimia"],
      author: {
        id: 103,
        name: "Budi Santoso",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-08T10:45:00Z",
      views: 78,
      likes: 9,
      replies: [],
      isLiked: false,
      isPinned: true,
      isResolved: false,
    },
    {
      id: 4,
      title: "Cara meningkatkan kemampuan speaking dalam bahasa Inggris",
      content:
        "Saya ingin meningkatkan kemampuan speaking dalam bahasa Inggris. Apa saja metode atau latihan yang efektif untuk meningkatkan kemampuan tersebut?",
      category: "Bahasa Inggris",
      tags: ["Speaking", "Pronunciation"],
      author: {
        id: 104,
        name: "Dewi Lestari",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-07T16:20:00Z",
      views: 150,
      likes: 25,
      replies: [],
      isLiked: false,
      isPinned: false,
      isResolved: true,
    },
    {
      id: 5,
      title: "Aplikasi kalkulus diferensial dalam kehidupan sehari-hari",
      content:
        "Saya ingin mengetahui aplikasi kalkulus diferensial dalam kehidupan sehari-hari. Bisakah seseorang memberikan contoh konkret?",
      category: "Matematika",
      tags: ["Kalkulus", "Aplikasi Matematika"],
      author: {
        id: 105,
        name: "Eko Prasetyo",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-06T09:10:00Z",
      views: 85,
      likes: 11,
      replies: [],
      isLiked: true,
      isPinned: false,
      isResolved: false,
    },
    {
      id: 6,
      title: "Penjelasan tentang hukum termodinamika",
      content:
        "Saya kesulitan memahami hukum-hukum termodinamika. Bisakah seseorang menjelaskan dengan bahasa yang lebih sederhana?",
      category: "Fisika",
      tags: ["Termodinamika", "Energi"],
      author: {
        id: 106,
        name: "Rina Wijaya",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      createdAt: "2023-05-05T13:40:00Z",
      views: 65,
      likes: 8,
      replies: [],
      isLiked: false,
      isPinned: false,
      isResolved: true,
    },
  ],

  // Data bantuan
  helpData: {
    categories: [
      {
        id: 1,
        title: "Materi Pembelajaran",
        icon: "Book",
        description: "Bantuan terkait akses dan penggunaan materi pembelajaran",
        articles: 15,
      },
      {
        id: 2,
        title: "Kuis & Ujian",
        icon: "FileQuestion",
        description: "Bantuan terkait pengerjaan kuis dan ujian",
        articles: 12,
      },
      {
        id: 3,
        title: "Akun & Pengaturan",
        icon: "Settings",
        description: "Bantuan terkait pengaturan akun dan profil",
        articles: 10,
      },
      {
        id: 4,
        title: "Kelas & Tutor",
        icon: "Users",
        description: "Bantuan terkait kelas dan interaksi dengan tutor",
        articles: 8,
      },
      {
        id: 5,
        title: "Forum Diskusi",
        icon: "MessageSquare",
        description: "Bantuan terkait penggunaan forum diskusi",
        articles: 9,
      },
      {
        id: 6,
        title: "Sertifikat & Pencapaian",
        icon: "Award",
        description: "Bantuan terkait sertifikat dan pencapaian",
        articles: 7,
      },
    ],
    popularArticles: [
      {
        id: 101,
        title: "Cara mengakses materi pembelajaran offline",
        category: "Materi Pembelajaran",
        views: 1250,
      },
      {
        id: 102,
        title: "Bagaimana cara mengerjakan kuis dengan batas waktu",
        category: "Kuis & Ujian",
        views: 980,
      },
      {
        id: 103,
        title: "Cara mengubah password akun",
        category: "Akun & Pengaturan",
        views: 850,
      },
      {
        id: 104,
        title: "Cara mendapatkan sertifikat penyelesaian",
        category: "Sertifikat & Pencapaian",
        views: 720,
      },
      {
        id: 105,
        title: "Cara menghubungi tutor untuk konsultasi",
        category: "Kelas & Tutor",
        views: 680,
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Bagaimana cara mengakses materi pembelajaran?",
        answer:
          "Anda dapat mengakses materi pembelajaran melalui menu 'Materi' di dashboard. Pilih kategori materi yang ingin dipelajari, kemudian klik pada judul materi untuk mulai belajar. Materi dapat diakses secara online, dan beberapa materi juga dapat diunduh untuk akses offline.",
        category: "Materi Pembelajaran",
      },
      {
        id: 2,
        question: "Apakah saya bisa mengulang kuis yang sudah dikerjakan?",
        answer:
          "Ya, Anda dapat mengulang kuis yang sudah dikerjakan dengan mengklik tombol 'Ulangi Kuis' pada halaman hasil kuis. Namun, perlu diperhatikan bahwa beberapa kuis mungkin memiliki batasan jumlah pengulangan, terutama untuk kuis yang bersifat ujian.",
        category: "Kuis & Ujian",
      },
      {
        id: 3,
        question: "Bagaimana cara mendapatkan sertifikat?",
        answer:
          "Untuk mendapatkan sertifikat, Anda perlu menyelesaikan seluruh materi dan lulus ujian akhir dengan nilai minimal 70%. Setelah memenuhi persyaratan tersebut, sertifikat akan otomatis diterbitkan dan dapat diakses melalui menu 'Sertifikat' di profil Anda.",
        category: "Sertifikat & Pencapaian",
      },
      {
        id: 4,
        question: "Bagaimana cara mengubah informasi profil?",
        answer:
          "Untuk mengubah informasi profil, klik pada avatar Anda di pojok kanan atas, kemudian pilih 'Profil'. Pada halaman profil, klik tombol 'Edit Profil' untuk mengubah informasi seperti nama, foto profil, dan biodata.",
        category: "Akun & Pengaturan",
      },
      {
        id: 5,
        question: "Apakah saya bisa belajar secara offline?",
        answer:
          "Ya, Anda dapat belajar secara offline dengan mengunduh materi terlebih dahulu. Klik tombol 'Unduh' pada halaman materi yang ingin diakses secara offline. Materi yang sudah diunduh dapat diakses melalui aplikasi mobile kami tanpa koneksi internet.",
        category: "Materi Pembelajaran",
      },
      {
        id: 6,
        question: "Bagaimana cara bertanya kepada tutor?",
        answer:
          "Anda dapat bertanya kepada tutor melalui beberapa cara: 1) Melalui forum diskusi dengan membuat topik baru, 2) Melalui fitur komentar pada materi pembelajaran, atau 3) Melalui fitur chat langsung dengan tutor yang tersedia pada jam kerja (08.00-20.00 WIB).",
        category: "Kelas & Tutor",
      },
      {
        id: 7,
        question: "Berapa lama waktu akses materi setelah berlangganan?",
        answer:
          "Waktu akses materi tergantung pada paket berlangganan yang Anda pilih. Paket Bulanan memberikan akses selama 30 hari, Paket Semester memberikan akses selama 6 bulan, dan Paket Tahunan memberikan akses selama 12 bulan. Setelah masa berlangganan habis, Anda perlu memperpanjang untuk tetap dapat mengakses materi.",
        category: "Materi Pembelajaran",
      },
      {
        id: 8,
        question:
          "Apakah saya bisa mengakses platform dari perangkat yang berbeda?",
        answer:
          "Ya, Anda dapat mengakses platform dari berbagai perangkat seperti komputer, tablet, atau smartphone. Sistem kami akan menyinkronkan progres belajar Anda di semua perangkat selama Anda login dengan akun yang sama.",
        category: "Akun & Pengaturan",
      },
    ],
    contactMethods: [
      {
        id: 1,
        title: "Email",
        icon: "Mail",
        description: "Kirim pertanyaan Anda melalui email",
        value: "support@SmartEdu.id",
        responseTime: "24 jam",
      },
      {
        id: 2,
        title: "Telepon",
        icon: "Phone",
        description: "Hubungi tim dukungan kami",
        value: "+62 21 1234 5678",
        responseTime: "Langsung",
        availableTime: "08.00 - 20.00 WIB",
      },
      {
        id: 3,
        title: "Live Chat",
        icon: "MessageSquare",
        description: "Chat langsung dengan tim dukungan",
        responseTime: "5 menit",
        availableTime: "08.00 - 22.00 WIB",
      },
      {
        id: 4,
        title: "Video Call",
        icon: "Video",
        description: "Konsultasi melalui video call",
        responseTime: "Dengan janji",
        availableTime: "09.00 - 17.00 WIB",
      },
    ],
  },

  // Data kategori
  categories: [
    "Matematika",
    "Fisika",
    "Kimia",
    "Bahasa Inggris",
    "Komputer",
    "Biologi",
  ],

  // Data tingkat kesulitan
  levels: ["Dasar", "Menengah", "Lanjut"],

  // Data statistik pengguna
  userStats: {
    progressData: [
      { name: "Minggu 1", value: 100 },
      { name: "Minggu 2", value: 80 },
      { name: "Minggu 3", value: 90 },
      { name: "Minggu 4", value: 70 },
      { name: "Minggu 5", value: 85 },
      { name: "Minggu 6", value: 95 },
    ],
  },

  // Data jadwal
  events: [
    {
      id: 1,
      title: "Ujian Matematika",
      date: "Senin, 15 Mei 2023",
      time: "09:00 - 11:00",
      type: "exam",
    },
    {
      id: 2,
      title: "Diskusi Kelompok: Fisika Kuantum",
      date: "Rabu, 17 Mei 2023",
      time: "13:00 - 14:30",
      type: "discussion",
    },
    {
      id: 3,
      title: "Webinar: Teknik Belajar Efektif",
      date: "Jumat, 19 Mei 2023",
      time: "15:00 - 16:30",
      type: "webinar",
    },
  ],

  // Data pengaturan default
  settings: {
    notification: {
      email: true,
      push: true,
      reminders: true,
      updates: false,
      marketing: false,
    },
    privacy: {
      profileVisibility: "public",
      activityVisibility: "friends",
      showOnlineStatus: true,
      allowMessages: true,
    },
    display: {
      darkMode: false,
      language: "id",
      fontSize: "medium",
      colorTheme: "default",
    },
    activeSessions: [
      {
        id: "session-1",
        device: "Current Device",
        deviceType: "desktop",
        lastActive: new Date().toISOString(),
        location: "Jakarta, Indonesia",
        isCurrent: true,
      },
      {
        id: "session-2",
        device: "Mobile Phone",
        deviceType: "mobile",
        lastActive: new Date(Date.now() - 86400000).toISOString(),
        location: "Bandung, Indonesia",
        isCurrent: false,
      },
    ],
  },
};

// Fungsi untuk mendapatkan data pengguna berdasarkan ID
export const getUserById = (userId) => {
  return initialData.users.find((user) => user.id === userId) || null;
};

// Fungsi untuk mendapatkan pengaturan default
export const getDefaultSettings = () => {
  return initialData.settings;
};

// Fungsi untuk mendapatkan sesi aktif
export const getActiveSessions = () => {
  return initialData.settings.activeSessions;
};

// Fungsi untuk mendapatkan data pengguna saat ini (simulasi)
export const getCurrentUser = () => {
  return initialData.users[0]; // Pengguna Demo
};

// Fungsi untuk memperbarui data pengguna
export const updateUser = (userId, userData) => {
  const userIndex = initialData.users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    initialData.users[userIndex] = {
      ...initialData.users[userIndex],
      ...userData,
    };
    return initialData.users[userIndex];
  }
  return null;
};

// Fungsi untuk memverifikasi password (simulasi)
export const verifyPassword = (userId, password) => {
  const user = getUserById(userId);
  return user && user.password === password;
};

// Fungsi untuk mengubah password (simulasi)
export const changePassword = (userId, newPassword) => {
  const userIndex = initialData.users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    initialData.users[userIndex].password = newPassword;
    return true;
  }
  return false;
};

// Fungsi untuk menghapus sesi (simulasi)
export const removeSession = (sessionId) => {
  const sessionIndex = initialData.settings.activeSessions.findIndex(
    (session) => session.id === sessionId
  );
  if (
    sessionIndex !== -1 &&
    !initialData.settings.activeSessions[sessionIndex].isCurrent
  ) {
    initialData.settings.activeSessions.splice(sessionIndex, 1);
    return true;
  }
  return false;
};

// Fungsi untuk menghapus semua sesi kecuali yang saat ini (simulasi)
export const removeAllSessions = () => {
  initialData.settings.activeSessions =
    initialData.settings.activeSessions.filter((session) => session.isCurrent);
  return true;
};
