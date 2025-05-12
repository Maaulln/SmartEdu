"use client"

import { Save, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function DisplaySettings({ settings, onUpdate, onSave }) {
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
        title: "Pengaturan tampilan disimpan",
        description: "Preferensi tampilan Anda telah diperbarui.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal menyimpan pengaturan",
        description: result.error || "Terjadi kesalahan saat menyimpan pengaturan tampilan.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="dark-mode">Mode Gelap</Label>
          <p className="text-sm text-slate-500">Aktifkan mode gelap untuk mengurangi ketegangan mata</p>
        </div>
        <div className="flex items-center space-x-2">
          <Sun className="h-4 w-4 text-slate-500" />
          <Switch
            id="dark-mode"
            checked={settings.darkMode}
            onCheckedChange={(checked) => handleToggle("darkMode", checked)}
          />
          <Moon className="h-4 w-4 text-slate-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">Bahasa</Label>
        <p className="text-sm text-slate-500">Pilih bahasa yang ingin Anda gunakan</p>
        <Select value={settings.language} onValueChange={(value) => handleSelectChange("language", value)}>
          <SelectTrigger id="language">
            <SelectValue placeholder="Pilih bahasa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="id">Bahasa Indonesia</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="font-size">Ukuran Font</Label>
        <p className="text-sm text-slate-500">Sesuaikan ukuran font untuk kenyamanan membaca</p>
        <Select value={settings.fontSize} onValueChange={(value) => handleSelectChange("fontSize", value)}>
          <SelectTrigger id="font-size">
            <SelectValue placeholder="Pilih ukuran font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Kecil</SelectItem>
            <SelectItem value="medium">Sedang</SelectItem>
            <SelectItem value="large">Besar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="color-theme">Tema Warna</Label>
        <p className="text-sm text-slate-500">Pilih tema warna untuk aplikasi</p>
        <Select value={settings.colorTheme} onValueChange={(value) => handleSelectChange("colorTheme", value)}>
          <SelectTrigger id="color-theme">
            <SelectValue placeholder="Pilih tema warna" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="blue">Biru</SelectItem>
            <SelectItem value="green">Hijau</SelectItem>
            <SelectItem value="purple">Ungu</SelectItem>
            <SelectItem value="orange">Oranye</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full" onClick={handleSave}>
        <Save className="mr-2 h-4 w-4" />
        Simpan Preferensi
      </Button>
    </div>
  )
}
