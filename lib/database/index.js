// Database sementara untuk aplikasi
import { users } from "./users"
import { materials } from "./materials"
import { quizzes } from "./quizzes"
import { discussions } from "./discussions"
import { helpData } from "./help-data"
import { events } from "./events"
import { settings } from "./settings"

// Data kategori dan level
const categories = ["Matematika", "Fisika", "Kimia", "Bahasa Inggris", "Komputer", "Biologi"]
const levels = ["Dasar", "Menengah", "Lanjut"]

// Data statistik pengguna
const userStats = {
  progressData: [
    { name: "Minggu 1", value: 100 },
    { name: "Minggu 2", value: 80 },
    { name: "Minggu 3", value: 90 },
    { name: "Minggu 4", value: 70 },
    { name: "Minggu 5", value: 85 },
    { name: "Minggu 6", value: 95 },
  ],
}

// Database sementara
export const db = {
  users,
  materials,
  quizzes,
  discussions,
  helpData,
  categories,
  levels,
  userStats,
  events,
  settings,
}

// Fungsi untuk mendapatkan data pengguna berdasarkan ID
export const getUserById = (userId) => {
  return db.users.find((user) => user.id === userId) || null
}

// Fungsi untuk mendapatkan pengaturan default
export const getDefaultSettings = () => {
  return db.settings
}

// Fungsi untuk mendapatkan data pengguna saat ini (simulasi)
export const getCurrentUser = () => {
  return db.users[0] // Pengguna Demo
}

// Fungsi untuk memperbarui data pengguna
export const updateUser = (userId, userData) => {
  const userIndex = db.users.findIndex((user) => user.id === userId)
  if (userIndex !== -1) {
    db.users[userIndex] = { ...db.users[userIndex], ...userData }
    return db.users[userIndex]
  }
  return null
}

// Fungsi untuk mendapatkan materi berdasarkan ID
export const getMaterialById = (materialId) => {
  return db.materials.find((material) => material.id === materialId) || null
}

// Fungsi untuk mendapatkan kuis berdasarkan ID
export const getQuizById = (quizId) => {
  return db.quizzes.find((quiz) => quiz.id === quizId) || null
}

// Fungsi untuk mendapatkan diskusi berdasarkan ID
export const getDiscussionById = (discussionId) => {
  return db.discussions.find((discussion) => discussion.id === discussionId) || null
}

// Fungsi untuk mendapatkan materi unggulan
export const getFeaturedMaterials = () => {
  return db.materials.filter((material) => material.featured)
}

// Fungsi untuk mendapatkan materi terbaru
export const getRecentMaterials = (limit = 5) => {
  return [...db.materials].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)).slice(0, limit)
}

// Fungsi untuk mendapatkan kuis mendatang
export const getUpcomingQuizzes = () => {
  return db.quizzes.filter((quiz) => quiz.status === "upcoming")
}

// Fungsi untuk mendapatkan diskusi populer
export const getPopularDiscussions = (limit = 5) => {
  return [...db.discussions].sort((a, b) => b.views - a.views).slice(0, limit)
}

// Fungsi untuk mendapatkan tag populer dari diskusi
export const getPopularTags = (limit = 6) => {
  const tags = db.discussions.flatMap((discussion) => discussion.tags)
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1
    return acc
  }, {})

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
}

// Fungsi untuk mendapatkan pengguna aktif dari diskusi
export const getActiveUsers = (limit = 3) => {
  const authors = db.discussions.map((discussion) => discussion.author)
  const authorCounts = authors.reduce((acc, author) => {
    acc[author.id] = acc[author.id] || { ...author, posts: 0 }
    acc[author.id].posts += 1
    return acc
  }, {})

  return Object.values(authorCounts)
    .sort((a, b) => b.posts - a.posts)
    .slice(0, limit)
}

