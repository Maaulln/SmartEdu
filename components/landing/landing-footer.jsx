import Link from "next/link";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">SmartEdu</span>
            </Link>
            <p className="mb-6 max-w-md">
              Platform bimbingan belajar online interaktif untuk meningkatkan
              pengalaman belajar Anda dengan konten yang menarik dan pendekatan
              personal.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:bg-slate-800 hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:bg-slate-800 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:bg-slate-800 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition-colors hover:bg-slate-800 hover:text-primary"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/materi"
                  className="transition-colors hover:text-primary"
                >
                  Materi
                </Link>
              </li>
              <li>
                <Link
                  href="/kuis"
                  className="transition-colors hover:text-primary"
                >
                  Kuis
                </Link>
              </li>
              <li>
                <Link
                  href="/forum"
                  className="transition-colors hover:text-primary"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/bantuan"
                  className="transition-colors hover:text-primary"
                >
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Layanan</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/tentang"
                  className="transition-colors hover:text-primary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat"
                  className="transition-colors hover:text-primary"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="/privasi"
                  className="transition-colors hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/karir"
                  className="transition-colors hover:text-primary"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span>info@SmartEdu.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SmartEdu. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
