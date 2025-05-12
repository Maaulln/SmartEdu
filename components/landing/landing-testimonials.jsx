"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Platform ini benar-benar mengubah cara saya belajar. Materi yang interaktif dan visualisasi yang jelas membuat konsep-konsep sulit menjadi mudah dipahami.",
    author: "Andi Pratama",
    role: "Mahasiswa Teknik",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content: "Saya sangat terkesan dengan kualitas materi dan dukungan dari para pengajar. Forum diskusi sangat membantu ketika saya menghadapi kesulitan dalam memahami topik tertentu.",
    author: "Budi Santoso",
    role: "Profesional IT",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content: "Fitur jadwal belajar dan pengingat sangat membantu saya tetap konsisten dalam belajar. Hasilnya, nilai saya meningkat signifikan dalam semester ini!",
    author: "Citra Dewi",
    role: "Pelajar SMA",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    content: "Sebagai orang tua, saya senang anak saya menggunakan platform ini. Saya bisa memantau perkembangannya dan melihat bagaimana dia terlibat aktif dalam proses belajar.",
    author: "Dian Kusuma",
    role: "Orang Tua Murid",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function LandingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container-custom" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Testimoni Pengguna
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Apa Kata Mereka Tentang{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Platform Kami
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Dengarkan pengalaman dari para pengguna yang telah merasakan manfaat belajar
            dengan platform kami.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-white p-1 shadow-xl">
            <div className="relative h-full rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12">
              <div className="absolute right-8 top-8 h-20 w-20 text-primary/10 md:h-24 md:w-24">
                <Quote className="h-full w-full" />
              </div>
              
              <div className="relative z-10">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <p className="mb-8 text-xl leading-relaxed text-gray-700 md:text-2xl">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                      <Image
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
                      <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={testimonialVariants}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          {[
            { label: "Pengguna Aktif", value: "10,000+" },
            { label: "Rating Rata-rata", value: "4.8/5" },
            { label: "Tingkat Kelulusan", value: "92%" },
            { label: "Kepuasan Pengguna", value: "96%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialVariants}
              className="rounded-xl bg-white p-6 text-center shadow-md"
            >
              <p className="mb-2 text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}