// Fungsi untuk mencari materi
export const searchMaterials = (query, filters = {}) => {
  let filtered = [...db.materials]

  // Filter berdasarkan kategori
  if (filters.category && filters.category !== "Semua") {
    filtered = filtered.filter((material) => material.category === filters.category)
  }

  // Filter berdasarkan level
  if (filters.level && filters.level !== "Semua") {
    filtered = filtered.filter((material) => material.level === filters.level)
  }

  // Filter berdasarkan status
  if (filters.status === "progress") {
    filtered = filtered.filter((material) => material.progress > 0 && material.progress < 100)
  } else if (filters.status === "selesai") {
    filtered = filtered.filter((material) => material.progress === 100)
  } else if (filters.status === "belum") {
    filtered = filtered.filter((material) => material.progress === 0)
  }

  // Filter berdasarkan pencarian
  if (query) {
    const searchQuery = query.toLowerCase()
    filtered = filtered.filter(
      (material) =>
        material.title.toLowerCase().includes(searchQuery) ||
        material.description.toLowerCase().includes(searchQuery) ||
        (material.tags && material.tags.some((tag) => tag.toLowerCase().includes(searchQuery))),
    )
  }

  // Sorting
  if (filters.sort) {
    switch (filters.sort) {
      case "newest":
        filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "duration-asc":
        filtered.sort((a, b) => {
          const durationA = Number.parseInt(a.duration?.split(" ")[0] || "0")
          const durationB = Number.parseInt(b.duration?.split(" ")[0] || "0")
          return durationA - durationB
        })
        break
      case "duration-desc":
        filtered.sort((a, b) => {
          const durationA = Number.parseInt(a.duration?.split(" ")[0] || "0")
          const durationB = Number.parseInt(b.duration?.split(" ")[0] || "0")
          return durationB - durationA
        })
        break
      default:
        break
    }
  }

  return filtered
}

// Fungsi untuk mencari kuis
export const searchQuizzes = (query, filters = {}) => {
  let filtered = [...db.quizzes]

  // Filter berdasarkan status
  if (filters.status === "available") {
    filtered = filtered.filter((quiz) => quiz.status === "available")
  } else if (filters.status === "in_progress") {
    filtered = filtered.filter((quiz) => quiz.status === "in_progress")
  } else if (filters.status === "completed") {
    filtered = filtered.filter((quiz) => quiz.status === "completed")
  } else if (filters.status === "upcoming") {
    filtered = filtered.filter((quiz) => quiz.status === "upcoming")
  } else {
    // Jika status adalah "semua", kecualikan upcoming
    filtered = filtered.filter((quiz) => quiz.status !== "upcoming")
  }

  // Filter berdasarkan kategori
  if (filters.category && filters.category !== "Semua") {
    filtered = filtered.filter((quiz) => quiz.category === filters.category)
  }

  // Filter berdasarkan kesulitan
  if (filters.difficulty && filters.difficulty !== "Semua") {
    filtered = filtered.filter((quiz) => quiz.difficulty === filters.difficulty)
  }

  // Filter berdasarkan pencarian
  if (query) {
    const searchQuery = query.toLowerCase()
    filtered = filtered.filter(
      (quiz) =>
        quiz.title.toLowerCase().includes(searchQuery) ||
        quiz.description.toLowerCase().includes(searchQuery) ||
        quiz.category.toLowerCase().includes(searchQuery),
    )
  }

  return filtered
}

// Fungsi untuk mencari diskusi
export const searchDiscussions = (query, filters = {}) => {
  let filtered = [...db.discussions]

  // Filter berdasarkan status
  if (filters.status === "pinned") {
    filtered = filtered.filter((discussion) => discussion.isPinned)
  } else if (filters.status === "resolved") {
    filtered = filtered.filter((discussion) => discussion.isResolved)
  } else if (filters.status === "unresolved") {
    filtered = filtered.filter((discussion) => !discussion.isResolved)
  }

  // Filter berdasarkan kategori
  if (filters.category && filters.category !== "Semua") {
    filtered = filtered.filter((discussion) => discussion.category === filters.category)
  }

  // Filter berdasarkan pencarian
  if (query) {
    const searchQuery = query.toLowerCase()
    filtered = filtered.filter(
      (discussion) =>
        discussion.title.toLowerCase().includes(searchQuery) ||
        discussion.content.toLowerCase().includes(searchQuery) ||
        discussion.tags.some((tag) => tag.toLowerCase().includes(searchQuery)),
    )
  }

  // Sorting
  if (filters.sort) {
    switch (filters.sort) {
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        break
      case "most_likes":
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case "most_replies":
        filtered.sort((a, b) => b.replies.length - a.replies.length)
        break
      case "most_views":
        filtered.sort((a, b) => b.views - a.views)
        break
      default:
        break
    }
  }

  return filtered
}
