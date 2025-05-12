"use client"

import { useState, useEffect } from "react"
import { searchDiscussions, getPopularTags, getActiveUsers } from "@/lib/database"

export function useDiscussions() {
  const [discussions, setDiscussions] = useState([])
  const [popularTags, setPopularTags] = useState([])
  const [activeUsers, setActiveUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedSort, setSelectedSort] = useState("newest")
  const [activeTab, setActiveTab] = useState("semua")
  const [showFilters, setShowFilters] = useState(false)

  // Memuat data diskusi
  useEffect(() => {
    const loadDiscussions = async () => {
      try {
        setIsLoading(true)

        // Simulasi delay untuk menunjukkan loading state
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mendapatkan tag populer
        const tags = getPopularTags()
        setPopularTags(tags)

        // Mendapatkan pengguna aktif
        const users = getActiveUsers()
        setActiveUsers(users)

        // Mendapatkan semua diskusi dengan filter default
        const allDiscussions = searchDiscussions("", { sort: selectedSort })
        setDiscussions(allDiscussions)
      } catch (error) {
        console.error("Error loading discussions:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadDiscussions()
  }, [])

  // Memperbarui diskusi saat filter berubah
  useEffect(() => {
    const applyFilters = () => {
      const filters = {
        category: selectedCategory,
        status: activeTab,
        sort: selectedSort,
      }

      const filteredDiscussions = searchDiscussions(searchQuery, filters)
      setDiscussions(filteredDiscussions)
    }

    // Hanya jalankan jika tidak dalam loading state
    if (!isLoading) {
      applyFilters()
    }
  }, [searchQuery, selectedCategory, selectedSort, activeTab, isLoading])

  // Reset semua filter
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("Semua")
    setSelectedSort("newest")
    setActiveTab("semua")
  }

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev)
  }

  return {
    discussions,
    popularTags,
    activeUsers,
    isLoading,
    searchQuery,
    selectedCategory,
    selectedSort,
    activeTab,
    showFilters,
    setSearchQuery,
    setSelectedCategory,
    setSelectedSort,
    setActiveTab,
    resetFilters,
    toggleFilters,
  }
}
