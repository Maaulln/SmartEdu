/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Pastikan routing berfungsi dengan benar
  async redirects() {
    return [
      {
        source: "/materi",
        destination: "/dashboard/materi",
        permanent: true,
      },
      {
        source: "/kuis",
        destination: "/dashboard/kuis",
        permanent: true,
      },
      {
        source: "/forum",
        destination: "/dashboard/forum",
        permanent: true,
      },
      {
        source: "/bantuan",
        destination: "/dashboard/bantuan",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
