"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { BookOpen, Video, MessageSquare, Calendar, Award, BarChart3 } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-full w-full" />,
    title: "Materi Interaktif",
    description: "Pelajari konsep dengan materi interaktif yang dirancang untuk meningkatkan pemahaman dan retensi.",
    color: "bg-blue-500",
  },
  {
    icon: <Video className="h-full w-full" />,
    title: "Kelas Live",
    description: "Ikuti kelas langsung dengan pengajar berpengalaman dan dapatkan jawaban real-time.",
    color: "bg-purple-500",
  },
  {
    icon: <MessageSquare className="h-full w-full" />,
    title: "Forum Diskusi",
    description: "Diskusikan materi dengan sesama pelajar dan pengajar untuk memperdalam pemahaman.",
    color: "bg-green-500",
  },
  {
    icon: <Calendar className="h-full w-full" />,
    title: "Jadwal Belajar",
    description: "Atur jadwal belajar sesuai kebutuhan dan dapatkan pengingat untuk konsistensi.",
    color: "bg-amber-500",
  },
  {
    icon: <Award className="h-full w-full" />,
    title: "Sertifikasi",
    description: "Dapatkan sertifikat resmi setelah menyelesaikan kursus untuk meningkatkan portofolio.",
    color: "bg-red-500",
  },
  {
    icon: <BarChart3 className="h-full w-full" />,
    title: "Analisis Kemajuan",
    description: "Pantau perkembangan belajar dengan analisis detail untuk meningkatkan efektivitas.",
    color: "bg-cyan-500",
  },
]

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex items-center space-x-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} p-2 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
      </div>
      <p className="text-gray-600">{feature.description}</p>
      
      <div className="absolute -bottom-1 -right-1 h-16 w-16 rounded-full bg-gradient-to-br from-transparent to-gray-100 opacity-70"></div>
    </motion.div>
  )
}

export function LandingFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
            Fitur Unggulan
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Tingkatkan Pengalaman Belajar Anda dengan Fitur{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Inovatif
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Platform kami menyediakan berbagai fitur yang dirancang untuk membuat proses belajar lebih efektif, 
            menyenangkan, dan sesuai dengan kebutuhan Anda.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}