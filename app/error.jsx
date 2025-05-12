"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error ke layanan analitik
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      <h2 className="mb-2 text-2xl font-semibold">Terjadi Kesalahan</h2>
      <p className="mb-6 max-w-md text-slate-600">
        Maaf, terjadi kesalahan saat memuat halaman ini. Tim kami telah diberitahu dan sedang bekerja untuk
        memperbaikinya.
      </p>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Button onClick={() => reset()}>Coba Lagi</Button>
        <Link href="/">
          <Button variant="outline">Kembali ke Beranda</Button>
        </Link>
      </div>
    </div>
  )
}
