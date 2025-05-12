"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers";
import { DashboardNavbar } from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Redirect to login if not authenticated and not loading
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Tampilkan loading state saat memeriksa autentikasi
  if (loading || !isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
          <p>Memuat...</p>
        </div>
      </div>
    );
  }

  // Jika sudah client-side tapi user belum login, tetap render layout
  // Router akan menangani redirect ke login
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <DashboardNavbar />
      <main className="w-full pt-16 lg:pt-16 px-4 md:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
