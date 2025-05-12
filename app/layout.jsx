import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartEdu - Platform Bimbingan Belajar Online",
  description:
    "Platform bimbingan belajar online interaktif untuk meningkatkan pengalaman belajar Anda",
  generator: "maaulln-project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 text-slate-700 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
