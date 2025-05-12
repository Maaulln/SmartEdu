"use client"

import { useState, useEffect } from "react"
import { searchMaterials, getFeaturedMaterials } from "@/lib/database"

export function useMaterials() {
  const [materials, setMaterials] = useState([])
  const [featuredMaterials, setFeaturedMaterials] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedLevel, setSelectedLevel] = useState("Semua")
  const [selectedSort, setSelectedSort] = useState("newest")
  const [activeTab, setActiveTab] = useState("semua")
  const [showFilters, setShowFilters] = useState(false)

  // Memuat data materi
  useEffect(() => {
    const loadMaterials = async () => {
      try {
        setIsLoading(true)

        // Simulasi delay untuk menunjukkan loading state
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mendapatkan materi unggulan
        const featured = getFeaturedMaterials()
        setFeaturedMaterials(featured)

        // Mendapatkan semua materi dengan filter default
        const allMaterials = searchMaterials("", { sort: selectedSort })
        setMaterials(allMaterials)
      } catch (error) {
        console.error("Error loading materials:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMaterials()
  }, [])

  // Memperbarui materi saat filter berubah
  useEffect(() => {
    const applyFilters = () => {
      const filters = {
        category: selectedCategory,
        level: selectedLevel,
        status: activeTab,
        sort: selectedSort,
      }

      const filteredMaterials = searchMaterials(searchQuery, filters)
      setMaterials(filteredMaterials)
    }

    // Hanya jalankan jika tidak dalam loading state
    if (!isLoading) {
      applyFilters()
    }
  }, [searchQuery, selectedCategory, selectedLevel, selectedSort, activeTab, isLoading])

  // Reset semua filter
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("Semua")
    setSelectedLevel("Semua")
    setSelectedSort("newest")
    setActiveTab("semua")
  }

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev)
  }

  return {
    materials,
    featuredMaterials,
    isLoading,
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedSort,
    activeTab,
    showFilters,
    setSearchQuery,
    setSelectedCategory,
    setSelectedLevel,
    setSelectedSort,
    setActiveTab,
    resetFilters,
    toggleFilters,
  }
}
