"use client"

import { useState, useEffect } from "react"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ProfileForm({ user, errors, onSubmit, onFieldChange }) {
  const { toast } = useToast()
  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
    phone: "",
    address: "",
  })

  // Update form when user data changes
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        phone: user.phone || "",
        address: user.address || "",
      })
    }
  }, [user])

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // Notify parent component
    if (onFieldChange) {
      onFieldChange(name)
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await onSubmit(form)

    if (result.success) {
      toast({
        title: "Profil diperbarui",
        description: "Informasi profil Anda telah disimpan.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal memperbarui profil",
        description: result.error || "Silakan periksa kembali data yang Anda masukkan.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap Anda"
          className={errors?.name ? "border-red-500" : ""}
        />
        {errors?.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Masukkan email Anda"
          className={errors?.email ? "border-red-500" : ""}
        />
        {errors?.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder="Ceritakan sedikit tentang diri Anda"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Nomor Telepon</Label>
        <Input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Masukkan nomor telepon Anda"
          className={errors?.phone ? "border-red-500" : ""}
        />
        {errors?.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Alamat</Label>
        <Input
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Masukkan alamat Anda"
        />
      </div>

      <Button type="submit" className="mt-4">
        <Save className="mr-2 h-4 w-4" />
        Simpan Perubahan
      </Button>
    </form>
  )
}
