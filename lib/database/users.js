// Data pengguna
export const users = [
  {
    id: "1",
    name: "Pengguna Demo",
    email: "maaulln@gmail.com",
    password: "password", // Dalam aplikasi nyata, password harus di-hash
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
];
