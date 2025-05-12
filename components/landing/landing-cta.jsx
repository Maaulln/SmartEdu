"use client"

import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function LandingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-600 px-6 py-16 text-white shadow-xl md:px-16">
          {/* Background decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Siap Untuk Meningkatkan Pengalaman Belajar Anda?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Bergabunglah dengan ribuan pelajar yang telah merasakan manfaat dari platform belajar interaktif kami.
              Daftar sekarang dan mulai perjalanan belajar yang menyenangkan!
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/register">
                <Button size="lg" className="group bg-white text-primary hover:bg-white/90">
                  Daftar Sekarang
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/materi">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Jelajahi Materi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
