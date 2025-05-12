"use client"

import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function PrivacySettings({ settings, onUpdate, onSave }) {
  const { toast } = useToast()

  // Handle toggle change
  const handleToggle = (key, checked) => {
    onUpdate({ ...settings, [key]: checked })
  }

  // Handle select change
  const handleSelectChange = (key, value) => {
    onUpdate({ ...settings, [key]: value })
  }

  // Handle save
  const handleSave = async () => {
    const result = await onSave(settings)

    if (result.success) {
      toast({
        title: "Pengaturan privasi disimpan",
        description: "Preferensi privasi Anda telah diperbarui.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal menyimpan pengaturan",
        description: result.error || "Terjadi kesalahan saat menyimpan pengaturan privasi.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="profile-visibility">Visibilitas Profil</Label>
        <p className="text-sm text-slate-500">Siapa yang dapat melihat profil Anda</p>
        <Select
          value={settings.profileVisibility}
          onValueChange={(value) => handleSelectChange("profileVisibility", value)}
        >
          <SelectTrigger id="profile-visibility">
            <SelectValue placeholder="Pilih visibilitas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Publik</SelectItem>
            <SelectItem value="friends">Teman</SelectItem>
            <SelectItem value="private">Pribadi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="activity-visibility">Visibilitas Aktivitas</Label>
        <p className="text-sm text-slate-500">Siapa yang dapat melihat aktivitas belajar Anda</p>
        <Select
          value={settings.activityVisibility}
          onValueChange={(value) => handleSelectChange("activityVisibility", value)}
        >
          <SelectTrigger id="activity-visibility">
            <SelectValue placeholder="Pilih visibilitas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Publik</SelectItem>
            <SelectItem value="friends">Teman</SelectItem>
            <SelectItem value="private">Pribadi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="online-status">Tampilkan Status Online</Label>
          <p className="text-sm text-slate-500">Izinkan orang lain melihat kapan Anda online</p>
        </div>
        <Switch
          id="online-status"
          checked={settings.showOnlineStatus}
          onCheckedChange={(checked) => handleToggle("showOnlineStatus", checked)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="allow-messages">Izinkan Pesan</Label>
          <p className="text-sm text-slate-500">Izinkan orang lain mengirim pesan kepada Anda</p>
        </div>
        <Switch
          id="allow-messages"
          checked={settings.allowMessages}
          onCheckedChange={(checked) => handleToggle("allowMessages", checked)}
        />
      </div>

      <Button className="w-full" onClick={handleSave}>
        <Save className="mr-2 h-4 w-4" />
        Simpan Pengaturan
      </Button>
    </div>
  )
}
