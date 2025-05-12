"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Video, Search, Filter, ChevronDown, X, Calendar, Clock, Users, Star, Play, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Data dummy untuk kelas live
const liveClasses = [
  {
    id: 1,
    title: "Pengenalan Aljabar Linear",
    description: "Memahami konsep dasar aljabar linear dan aplikasinya dalam kehidupan sehari-hari",
    instructor: {
      name: "Dr. Ahmad Rizki",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 124,
    },
    category: "Matematika",
    level: "Menengah",
    date: "2025-05-15",
    time: "15:00 - 16:30",
    duration: "90 menit",
    participants: 45,
    maxParticipants: 100,
    status: "upcoming", // upcoming, live, completed
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Aljabar", "Vektor", "Matriks"],
    isRegistered: true,
  },
  {
    id: 2,
    title: "Fisika Kuantum untuk Pemula",
    description: "Pengenalan konsep dasar fisika kuantum dan fenomena-fenomena menarik di dalamnya",
    instructor: {
      name: "Prof. Siti Rahayu",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 156,
    },
    category: "Fisika",
    level: "Lanjut",
    date: "2025-05-16",
    time: "19:00 - 21:00",
    duration: "120 menit",
    participants: 78,
    maxParticipants: 150,
    status: "upcoming",
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Kuantum", "Fisika Modern", "Partikel"],
    isRegistered: false,
  },
  {
    id: 3,
    title: "Teknik Menulis Esai Akademik",
    description: "Belajar menulis esai akademik yang efektif dan meyakinkan untuk keperluan akademis",
    instructor: {
      name: "Dewi Lestari, M.Pd.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.7,
      reviews: 98,
    },
    category: "Bahasa Inggris",
    level: "Dasar",
    date: "2025-05-14",
    time: "10:00 - 11:30",
    duration: "90 menit",
    participants: 120,
    maxParticipants: 200,
    status: "live",
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Menulis", "Akademik", "Esai"],
    isRegistered: true,
  },
  {
    id: 4,
    title: "Kimia Organik: Reaksi Adisi",
    description: "Memahami berbagai jenis reaksi adisi dalam kimia organik dan mekanismenya",
    instructor: {
      name: "Dr. Budi Santoso",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.6,
      reviews: 87,
    },
    category: "Kimia",
    level: "Menengah",
    date: "2025-05-12",
    time: "13:00 - 14:30",
    duration: "90 menit",
    participants: 65,
    maxParticipants: 100,
    status: "completed",
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Kimia Organik", "Reaksi", "Adisi"],
    isRegistered: true,
    recording: true,
  },
  {
    id: 5,
    title: "Machine Learning untuk Pemula",
    description: "Pengenalan konsep dasar machine learning dan implementasinya dalam Python",
    instructor: {
      name: "Eko Prasetyo, M.Kom.",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.9,
      reviews: 210,
    },
    category: "Komputer",
    level: "Menengah",
    date: "2025-05-10",
    time: "15:00 - 17:00",
    duration: "120 menit",
    participants: 150,
    maxParticipants: 200,
    status: "completed",
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Machine Learning", "Python", "Data Science"],
    isRegistered: true,
    recording: true,
  },
  {
    id: 6,
    title: "Biologi Molekuler: DNA dan RNA",
    description: "Mempelajari struktur dan fungsi DNA dan RNA dalam sistem biologis",
    instructor: {
      name: "Dr. Rina Wijaya",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4.8,
      reviews: 76,
    },
    category: "Biologi",
    level: "Lanjut",
    date: "2025-05-18",
    time: "09:00 - 11:00",
    duration: "120 menit",
    participants: 55,
    maxParticipants: 100,
    status: "upcoming",
    thumbnail: "/placeholder.svg?height=200&width=350",
    tags: ["Biologi Molekuler", "DNA", "RNA"],
    isRegistered: false,
  },
]

