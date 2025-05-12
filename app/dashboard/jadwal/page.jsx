"use client"

import { useState, useEffect } from "react"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  BookOpen,
  GraduationCap,
  Video,
  Users,
  Bell,
  Check,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Data dummy untuk jadwal
const scheduleData = [
  {
    id: 1,
    title: "Ujian Matematika",
    description: "Ujian tengah semester untuk materi Aljabar Linear",
    date: "2025-05-15",
    time: "09:00 - 11:00",
    type: "exam",
    category: "Matematika",
    location: "Online",
    reminder: true,
  },
  {
    id: 2,
    title: "Kelas Live: Fisika Kuantum",
    description: "Pengenalan konsep dasar fisika kuantum dan fenomena-fenomena menarik di dalamnya",
    date: "2025-05-16",
    time: "19:00 - 21:00",
    type: "live",
    category: "Fisika",
    location: "Online",
    reminder: true,
  },
  {
    id: 3,
    title: "Deadline Tugas Esai",
    description: "Pengumpulan tugas esai akademik untuk mata pelajaran Bahasa Inggris",
    date: "2025-05-18",
    time: "23:59",
    type: "deadline",
    category: "Bahasa Inggris",
    location: "-",
    reminder: true,
  },
  {
    id: 4,
    title: "Diskusi Kelompok: Kimia Organik",
    description: "Diskusi kelompok tentang reaksi adisi dalam kimia organik",
    date: "2025-05-20",
    time: "13:00 - 14:30",
    type: "discussion",
    category: "Kimia",
    location: "Online",
    reminder: false,
  },
  {
    id: 5,
    title: "Webinar: Machine Learning",
    description: "Webinar tentang penerapan machine learning dalam kehidupan sehari-hari",
    date: "2025-05-22",
    time: "15:00 - 17:00",
    type: "webinar",
    category: "Komputer",
    location: "Online",
    reminder: true,
  },
  {
    id: 6,
    title: "Kuis Biologi Molekuler",
    description: "Kuis tentang DNA dan RNA dalam sistem biologis",
    date: "2025-05-25",
    time: "10:00 - 11:00",
    type: "quiz",
    category: "Biologi",
    location: "Online",
    reminder: false,
  },
  {
    id: 7,
    title: "Konsultasi dengan Tutor",
    description: "Sesi konsultasi pribadi dengan tutor mata pelajaran Matematika",
    date: "2025-05-27",
    time: "16:00 - 16:30",
    type: "consultation",
    category: "Matematika",
    location: "Online",
    reminder: true,
  },
  {
    id: 8,
    title: "Praktikum Fisika",
    description: "Praktikum virtual tentang hukum Newton dan aplikasinya",
    date: "2025-05-29",
    time: "14:00 - 16:00",
    type: "practicum",
    category: "Fisika",
    location: "Online",
    reminder: true,
  },
]

// Helper function untuk mendapatkan ikon berdasarkan tipe jadwal
const getEventIcon = (type) => {
  switch (type) {
    case "exam":
      return <BookOpen className="h-4 w-4" />
    case "live":
      return <Video className="h-4 w-4" />
    case "deadline":
      return <Clock className="h-4 w-4" />
    case "discussion":
      return <Users className="h-4 w-4" />
    case "webinar":
      return <Video className="h-4 w-4" />
    case "quiz":
      return <GraduationCap className="h-4 w-4" />
    case "consultation":
      return <Users className="h-4 w-4" />
    case "practicum":
      return <BookOpen className="h-4 w-4" />
    default:
      return <CalendarIcon className="h-4 w-4" />
  }
}

// Helper function untuk mendapatkan warna berdasarkan tipe jadwal
const getEventColor = (type) => {
  switch (type) {
    case "exam":
      return "bg-red-100 text-red-600"
    case "live":
      return "bg-blue-100 text-blue-600"
    case "deadline":
      return "bg-amber-100 text-amber-600"
    case "discussion":
      return "bg-green-100 text-green-600"
    case "webinar":
      return "bg-purple-100 text-purple-600"
    case "quiz":
      return "bg-orange-100 text-orange-600"
    case "consultation":
      return "bg-indigo-100 text-indigo-600"
    case "practicum":
      return "bg-teal-100 text-teal-600"
    default:
      return "bg-slate-100 text-slate-600"
  }
}

// Helper function untuk mendapatkan nama bulan
const getMonthName = (month) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]
  return months[month]
}

// Helper function untuk mendapatkan nama hari
const getDayName = (day) => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  return days[day]
}

// Helper function untuk format tanggal
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return "Tanggal tidak valid"
    }
    return `${getDayName(date.getDay())}, ${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`
  } catch (error) {
    console.error("Error formatting date:", error)
    return "Tanggal tidak valid"
  }
}

