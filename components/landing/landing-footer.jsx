"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Fitur", href: "/fitur" },
      { label: "Harga", href: "/harga" },
      { label: "Testimoni", href: "/testimoni" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Materi",
    links: [
      { label: "Matematika", href: "/materi/matematika" },
      { label: "Fisika", href: "/materi/fisika" },
      { label: "Kimia", href: "/materi/kimia" },
      { label: "Biologi", href: "/materi/biologi" },
      { label: "Bahasa Inggris", href: "/materi/bahasa-inggris" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Tim", href: "/tim" },
      { label: "Karir", href: "/karir" },
      { label: "Blog", href: "/blog" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Kebijakan Cookie", href: "/kebijakan-cookie" },
      { label: "Lisensi", href: "/lisensi" },
    ],
  },
];

const socialLinks = [
  {
    icon: <Facebook className="h-5 w-5" />,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

const contactInfo = [
  { icon: <Mail className="h-5 w-5" />, content: "smartedu@gmail.com" },
  { icon: <Phone className="h-5 w-5" />, content: "+62 812 3456 7890" },
  {
    icon: <MapPin className="h-5 w-5" />,
    content: "Jl. Pendidikan No. 123, Lamongan, Indonesia",
  },
];

const FooterColumn = ({ title, links }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="mb-4 text-lg font-semibold text-gray-100">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-gray-300 transition-colors hover:text-white hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function LandingFooter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center">
                <div className="mr-2 h-10 w-10 overflow-hidden rounded-lg bg-primary">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="SmartEdu Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">SmartEdu</span>
              </div>
            </Link>

            <p className="mb-6 max-w-md text-gray-400">
              Platform bimbingan belajar online yang dirancang untuk
              meningkatkan pengalaman belajar dengan konten interaktif,
              visualisasi, dan pendekatan personal.
            </p>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-100">
                Hubungi Kami
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-3 text-primary">{item.icon}</div>
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-primary hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-4">
            {footerLinks.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SmartEdu. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/kebijakan-privasi"
                className="text-sm text-gray-500 hover:text-gray-300"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="text-sm text-gray-500 hover:text-gray-300"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-500 hover:text-gray-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
