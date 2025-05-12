"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function LandingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="bg-gradient-to-r from-primary/90 to-secondary/90 py-20">
      <div className="container-custom" ref={ref}>
        <div className="relative overflow-hidden rounded-2xl bg-white/10 p-2 backdrop-blur-sm">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
          
          <div className="relative rounded-xl bg-white/10 px-6 py-16 backdrop-blur-sm md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Siap Untuk Memulai Perjalanan Belajar Anda?
              </h2>
              <p className="mb-10 text-lg text-white/90">
                Bergabunglah dengan ribuan pelajar yang telah meningkatkan kemampuan mereka dengan platform pembelajaran interaktif kami.
              </p>
              
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href="/register">
                  <Button size="lg" className="group bg-white px-6 py-3 text-base font-medium text-primary shadow-md transition-all hover:bg-gray-100">
                    Mulai Gratis
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/materi">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/20"
                  >
                    Jelajahi Materi
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}