"use client"

import { useState, useEffect } from "react"
import {
  getDefaultSettings,
  getCurrentUser,
  updateUser,
  verifyPassword,
  changePassword,
  removeSession,
  removeAllSessions,
} from "@/lib/db"

// Custom hook untuk mengelola pengaturan pengguna
export function useSettings() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notificationSettings, setNotificationSettings] = useState({})
  const [privacySettings, setPrivacySettings] = useState({})
  const [displaySettings, setDisplaySettings] = useState({})
  const [activeSessions, setActiveSessions] = useState([])
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")

  // Fungsi untuk menampilkan pesan sukses
  const showSuccess = (message) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  // Fungsi untuk menghapus error pada field tertentu
  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  // Fungsi untuk memuat data dari localStorage atau database
  const loadSettings = async () => {
    try {
      setIsLoading(true)

      // Coba ambil dari localStorage terlebih dahulu
      const savedUser = localStorage.getItem("user")
      const savedNotifications = localStorage.getItem("notificationSettings")
      const savedPrivacy = localStorage.getItem("privacySettings")
      const savedDisplay = localStorage.getItem("displaySettings")
      const savedSessions = localStorage.getItem("activeSessions")

      // Jika tidak ada di localStorage, ambil dari database
      const currentUser = savedUser ? JSON.parse(savedUser) : getCurrentUser()
      const defaultSettings = getDefaultSettings()

      setUser(currentUser)
      setNotificationSettings(savedNotifications ? JSON.parse(savedNotifications) : defaultSettings.notification)
      setPrivacySettings(savedPrivacy ? JSON.parse(savedPrivacy) : defaultSettings.privacy)
      setDisplaySettings(savedDisplay ? JSON.parse(savedDisplay) : defaultSettings.display)
      setActiveSessions(savedSessions ? JSON.parse(savedSessions) : defaultSettings.activeSessions)

      // Simpan ke localStorage jika belum ada
      if (!savedUser) localStorage.setItem("user", JSON.stringify(currentUser))
      if (!savedNotifications)
        localStorage.setItem("notificationSettings", JSON.stringify(defaultSettings.notification))
      if (!savedPrivacy) localStorage.setItem("privacySettings", JSON.stringify(defaultSettings.privacy))
      if (!savedDisplay) localStorage.setItem("displaySettings", JSON.stringify(defaultSettings.display))
      if (!savedSessions) localStorage.setItem("activeSessions", JSON.stringify(defaultSettings.activeSessions))
    } catch (error) {
      console.error("Error loading settings:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fungsi untuk memperbarui profil pengguna
  const updateProfile = async (profileData) => {
    try {
      // Validasi data
      const newErrors = {}
      if (!profileData.name.trim()) newErrors.name = "Nama tidak boleh kosong"
      if (!profileData.email.trim()) newErrors.email = "Email tidak boleh kosong"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileData.email)) newErrors.email = "Format email tidak valid"
      if (profileData.phone && !/^[0-9]{10,13}$/.test(profileData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Format nomor telepon tidak valid"
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return { success: false, errors: newErrors }
      }

      // Update di database (simulasi)
      const updatedUser = updateUser(user.id, profileData)

      // Update di localStorage
      const updatedUserData = { ...user, ...profileData }
      localStorage.setItem("user", JSON.stringify(updatedUserData))
      setUser(updatedUserData)

      showSuccess("Profil berhasil diperbarui")
      return { success: true }
    } catch (error) {
      console.error("Error updating profile:", error)
      return { success: false, error: "Terjadi kesalahan saat memperbarui profil" }
    }
  }

  // Fungsi untuk mengubah password
  const updatePassword = async (passwordData) => {
    try {
      // Validasi data
      const newErrors = {}
      if (!passwordData.currentPassword) newErrors.currentPassword = "Password saat ini tidak boleh kosong"
      if (!passwordData.newPassword) newErrors.newPassword = "Password baru tidak boleh kosong"
      else if (passwordData.newPassword.length < 8) newErrors.newPassword = "Password baru minimal 8 karakter"
      if (!passwordData.confirmPassword) newErrors.confirmPassword = "Konfirmasi password tidak boleh kosong"
      else if (passwordData.newPassword !== passwordData.confirmPassword) {
        newErrors.confirmPassword = "Konfirmasi password tidak cocok"
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return { success: false, errors: newErrors }
      }

      // Verifikasi password saat ini (simulasi)
      const isPasswordValid = verifyPassword(user.id, passwordData.currentPassword)
      if (!isPasswordValid) {
        setErrors({ currentPassword: "Password saat ini tidak valid" })
        return { success: false, errors: { currentPassword: "Password saat ini tidak valid" } }
      }

      // Update password di database (simulasi)
      changePassword(user.id, passwordData.newPassword)

      showSuccess("Password berhasil diubah")
      return { success: true }
    } catch (error) {
      console.error("Error updating password:", error)
      return { success: false, error: "Terjadi kesalahan saat mengubah password" }
    }
  }

  // Fungsi untuk memperbarui pengaturan notifikasi
  const updateNotificationSettings = async (settings) => {
    try {
      setNotificationSettings(settings)
      localStorage.setItem("notificationSettings", JSON.stringify(settings))
      showSuccess("Pengaturan notifikasi berhasil disimpan")
      return { success: true }
    } catch (error) {
      console.error("Error updating notification settings:", error)
      return { success: false, error: "Terjadi kesalahan saat memperbarui pengaturan notifikasi" }
    }
  }

  // Fungsi untuk memperbarui pengaturan privasi
  const updatePrivacySettings = async (settings) => {
    try {
      setPrivacySettings(settings)
      localStorage.setItem("privacySettings", JSON.stringify(settings))
      showSuccess("Pengaturan privasi berhasil disimpan")
      return { success: true }
    } catch (error) {
      console.error("Error updating privacy settings:", error)
      return { success: false, error: "Terjadi kesalahan saat memperbarui pengaturan privasi" }
    }
  }

  // Fungsi untuk memperbarui pengaturan tampilan
  const updateDisplaySettings = async (settings) => {
    try {
      setDisplaySettings(settings)
      localStorage.setItem("displaySettings", JSON.stringify(settings))

      // Terapkan mode gelap jika diubah
      if (settings.darkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      showSuccess("Pengaturan tampilan berhasil disimpan")
      return { success: true }
    } catch (error) {
      console.error("Error updating display settings:", error)
      return { success: false, error: "Terjadi kesalahan saat memperbarui pengaturan tampilan" }
    }
  }

  // Fungsi untuk menghapus sesi
  const handleRemoveSession = async (sessionId) => {
    try {
      // Hapus sesi dari database (simulasi)
      const success = removeSession(sessionId)

      if (success) {
        // Update state
        const updatedSessions = activeSessions.filter((session) => session.id !== sessionId)
        setActiveSessions(updatedSessions)

        // Update localStorage
        localStorage.setItem("activeSessions", JSON.stringify(updatedSessions))

        showSuccess("Sesi berhasil dihapus")
        return { success: true }
      }

      return { success: false, error: "Tidak dapat menghapus sesi saat ini" }
    } catch (error) {
      console.error("Error removing session:", error)
      return { success: false, error: "Terjadi kesalahan saat menghapus sesi" }
    }
  }

  // Fungsi untuk menghapus semua sesi kecuali yang saat ini
  const handleRemoveAllSessions = async () => {
    try {
      // Hapus semua sesi dari database (simulasi)
      const success = removeAllSessions()

      if (success) {
        // Update state
        const currentSession = activeSessions.find((session) => session.isCurrent)
        setActiveSessions(currentSession ? [currentSession] : [])

        // Update localStorage
        localStorage.setItem("activeSessions", JSON.stringify(currentSession ? [currentSession] : []))

        showSuccess("Semua sesi berhasil dihapus")
        return { success: true }
      }

      return { success: false, error: "Tidak dapat menghapus sesi" }
    } catch (error) {
      console.error("Error removing all sessions:", error)
      return { success: false, error: "Terjadi kesalahan saat menghapus semua sesi" }
    }
  }

  // Fungsi untuk logout
  const handleLogout = () => {
    // Hapus data dari localStorage
    localStorage.removeItem("user")

    // Redirect ke halaman login
    window.location.href = "/login"
  }

  // Load settings saat komponen dimount
  useEffect(() => {
    loadSettings()
  }, [])

  return {
    user,
    isLoading,
    notificationSettings,
    privacySettings,
    displaySettings,
    activeSessions,
    errors,
    successMessage,
    updateProfile,
    updatePassword,
    updateNotificationSettings,
    updatePrivacySettings,
    updateDisplaySettings,
    handleRemoveSession,
    handleRemoveAllSessions,
    handleLogout,
    clearError,
  }
}
