"use client"

import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export function NotificationSettings({ settings, onUpdate, onSave }) {
  const { toast } = useToast()

  // Handle toggle change
  const handleToggle = (key, checked) => {
    onUpdate({ ...settings, [key]: checked })
  }

  // Handle save
  const handleSave = async () => {
    const result = await onSave(settings)

    if (result.success) {
      toast({
        title: "Pengaturan notifikasi disimpan",
        description: "Preferensi notifikasi Anda telah diperbarui.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal menyimpan pengaturan",
        description: result.error || "Terjadi kesalahan saat menyimpan pengaturan notifikasi.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="email-notifications">Notifikasi Email</Label>
          <p className="text-sm text-slate-500">Terima notifikasi melalui email</p>
        </div>
        <Switch
          id="email-notifications"
          checked={settings.email}
          onCheckedChange={(checked) => handleToggle("email", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="push-notifications">Notifikasi Push</Label>
          <p className="text-sm text-slate-500">Terima notifikasi push di perangkat Anda</p>
        </div>
        <Switch
          id="push-notifications"
          checked={settings.push}
          onCheckedChange={(checked) => handleToggle("push", checked)}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="reminder-notifications">Pengingat Jadwal</Label>
          <p className="text-sm text-slate-500">Terima pengingat untuk jadwal dan tenggat waktu</p>
        </div>
        <Switch
          id="reminder-notifications"
          checked={settings.reminders}
          onCheckedChange={(checked) => handleToggle("reminders", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="update-notifications">Pembaruan Materi</Label>
          <p className="text-sm text-slate-500">Terima notifikasi saat ada materi baru</p>
        </div>
        <Switch
          id="update-notifications"
          checked={settings.updates}
          onCheckedChange={(checked) => handleToggle("updates", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing-notifications">Pemasaran & Promosi</Label>
          <p className="text-sm text-slate-500">Terima informasi tentang penawaran dan promosi</p>
        </div>
        <Switch
          id="marketing-notifications"
          checked={settings.marketing}
          onCheckedChange={(checked) => handleToggle("marketing", checked)}
        />
      </div>

      <Button className="w-full" onClick={handleSave}>
        <Save className="mr-2 h-4 w-4" />
        Simpan Preferensi
      </Button>
    </div>
  )
}
