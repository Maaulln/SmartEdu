"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/app/providers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight } from "lucide-react"
import { DashboardWelcome } from "@/components/dashboard/dashboard-welcome"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { DashboardChart } from "@/components/dashboard/dashboard-chart"
import { DashboardRecentMaterials } from "@/components/dashboard/dashboard-recent-materials"
import { DashboardUpcomingEvents } from "@/components/dashboard/dashboard-upcoming-events"
import { useStore } from "@/lib/store"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  // Mengambil data dari store
  const materials = useStore((state) => state.materials)
  const events = useStore((state) => state.events)
  const userStats = useStore((state) => state.userStats)

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Mendapatkan materi terbaru
  const getRecentMaterials = () => {
    return materials
      .filter((material) => material.progress > 0)
      .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
      .slice(0, 4)
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Memuat data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <DashboardWelcome user={user} />

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Ikhtisar</TabsTrigger>
          <TabsTrigger value="progress">Kemajuan</TabsTrigger>
          <TabsTrigger value="schedule">Jadwal</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <DashboardStats stats={user?.progress || {}} />

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Kemajuan Belajar</CardTitle>
                <CardDescription>Progres belajar mingguan Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <DashboardChart data={userStats.progressData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">Materi Terakhir</CardTitle>
                  <CardDescription>Materi yang baru saja Anda pelajari</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 text-xs">
                  Lihat Semua <ChevronRight className="h-3 w-3" />
                </Button>
              </CardHeader>
              <CardContent>
                <DashboardRecentMaterials materials={getRecentMaterials()} />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg">Jadwal Mendatang</CardTitle>
                <CardDescription>Kegiatan yang akan datang</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                Lihat Kalender <Calendar className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent>
              <DashboardUpcomingEvents events={events} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Kemajuan Belajar</CardTitle>
              <CardDescription>Pantau perkembangan belajar Anda secara detail</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Konten tab kemajuan belajar akan ditampilkan di sini.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Jadwal Belajar</CardTitle>
              <CardDescription>Lihat dan atur jadwal belajar Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Konten tab jadwal belajar akan ditampilkan di sini.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
