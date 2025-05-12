"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowLeft,
  Clock,
  Star,
  BookOpen,
  Award,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  Share,
  Bookmark,
  ThumbsUp,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useStore } from "@/lib/store"

export default function MaterialDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("konten")
  const [isLoading, setIsLoading] = useState(true)
  const [expandedSections, setExpandedSections] = useState({})

  // Mengambil data dari store
  const getMaterialById = useStore((state) => state.getMaterialById)
  const updateMaterialProgress = useStore((state) => state.updateMaterialProgress)
  const material = getMaterialById(params.id)

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Jika material tidak ditemukan
  if (!isLoading && !material) {
    return (
      <div className="flex h-full flex-col items-center justify-center py-20 text-center">
        <BookOpen className="mb-4 h-16 w-16 text-slate-300" />
        <h1 className="mb-2 text-2xl font-bold">Materi Tidak Ditemukan</h1>
        <p className="mb-6 text-slate-500">Materi yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Button onClick={() => router.push("/dashboard/materi")}>Kembali ke Katalog Materi</Button>
      </div>
    )
  }

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  // Mark section as completed
  const markSectionCompleted = (sectionId) => {
    if (!material) return

    // Update section completion status
    const updatedSections = material.sections.map((section) =>
      section.id === sectionId ? { ...section, completed: true } : section,
    )

    // Calculate new progress percentage
    const completedSections = updatedSections.filter((section) => section.completed).length
    const totalSections = updatedSections.length
    const newProgress = Math.round((completedSections / totalSections) * 100)

    // Update material progress in store
    updateMaterialProgress(material.id, newProgress)
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Memuat materi...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Back button */}
      <div>
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>
      </div>

      {/* Material header */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="mb-4 text-3xl font-bold">{material.title}</h1>
            <p className="mb-6 text-lg text-slate-600">{material.description}</p>

            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-slate-600">
                <Clock className="mr-2 h-4 w-4 text-slate-400" />
                {material.duration}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Star className="mr-2 h-4 w-4 text-amber-400" />
                <span>{material.rating}</span>
                <span className="ml-1 text-xs">({material.totalRatings} ulasan)</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <BookOpen className="mr-2 h-4 w-4 text-slate-400" />
                {material.category}
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Award className="mr-2 h-4 w-4 text-slate-400" />
                {material.level}
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {material.tags &&
                material.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
            </div>

            {/* Progress bar */}
            {material.progress > 0 && (
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium">Progres Belajar</span>
                  <span className="text-sm font-medium">{material.progress}%</span>
                </div>
                <Progress value={material.progress} className="h-2" />
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Lanjutkan Belajar</Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Unduh Materi
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Material image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[250px] overflow-hidden rounded-xl md:h-[300px]"
        >
          <Image
            src={material.image || "/placeholder.svg"}
            alt={material.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="konten">Konten Materi</TabsTrigger>
          <TabsTrigger value="diskusi">Diskusi</TabsTrigger>
          <TabsTrigger value="info">Informasi</TabsTrigger>
        </TabsList>

        {/* Konten tab */}
        <TabsContent value="konten" className="mt-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Sections list */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Daftar Materi</h2>
              {material.sections &&
                material.sections.map((section) => (
                  <Card key={section.id} className={section.completed ? "border-green-200 bg-green-50" : ""}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center">
                            {section.completed ? (
                              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                            ) : (
                              <div className="mr-2 h-5 w-5 rounded-full border-2 border-slate-300"></div>
                            )}
                            <h3 className="font-medium">{section.title}</h3>
                          </div>
                          <div className="ml-7 mt-1 text-sm text-slate-500">{section.duration}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => toggleSection(section.id)}
                        >
                          {expandedSections[section.id] ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      </div>

                      {expandedSections[section.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-7 mt-3"
                        >
                          <p className="mb-3 text-sm text-slate-600">
                            Klik tombol di bawah untuk memulai atau melanjutkan bagian ini.
                          </p>
                          <Button
                            size="sm"
                            variant={section.completed ? "outline" : "default"}
                            className="w-full"
                            onClick={() => !section.completed && markSectionCompleted(section.id)}
                          >
                            {section.completed ? "Lihat Kembali" : "Mulai Belajar"}
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* Content preview */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Pratinjau Materi</h2>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: material.content || "<p>Konten tidak tersedia</p>" }}
                  ></div>
                  <div className="mt-6 flex justify-center">
                    <Button>Mulai Belajar Sekarang</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Diskusi tab */}
        <TabsContent value="diskusi" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Diskusi Materi</h2>
                <Button>Ajukan Pertanyaan</Button>
              </div>

              {/* Form diskusi */}
              <div className="mb-6">
                <textarea
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tulis komentar atau pertanyaan Anda di sini..."
                  rows={3}
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <Button size="sm">Kirim Komentar</Button>
                </div>
              </div>

              {/* Daftar diskusi */}
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Ahmad Rizki</div>
                        <div className="text-xs text-slate-500">2 hari yang lalu</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    Bagaimana cara memahami konsep ini dengan lebih mudah? Saya masih kesulitan memahami bagian
                    transformasi linear.
                  </p>
                  <div className="mt-3 flex items-center space-x-4">
                    <button className="flex items-center text-xs text-slate-500 hover:text-primary">
                      <ThumbsUp className="mr-1 h-3.5 w-3.5" />
                      <span>12</span>
                    </button>
                    <button className="flex items-center text-xs text-slate-500 hover:text-primary">
                      <MessageSquare className="mr-1 h-3.5 w-3.5" />
                      <span>Balas</span>
                    </button>
                  </div>

                  {/* Balasan */}
                  <div className="mt-4 border-l-2 border-slate-200 pl-4">
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tutor" />
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium">Tutor Demo</span>
                            <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100" variant="secondary">
                              Tutor
                            </Badge>
                          </div>
                          <div className="text-xs text-slate-500">1 hari yang lalu</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Untuk memahami transformasi linear, cobalah untuk memvisualisasikannya sebagai fungsi yang
                      mempertahankan operasi penjumlahan dan perkalian skalar. Anda bisa membayangkannya sebagai
                      perubahan bentuk atau posisi vektor dengan tetap mempertahankan sifat-sifat dasarnya.
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <button className="flex items-center text-xs text-slate-500 hover:text-primary">
                        <ThumbsUp className="mr-1 h-3.5 w-3.5" />
                        <span>8</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button variant="outline">Lihat Semua Diskusi</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Info tab */}
        <TabsContent value="info" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Informasi Materi</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Tentang Penulis</h3>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={material.author?.name} />
                      <AvatarFallback>{material.author?.name?.charAt(0) || "A"}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{material.author?.name || "Penulis"}</div>
                      <div className="text-sm text-slate-500">Tutor</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Prasyarat</h3>
                  <ul className="list-inside list-disc space-y-1 text-slate-600">
                    <li>Pemahaman dasar matematika</li>
                    <li>Pengetahuan tentang aljabar dasar</li>
                    <li>Familiar dengan konsep vektor</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Yang Akan Anda Pelajari</h3>
                  <ul className="list-inside list-disc space-y-1 text-slate-600">
                    <li>Konsep dasar aljabar linear</li>
                    <li>Operasi vektor dan matriks</li>
                    <li>Transformasi linear dan aplikasinya</li>
                    <li>Sistem persamaan linear</li>
                    <li>Aplikasi aljabar linear dalam kehidupan nyata</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Terakhir Diperbarui</h3>
                  <p className="text-slate-600">
                    {new Date(material.lastUpdated).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related materials */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Materi Terkait</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for related materials */}
          <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Materi terkait"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold">Kalkulus Diferensial</h3>
                <p className="mb-3 line-clamp-2 text-sm text-slate-600">
                  Memahami konsep turunan dan aplikasinya dalam pemecahan masalah
                </p>
                <div className="flex items-center justify-between">
                  <Badge>Matematika</Badge>
                  <div className="flex items-center text-sm">
                    <Star className="mr-1 h-4 w-4 text-amber-400" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Materi terkait"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold">Geometri Analitik</h3>
                <p className="mb-3 line-clamp-2 text-sm text-slate-600">
                  Mempelajari geometri dengan pendekatan aljabar dan koordinat
                </p>
                <div className="flex items-center justify-between">
                  <Badge>Matematika</Badge>
                  <div className="flex items-center text-sm">
                    <Star className="mr-1 h-4 w-4 text-amber-400" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
            <CardContent className="p-0">
              <div className="relative h-40 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Materi terkait"
                  fill
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold">Persamaan Diferensial</h3>
                <p className="mb-3 line-clamp-2 text-sm text-slate-600">
                  Pengenalan persamaan diferensial dan metode penyelesaiannya
                </p>
                <div className="flex items-center justify-between">
                  <Badge>Matematika</Badge>
                  <div className="flex items-center text-sm">
                    <Star className="mr-1 h-4 w-4 text-amber-400" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
