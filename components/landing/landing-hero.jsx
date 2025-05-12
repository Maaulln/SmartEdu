"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, Award, Users } from "lucide-react"

export function LandingHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-blue-100 to-white py-24 md:py-36">
      <div className="container-custom relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm"
            >
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-blue-500"></span>
              Platform Belajar Interaktif
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-xl text-4xl font-bold tracking-tight md:text-5xl"
            >
              Belajar Lebih Menyenangkan dengan{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Interaksi
              </span>{" "}
              dan{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Visualisasi
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
            >
              Platform bimbingan belajar online yang dirancang untuk meningkatkan pengalaman belajar Anda dengan konten
              interaktif, visualisasi, dan pendekatan personal.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
            >
              <Link href="/register">
                <Button size="lg" className="text-white group px-6 py-3 text-base shadow-md transition-all hover:shadow-lg">
                  Mulai Belajar
                  <ChevronRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/materi">
                <Button variant="outline" size="lg" className="px-6 py-3 text-base border-2 transition-all hover:bg-blue-50">
                  Jelajahi Materi
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center rounded-full bg-white/80 px-4 py-2 shadow-sm">
                <BookOpen className="mr-3 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">500+ Materi</span>
              </div>
              <div className="flex items-center rounded-full bg-white/80 px-4 py-2 shadow-sm">
                <Users className="mr-3 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10,000+ Pengguna</span>
              </div>
              <div className="flex items-center rounded-full bg-white/80 px-4 py-2 shadow-sm">
                <Award className="mr-3 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Tersertifikasi</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y, opacity }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[450px] w-full max-w-[550px] rounded-2xl bg-white/50 p-4 shadow-xl backdrop-blur-sm">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Platform Belajar Interaktif"
                fill
                className="object-contain p-4"
                priority
              />

              {/* Floating elements */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className="absolute -right-6 top-20 h-20 w-20 rounded-2xl bg-secondary p-4 shadow-lg"
              >
                <BookOpen className="h-full w-full text-white" />
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className="absolute -left-6 top-40 h-20 w-20 rounded-2xl bg-accent p-4 shadow-lg"
              >
                <Award className="h-full w-full text-white" />
              </motion.div>
              
              <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [5, -5, 5], rotate: [0, 5, 0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
                className="absolute bottom-20 -right-4 h-16 w-16 rounded-full bg-primary p-3 shadow-lg"
              >
                <Users className="h-full w-full text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-200/30 blur-3xl"></div>
      </div>
    </section>
  )
}