"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  HelpCircle,
  Search,
  ChevronRight,
  Book,
  FileQuestion,
  Settings,
  Users,
  MessageSquare,
  Award,
  Mail,
  Phone,
  Video,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"

// Helper function to get icon component by name
const getIconByName = (iconName) => {
  const icons = {
    Book,
    FileQuestion,
    Settings,
    Users,
    MessageSquare,
    Award,
    Mail,
    Phone,
    Video,
  }

  return icons[iconName] || HelpCircle
}

export default function BantuanPage() {
  const [activeTab, setActiveTab] = useState("panduan")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Mengambil data dari store
  const helpData = useStore((state) => state.helpData) || {
    categories: [],
    faqs: [],
    popularArticles: [],
    contactMethods: [],
  }

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (!query || query.trim() === "") {
      setFilteredFaqs([])
      return
    }

    // Add error handling for when helpData or helpData.faqs is undefined
    if (!helpData || !helpData.faqs) {
      setFilteredFaqs([])
      return
    }

    const filtered = helpData.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredFaqs(filtered)
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
          <h1 className="text-2xl font-bold md:text-3xl">Pusat Bantuan</h1>
          <p className="mt-2 text-blue-100">
            Temukan jawaban untuk pertanyaan Anda dan dapatkan bantuan untuk menggunakan platform pembelajaran kami.
          </p>
        </div>
      </motion.div>

      {/* Search section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto max-w-2xl"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <Input
            type="search"
            placeholder="Cari bantuan..."
            value={searchQuery}
            onChange={handleSearch}
            className="py-6 pl-10 text-lg"
          />
        </div>

        {/* Search results */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 rounded-lg border bg-white p-4 shadow-sm"
          >
            <h3 className="mb-4 font-medium">Hasil Pencarian</h3>
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="rounded-lg border p-3 hover:border-primary/50 hover:bg-slate-50">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{faq.question}</h4>
                      <Badge>{faq.category}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-8 text-center">
                <HelpCircle className="mb-2 h-8 w-8 text-slate-300" />
                <h3 className="font-medium">Tidak ada hasil ditemukan</h3>
                <p className="mt-1 text-sm text-slate-500">Coba gunakan kata kunci yang berbeda</p>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="panduan">Panduan</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="kontak">Kontak</TabsTrigger>
        </TabsList>

        {/* Panduan tab */}
        <TabsContent value="panduan" className="mt-6">
          <div className="space-y-8">
            {/* Categories */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-40 animate-pulse rounded-lg border bg-slate-100"></div>
                  ))
                : helpData.categories.map((category) => {
                    const IconComponent = getIconByName(category.icon)
                    return (
                      <motion.div key={category.id} variants={item}>
                        <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                          <CardHeader className="pb-2">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <CardTitle>{category.title}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <Badge variant="outline">{category.articles} artikel</Badge>
                          </CardContent>
                          <CardFooter>
                            <Link href={`/dashboard/bantuan/kategori/${category.id}`} className="w-full">
                              <Button variant="outline" className="w-full justify-between">
                                <span>Lihat Artikel</span>
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    )
                  })}
            </motion.div>

            {/* Popular articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="mb-4 text-xl font-semibold">Artikel Populer</h2>
              <div className="rounded-lg border bg-white">
                {isLoading
                  ? Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="border-b p-4 last:border-0 last:rounded-b-lg first:rounded-t-lg">
                        <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200"></div>
                        <div className="mt-2 flex justify-between">
                          <div className="h-4 w-1/4 animate-pulse rounded bg-slate-200"></div>
                          <div className="h-4 w-1/6 animate-pulse rounded bg-slate-200"></div>
                        </div>
                      </div>
                    ))
                  : helpData.popularArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/dashboard/bantuan/artikel/${article.id}`}
                        className="flex items-center justify-between border-b p-4 transition-colors hover:bg-slate-50 last:border-0"
                      >
                        <div>
                          <h3 className="font-medium hover:text-primary">{article.title}</h3>
                          <Badge variant="outline" className="mt-1">
                            {article.category}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <Eye className="mr-1 h-4 w-4" />
                          {article.views}
                        </div>
                      </Link>
                    ))}
              </div>
            </motion.div>
          </div>
        </TabsContent>

        {/* FAQ tab */}
        <TabsContent value="faq" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* FAQ categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Kategori FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {isLoading
                      ? Array.from({ length: 6 }).map((_, index) => (
                          <div key={index} className="h-8 w-full animate-pulse rounded bg-slate-200"></div>
                        ))
                      : [...new Set(helpData.faqs.map((faq) => faq.category))].map((category) => (
                          <div
                            key={category}
                            className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary/50 hover:bg-slate-50"
                            onClick={() => setSearchQuery(category)}
                          >
                            <span className="font-medium">{category}</span>
                            <Badge>{helpData.faqs.filter((faq) => faq.category === category).length} pertanyaan</Badge>
                          </div>
                        ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular questions */}
              <Card>
                <CardHeader>
                  <CardTitle>Pertanyaan Populer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {isLoading
                      ? Array.from({ length: 5 }).map((_, index) => (
                          <div key={index} className="h-8 w-full animate-pulse rounded bg-slate-200"></div>
                        ))
                      : helpData.faqs.slice(0, 5).map((faq) => (
                          <div
                            key={faq.id}
                            className="flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary/50 hover:bg-slate-50"
                            onClick={() => setSearchQuery(faq.question)}
                          >
                            <span className="font-medium">{faq.question}</span>
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                          </div>
                        ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Pertanyaan yang Sering Diajukan</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {isLoading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>
                            <div className="h-6 w-full animate-pulse rounded bg-slate-200"></div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="h-20 w-full animate-pulse rounded bg-slate-200"></div>
                          </AccordionContent>
                        </AccordionItem>
                      ))
                    : helpData.faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="pt-2">
                              <p className="text-slate-600">{faq.answer}</p>
                              <Badge variant="outline" className="mt-4">
                                {faq.category}
                              </Badge>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Kontak tab */}
        <TabsContent value="kontak" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
                <CardDescription>
                  Pilih metode kontak yang paling nyaman untuk Anda. Tim dukungan kami siap membantu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="h-40 animate-pulse rounded-lg border bg-slate-100"></div>
                      ))
                    : helpData.contactMethods.map((method) => {
                        const IconComponent = getIconByName(method.icon)
                        return (
                          <Card
                            key={method.id}
                            className="border-2 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                          >
                            <CardContent className="pt-6">
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <h3 className="text-lg font-semibold">{method.title}</h3>
                              <p className="mt-1 text-sm text-slate-600">{method.description}</p>
                              {method.value && (
                                <div className="mt-4 rounded-md bg-slate-50 p-2 text-center font-medium">
                                  {method.value}
                                </div>
                              )}
                              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                <Badge variant="outline">Respon: {method.responseTime}</Badge>
                                {method.availableTime && (
                                  <Badge variant="outline">Tersedia: {method.availableTime}</Badge>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                </div>
              </CardContent>
            </Card>

            {/* Contact form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini untuk mengirim pesan kepada tim dukungan kami.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama Lengkap
                      </label>
                      <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Masukkan email Anda" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subjek
                    </label>
                    <Input id="subject" placeholder="Masukkan subjek pesan" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  <Button className="w-full sm:w-auto">Kirim Pesan</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
