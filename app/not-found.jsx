import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
      <p className="mb-8 max-w-md text-slate-600">
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan, dihapus, atau URL yang
        Anda masukkan salah.
      </p>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <Link href="/">
          <Button>Kembali ke Beranda</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline">Ke Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
