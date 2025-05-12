"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Platform ini sangat membantu saya dalam memahami konsep-konsep yang sulit. Visualisasi interaktifnya membuat belajar jadi lebih menyenangkan!",
    name: "Budi Santoso",
    role: "Siswa SMA",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Sebagai orang tua, saya sangat senang melihat anak saya antusias belajar dengan platform ini. Fitur pelacakan kemajuan juga membantu saya memantau perkembangannya.",
    name: "Siti Rahayu",
    role: "Orang Tua Siswa",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "Saya berhasil meningkatkan nilai ujian saya setelah belajar di platform ini. Materi yang disajikan sangat komprehensif dan mudah dipahami.",
    name: "Ahmad Rizki",
    role: "Mahasiswa",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    content:
      "Sebagai guru, saya merekomendasikan platform ini kepada siswa-siswa saya. Konten interaktifnya sangat membantu dalam menjelaskan konsep-konsep yang kompleks.",
    name: "Dewi Lestari",
    role: "Guru Matematika",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function LandingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4">Apa Kata Mereka?</h2>
          <p className="text-lg text-slate-600">
            Dengarkan pengalaman pengguna kami yang telah merasakan manfaat dari platform belajar interaktif ini.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-slate-200" />

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <blockquote className="mb-8 text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
                "{testimonials[activeIndex].content}"
              </blockquote>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={prevTestimonial}
                className="rounded-full p-2 transition-colors hover:bg-slate-100"
                aria-label="Testimonial sebelumnya"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-slate-300"}`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full p-2 transition-colors hover:bg-slate-100"
                aria-label="Testimonial selanjutnya"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
