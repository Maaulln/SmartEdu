"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { BookOpen, BarChart, Users, MessageSquare, Award, Clock, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Materi Interaktif",
    description: "Pelajari konsep dengan visualisasi dan simulasi interaktif yang memudahkan pemahaman.",
  },
  {
    icon: BarChart,
    title: "Analisis Kemajuan",
    description: "Pantau perkembangan belajar dengan analisis data dan visualisasi statistik yang komprehensif.",
  },
  {
    icon: Users,
    title: "Belajar Kolaboratif",
    description: "Diskusikan materi dengan teman dan tutor dalam forum diskusi yang terintegrasi.",
  },
  {
    icon: MessageSquare,
    title: "Konsultasi Langsung",
    description: "Tanyakan langsung kepada tutor ahli melalui fitur chat dan video call.",
  },
  {
    icon: Award,
    title: "Sertifikasi Keahlian",
    description: "Dapatkan sertifikat keahlian setelah menyelesaikan kursus dan ujian.",
  },
  {
    icon: Clock,
    title: "Belajar Fleksibel",
    description: "Akses materi kapan saja dan di mana saja sesuai dengan jadwal Anda.",
  },
  {
    icon: Zap,
    title: "Latihan Adaptif",
    description: "Dapatkan soal latihan yang disesuaikan dengan tingkat kemampuan Anda.",
  },
  {
    icon: Shield,
    title: "Lingkungan Aman",
    description: "Belajar dalam platform yang aman dan bebas dari konten yang tidak pantas.",
  },
]

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="feature-card"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  )
}

export function LandingFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 md:py-32">
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
          <h2 className="mb-4">Fitur Unggulan Platform Kami</h2>
          <p className="text-lg text-slate-600">
            Kami menyediakan berbagai fitur inovatif untuk membantu Anda belajar dengan lebih efektif, interaktif, dan
            menyenangkan.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
