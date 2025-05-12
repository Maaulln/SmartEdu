"use client"

import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SessionList({ sessions, onRemoveSession, onRemoveAllSessions }) {
  const { toast } = useToast()

  // Format date
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString()
    } catch (error) {
      return dateString
    }
  }

  // Handle remove session
  const handleRemoveSession = async (sessionId) => {
    const result = await onRemoveSession(sessionId)

    if (result.success) {
      toast({
        title: "Sesi dihapus",
        description: "Perangkat telah dikeluarkan dari akun Anda.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal menghapus sesi",
        description: result.error || "Terjadi kesalahan saat menghapus sesi.",
        variant: "destructive",
      })
    }
  }

  // Handle remove all sessions
  const handleRemoveAllSessions = async () => {
    const result = await onRemoveAllSessions()

    if (result.success) {
      toast({
        title: "Semua sesi dihapus",
        description: "Semua perangkat lain telah dikeluarkan dari akun Anda.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal menghapus sesi",
        description: result.error || "Terjadi kesalahan saat menghapus semua sesi.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div key={session.id} className="flex items-center justify-between rounded-lg border p-4">
          <div className="flex items-center space-x-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                session.isCurrent ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
              }`}
            >
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium">{session.device}</h4>
              <p className="text-sm text-slate-500">
                {session.deviceType} • {formatDate(session.lastActive)}
              </p>
            </div>
          </div>
          {session.isCurrent ? (
            <Button variant="outline" size="sm" disabled>
              Saat Ini
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={() => handleRemoveSession(session.id)}
            >
              Keluar
            </Button>
          )}
        </div>
      ))}

      <Button variant="outline" className="w-full" onClick={handleRemoveAllSessions}>
        Keluar dari Semua Perangkat
      </Button>
    </div>
  )
}
