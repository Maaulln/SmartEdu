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
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container-custom relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              Platform Belajar Interaktif
            </div>
            <h1 className="mb-6 max-w-xl">
              Belajar Lebih Menyenangkan dengan{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Interaksi
              </span>{" "}
              dan{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Visualisasi
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-slate-600">
              Platform bimbingan belajar online yang dirancang untuk meningkatkan pengalaman belajar Anda dengan konten
              interaktif, visualisasi, dan pendekatan personal.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/register">
                <Button size="lg" className="group">
                  Mulai Belajar
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/materi">
                <Button variant="outline" size="lg">
                  Jelajahi Materi
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">500+ Materi</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10,000+ Pengguna</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Tersertifikasi</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ y, opacity }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full max-w-[500px]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Platform Belajar Interaktif"
                fill
                className="object-contain"
                priority
              />

              {/* Floating elements */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className="absolute -right-4 top-20 h-16 w-16 rounded-lg bg-secondary p-3 shadow-lg"
              >
                <BookOpen className="h-full w-full text-white" />
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className="absolute -left-4 top-40 h-16 w-16 rounded-lg bg-accent p-3 shadow-lg"
              >
                <Award className="h-full w-full text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-3xl"></div>
      </div>
    </section>
  )
}