// Komponen untuk menampilkan jadwal dalam tampilan daftar
function ScheduleListView({ schedules, toggleReminder }) {
  if (!schedules || schedules.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
        <CalendarIcon className="mb-4 h-12 w-12 text-slate-300" />
        <h3 className="text-lg font-medium">Tidak ada jadwal ditemukan</h3>
        <p className="mt-2 text-sm text-slate-500">Jadwal Anda kosong</p>
      </div>
    )
  }

  // Mengelompokkan jadwal berdasarkan tanggal
  const groupedSchedules = schedules.reduce((groups, schedule) => {
    const date = schedule.date
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(schedule)
    return groups
  }, {})

  // Mengurutkan tanggal
  const sortedDates = Object.keys(groupedSchedules).sort()

  return (
    <div className="space-y-6">
      {sortedDates.map((date) => (
        <div key={date}>
          <h3 className="mb-3 font-semibold">{formatDate(date)}</h3>
          <div className="space-y-3">
            {groupedSchedules[date].map((schedule) => (
              <Card key={schedule.id} className="transition-all hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full ${getEventColor(
                          schedule.type,
                        )}`}
                      >
                        {getEventIcon(schedule.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{schedule.title}</h4>
                        <p className="text-sm text-slate-600">{schedule.description}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3.5 w-3.5" />
                            <span>{schedule.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline">{schedule.category}</Badge>
                          </div>
                          {schedule.location !== "-" && (
                            <div className="flex items-center">
                              <span>{schedule.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={schedule.reminder ? "text-primary" : "text-slate-400"}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleReminder(schedule.id)
                      }}
                      title={schedule.reminder ? "Nonaktifkan pengingat" : "Aktifkan pengingat"}
                    >
                      <Bell className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// Komponen untuk menampilkan jadwal dalam tampilan kalender
function ScheduleCalendarView({ schedules, currentDate, setCurrentDate, toggleReminder }) {
  if (!currentDate) {
    currentDate = new Date()
  }

  // Mendapatkan tanggal awal dan akhir bulan
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

  // Mendapatkan hari pertama dari bulan (0 = Minggu, 1 = Senin, dst)
  const firstDayOfWeek = firstDayOfMonth.getDay()

  // Mendapatkan jumlah hari dalam bulan
  const daysInMonth = lastDayOfMonth.getDate()

  // Membuat array untuk menampilkan kalender
  const calendarDays = []

  // Menambahkan hari-hari dari bulan sebelumnya
  const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthLastDay - i,
      currentMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthLastDay - i),
    })
  }

  // Menambahkan hari-hari dari bulan saat ini
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      currentMonth: true,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i),
    })
  }

  // Menambahkan hari-hari dari bulan berikutnya
  const remainingDays = 42 - calendarDays.length // 6 baris x 7 hari
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      currentMonth: false,
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i),
    })
  }

  // Mendapatkan jadwal untuk tanggal tertentu
  const getSchedulesForDate = (date) => {
    if (!schedules || !date) return []

    try {
      const dateString = date.toISOString().split("T")[0]
      return schedules.filter((schedule) => schedule.date === dateString) || []
    } catch (error) {
      console.error("Error getting schedules for date:", error)
      return []
    }
  }

  // Navigasi bulan
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const today = new Date()
  const isToday = (date) => {
    if (!date) return false

    try {
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      )
    } catch (error) {
      console.error("Error checking if date is today:", error)
      return false
    }
  }

  return (
    <div className="space-y-4">
      {/* Header kalender */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
        </h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Grid kalender */}
      <div className="rounded-lg border bg-white">
        {/* Header hari */}
        <div className="grid grid-cols-7 border-b bg-slate-50 text-center font-medium">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div key={day} className="p-2">
              {day}
            </div>
          ))}
        </div>

        {/* Grid tanggal */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => {
            const schedulesForDay = getSchedulesForDate(day.date)
            return (
              <div
                key={index}
                className={`min-h-24 border p-1 ${
                  day.currentMonth ? "bg-white" : "bg-slate-50 text-slate-400"
                } ${isToday(day.date) ? "bg-blue-50" : ""}`}
              >
                <div className="flex justify-between p-1">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-sm ${
                      isToday(day.date) ? "bg-primary text-white" : ""
                    }`}
                  >
                    {day.day}
                  </span>
                  {schedulesForDay.length > 0 && (
                    <Badge className="bg-primary text-white">{schedulesForDay.length}</Badge>
                  )}
                </div>
                <div className="mt-1 space-y-1">
                  {schedulesForDay.slice(0, 3).map((schedule) => (
                    <div
                      key={schedule.id}
                      className={`rounded px-1 py-0.5 text-xs ${getEventColor(schedule.type)}`}
                      title={schedule.title}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{schedule.title}</span>
                        <button
                          className={`ml-1 ${schedule.reminder ? "text-primary" : "text-slate-400"}`}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleReminder(schedule.id)
                          }}
                        >
                          <Bell className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  {schedulesForDay.length > 3 && (
                    <div className="text-center text-xs text-slate-500">+{schedulesForDay.length - 3} lainnya</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Komponen untuk menampilkan jadwal dalam tampilan agenda
function ScheduleAgendaView({ schedules, toggleReminder }) {
  if (!schedules || schedules.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
        <CalendarIcon className="mb-4 h-12 w-12 text-slate-300" />
        <h3 className="text-lg font-medium">Tidak ada jadwal ditemukan</h3>
        <p className="mt-2 text-sm text-slate-500">Jadwal Anda kosong</p>
      </div>
    )
  }

  // Mengelompokkan jadwal berdasarkan tipe
  const groupedByType = schedules.reduce((groups, schedule) => {
    const type = schedule.type
    if (!groups[type]) {
      groups[type] = []
    }
    groups[type].push(schedule)
    return groups
  }, {})

  // Mengurutkan tipe
  const types = Object.keys(groupedByType).sort()

  return (
    <div className="space-y-6">
      {types.map((type) => (
        <Card key={type}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <div className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${getEventColor(type)}`}>
                {getEventIcon(type)}
              </div>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {groupedByType[type].map((schedule) => (
                <div key={schedule.id} className="flex items-start justify-between rounded-lg border p-3">
                  <div>
                    <h4 className="font-medium">{schedule.title}</h4>
                    <p className="text-sm text-slate-600">{schedule.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-3.5 w-3.5" />
                        <span>{formatDate(schedule.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3.5 w-3.5" />
                        <span>{schedule.time}</span>
                      </div>
                      <Badge variant="outline">{schedule.category}</Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={schedule.reminder ? "text-primary" : "text-slate-400"}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleReminder(schedule.id)
                    }}
                    title={schedule.reminder ? "Nonaktifkan pengingat" : "Aktifkan pengingat"}
                  >
                    <Bell className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function JadwalPage() {
  const [activeTab, setActiveTab] = useState("list")
  const [schedules, setSchedules] = useState(scheduleData)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [isLoading, setIsLoading] = useState(true)

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Toggle reminder
  const toggleReminder = (id) => {
    try {
      setSchedules((prev) =>
        prev.map((schedule) => {
          if (schedule.id === id) {
            return { ...schedule, reminder: !schedule.reminder }
          }
          return schedule
        }),
      )
    } catch (error) {
      console.error("Error toggling reminder:", error)
    }
  }

  // Filter jadwal berdasarkan kategori
  const filteredSchedules =
    selectedCategory === "Semua" ? schedules : schedules.filter((schedule) => schedule.category === selectedCategory)

  // Mendapatkan kategori unik
  const categories = ["Semua", ...new Set(schedules.map((schedule) => schedule.category))]

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold md:text-3xl">Jadwal</h1>
            <p className="mt-2 text-blue-100">
              Kelola jadwal belajar, ujian, dan kegiatan lainnya untuk mengoptimalkan waktu belajar Anda.
            </p>
          </div>
          <Button className="bg-white text-primary hover:bg-white/90">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Jadwal
          </Button>
        </div>
      </div>

      {/* Filter dan tampilan */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-3 sm:w-auto">
            <TabsTrigger value="list">Daftar</TabsTrigger>
            <TabsTrigger value="calendar">Kalender</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Konten jadwal */}
      <div className="min-h-[400px]">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
              <p>Memuat jadwal...</p>
            </div>
          </div>
        ) : (
          <>
            {activeTab === "list" && <ScheduleListView schedules={filteredSchedules} toggleReminder={toggleReminder} />}
            {activeTab === "calendar" && (
              <ScheduleCalendarView
                schedules={filteredSchedules}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                toggleReminder={toggleReminder}
              />
            )}
            {activeTab === "agenda" && (
              <ScheduleAgendaView schedules={filteredSchedules} toggleReminder={toggleReminder} />
            )}
          </>
        )}
      </div>

      {/* Pengingat */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Pengingat Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            {schedules.filter((s) => s.reminder).length > 0 ? (
              <div className="space-y-3">
                {schedules
                  .filter((s) => s.reminder)
                  .slice(0, 3)
                  .map((schedule) => (
                    <div key={schedule.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${getEventColor(schedule.type)}`}
                        >
                          {getEventIcon(schedule.type)}
                        </div>
                        <div>
                          <h4 className="font-medium">{schedule.title}</h4>
                          <div className="flex items-center text-xs text-slate-500">
                            <CalendarIcon className="mr-1 h-3 w-3" />
                            {formatDate(schedule.date)} • {schedule.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => toggleReminder(schedule.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-8">
                          <Check className="mr-1 h-3 w-3" />
                          Sudah
                        </Button>
                      </div>
                    </div>
                  ))}
                {schedules.filter((s) => s.reminder).length > 3 && (
                  <Button variant="outline" className="w-full">
                    Lihat Semua Pengingat ({schedules.filter((s) => s.reminder).length})
                  </Button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Bell className="mb-2 h-8 w-8 text-slate-300" />
                <h3 className="font-medium">Tidak Ada Pengingat Aktif</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Aktifkan pengingat untuk jadwal Anda dengan mengklik ikon lonceng.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