// Komponen Card untuk Kelas Live
function LiveClassCard({ liveClass }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Tanggal tidak tersedia"
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  const getStatusBadge = () => {
    switch (liveClass.status) {
      case "live":
        return (
          <Badge className="bg-red-500 text-white hover:bg-red-600">
            <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-white"></span>
            Live
          </Badge>
        )
      case "upcoming":
        return <Badge className="bg-blue-500 text-white hover:bg-blue-600">Akan Datang</Badge>
      case "completed":
        return (
          <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
            Selesai
          </Badge>
        )
      default:
        return null
    }
  }

  const getActionButton = () => {
    if (liveClass.status === "live" && liveClass.isRegistered) {
      return (
        <Button className="w-full gap-2">
          <Play className="h-4 w-4" />
          Gabung Sekarang
        </Button>
      )
    } else if (liveClass.status === "upcoming") {
      return liveClass.isRegistered ? (
        <Button variant="outline" className="w-full">
          Sudah Terdaftar
        </Button>
      ) : (
        <Button className="w-full">Daftar</Button>
      )
    } else if (liveClass.status === "completed" && liveClass.recording) {
      return (
        <Button variant="outline" className="w-full gap-2">
          <Play className="h-4 w-4" />
          Tonton Rekaman
        </Button>
      )
    } else {
      return (
        <Button variant="outline" className="w-full" disabled>
          Tidak Tersedia
        </Button>
      )
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md">
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={liveClass.thumbnail || "/placeholder.svg"}
              alt={liveClass.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute bottom-3 left-3 flex items-center space-x-2">
            {getStatusBadge()}
            <Badge variant="outline" className="bg-white/90 text-slate-800 hover:bg-white">
              {liveClass.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="line-clamp-2 text-lg">{liveClass.title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pb-2">
          <p className="mb-4 line-clamp-2 text-sm text-slate-600">{liveClass.description}</p>

          <div className="mb-4 flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={liveClass.instructor.avatar || "/placeholder.svg"} alt={liveClass.instructor.name} />
              <AvatarFallback>{liveClass.instructor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">{liveClass.instructor.name}</div>
              <div className="flex items-center text-xs text-slate-500">
                <Star className="mr-1 h-3 w-3 text-amber-400" />
                {liveClass.instructor.rating} ({liveClass.instructor.reviews} ulasan)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center text-slate-600">
              <Calendar className="mr-2 h-4 w-4 text-slate-400" />
              {formatDate(liveClass.date)}
            </div>
            <div className="flex items-center text-slate-600">
              <Clock className="mr-2 h-4 w-4 text-slate-400" />
              {liveClass.time}
            </div>
            <div className="flex items-center text-slate-600">
              <Users className="mr-2 h-4 w-4 text-slate-400" />
              {liveClass.participants}/{liveClass.maxParticipants}
            </div>
            <div className="flex items-center text-slate-600">
              <BookOpen className="mr-2 h-4 w-4 text-slate-400" />
              {liveClass.level}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1">
            {liveClass.tags.map((tag) => (
              <span key={tag} className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter>{getActionButton()}</CardFooter>
      </Card>
    </motion.div>
  )
}

// Komponen Skeleton untuk loading state
function LiveClassSkeleton() {
  return (
    <Card className="h-full overflow-hidden">
      <div className="h-48 w-full animate-pulse bg-slate-200"></div>
      <CardHeader className="pb-2">
        <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200"></div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-4 h-16 animate-pulse rounded bg-slate-200"></div>
        <div className="mb-4 flex items-center space-x-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-200"></div>
            <div className="h-3 w-24 animate-pulse rounded bg-slate-200"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-5 animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 animate-pulse rounded bg-slate-200"></div>
        </div>
        <div className="mt-4 flex gap-1">
          <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-14 animate-pulse rounded-full bg-slate-200"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="h-9 w-full animate-pulse rounded bg-slate-200"></div>
      </CardFooter>
    </Card>
  )
}

export default function KelasLivePage() {
  const [activeTab, setActiveTab] = useState("semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedLevel, setSelectedLevel] = useState("Semua")
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Kategori dan level
  const categories = ["Semua", "Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris", "Komputer"]
  const levels = ["Semua", "Dasar", "Menengah", "Lanjut"]

  // Filter kelas live
  const filterLiveClasses = () => {
    let filtered = [...liveClasses]

    // Filter berdasarkan tab
    if (activeTab === "live") {
      filtered = filtered.filter((liveClass) => liveClass.status === "live")
    } else if (activeTab === "upcoming") {
      filtered = filtered.filter((liveClass) => liveClass.status === "upcoming")
    } else if (activeTab === "completed") {
      filtered = filtered.filter((liveClass) => liveClass.status === "completed")
    } else if (activeTab === "registered") {
      filtered = filtered.filter((liveClass) => liveClass.isRegistered)
    }

    // Filter berdasarkan kategori
    if (selectedCategory !== "Semua") {
      filtered = filtered.filter((liveClass) => liveClass.category === selectedCategory)
    }

    // Filter berdasarkan level
    if (selectedLevel !== "Semua") {
      filtered = filtered.filter((liveClass) => liveClass.level === selectedLevel)
    }

    // Filter berdasarkan pencarian
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (liveClass) =>
          liveClass.title.toLowerCase().includes(query) ||
          liveClass.description.toLowerCase().includes(query) ||
          liveClass.instructor.name.toLowerCase().includes(query) ||
          liveClass.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return filtered
  }

  // Reset filter
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("Semua")
    setSelectedLevel("Semua")
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8"
      >
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold md:text-3xl">Kelas Live</h1>
          <p className="mt-2 text-blue-100">
            Ikuti kelas live interaktif dengan tutor ahli dan tingkatkan pemahaman Anda melalui diskusi langsung.
          </p>
        </div>
      </motion.div>

      {/* Search and filter section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input
              type="search"
              placeholder="Cari kelas live..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              <span>Filter</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Expandable filter section */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Tingkat Kesulitan</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Badge
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs" onClick={resetFilters}>
                <X className="h-3 w-3" />
                Reset Filter
              </Button>
            </div>
          </motion.div>
        )}

        {/* Applied filters */}
        {(selectedCategory !== "Semua" || selectedLevel !== "Semua" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-500">Filter aktif:</span>
            {selectedCategory !== "Semua" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Kategori: {selectedCategory}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("Semua")} />
              </Badge>
            )}
            {selectedLevel !== "Semua" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Level: {selectedLevel}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLevel("Semua")} />
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Pencarian: {searchQuery}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
              </Badge>
            )}
          </div>
        )}
      </motion.div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="semua">Semua Kelas</TabsTrigger>
          <TabsTrigger value="live">Sedang Live</TabsTrigger>
          <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
          <TabsTrigger value="completed">Selesai</TabsTrigger>
          <TabsTrigger value="registered">Terdaftar</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <LiveClassSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {filterLiveClasses().length > 0 ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {filterLiveClasses().map((liveClass) => (
                    <LiveClassCard key={liveClass.id} liveClass={liveClass} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center"
                >
                  <Video className="mb-4 h-12 w-12 text-slate-300" />
                  <h3 className="text-lg font-medium">Tidak ada kelas ditemukan</h3>
                  <p className="mt-2 text-sm text-slate-500">Coba ubah filter atau kata kunci pencarian Anda</p>
                  <Button className="mt-4" onClick={resetFilters}>
                    Reset Filter
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>

      {/* Featured instructors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Tutor Unggulan</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {!isLoading &&
            [...new Map(liveClasses.map((item) => [item.instructor.name, item.instructor])).values()]
              .slice(0, 4)
              .map((instructor, index) => (
                <Card key={index} className="transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <Avatar className="mx-auto mb-4 h-16 w-16">
                      <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-1 font-semibold">{instructor.name}</h3>
                    <div className="mb-3 flex items-center justify-center text-sm">
                      <Star className="mr-1 h-4 w-4 text-amber-400" />
                      <span>{instructor.rating}</span>
                      <span className="ml-1 text-xs text-slate-500">({instructor.reviews} ulasan)</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Lihat Profil
                    </Button>
                  </CardContent>
                </Card>
              ))}
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-slate-200"></div>
                  <div className="mb-1 h-5 animate-pulse rounded bg-slate-200"></div>
                  <div className="mb-3 h-4 w-24 animate-pulse rounded bg-slate-200 mx-auto"></div>
                  <div className="h-9 w-full animate-pulse rounded bg-slate-200"></div>
                </CardContent>
              </Card>
            ))}
        </div>
      </motion.div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Cara Mengikuti Kelas Live</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">1. Pilih & Daftar</h3>
                <p className="text-sm text-slate-600">
                  Pilih kelas yang ingin Anda ikuti dan daftar untuk mendapatkan akses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">2. Gabung Kelas</h3>
                <p className="text-sm text-slate-600">
                  Pada waktu yang ditentukan, klik tombol "Gabung Sekarang" untuk masuk ke kelas live.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Play className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">3. Tonton Rekaman</h3>
                <p className="text-sm text-slate-600">
                  Jika Anda melewatkan kelas, Anda dapat menonton rekaman yang tersedia setelah kelas selesai.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
