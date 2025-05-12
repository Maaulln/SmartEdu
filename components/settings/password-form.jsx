"use client"

import { useState } from "react"
import { Save, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function PasswordForm({ errors, onSubmit, onFieldChange }) {
  const { toast } = useToast()
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    // Notify parent component
    if (onFieldChange) {
      onFieldChange(name)
    }
  }

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await onSubmit(form)

    if (result.success) {
      // Reset form
      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      toast({
        title: "Password diubah",
        description: "Password Anda telah berhasil diperbarui.",
        variant: "success",
      })
    } else {
      toast({
        title: "Gagal mengubah password",
        description: result.error || "Silakan periksa kembali data yang Anda masukkan.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="currentPassword">Password Saat Ini</Label>
        <div className="relative">
          <Input
            id="currentPassword"
            name="currentPassword"
            type={showPassword.current ? "text" : "password"}
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Masukkan password saat ini"
            className={`pr-10 ${errors?.currentPassword ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            onClick={() => togglePasswordVisibility("current")}
          >
            {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors?.currentPassword && <p className="text-sm text-red-500 mt-1">{errors.currentPassword}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">Password Baru</Label>
        <div className="relative">
          <Input
            id="newPassword"
            name="newPassword"
            type={showPassword.new ? "text" : "password"}
            value={form.newPassword}
            onChange={handleChange}
            placeholder="Masukkan password baru"
            className={`pr-10 ${errors?.newPassword ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            onClick={() => togglePasswordVisibility("new")}
          >
            {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors?.newPassword && <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword.confirm ? "text" : "password"}
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Konfirmasi password baru"
            className={`pr-10 ${errors?.confirmPassword ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            onClick={() => togglePasswordVisibility("confirm")}
          >
            {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors?.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
      </div>

      <Button type="submit" className="mt-4">
        <Save className="mr-2 h-4 w-4" />
        Ubah Password
      </Button>
    </form>
  )
}
