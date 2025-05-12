// Data forum diskusi
export const discussions = [
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
]
