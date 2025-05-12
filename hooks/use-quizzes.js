"use client"

import { useState, useEffect } from "react"
import { searchQuizzes, getUpcomingQuizzes } from "@/lib/database"

export function useQuizzes() {
  const [quizzes, setQuizzes] = useState([])
  const [upcomingQuizzes, setUpcomingQuizzes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua")
  const [activeTab, setActiveTab] = useState("semua")
  const [showFilters, setShowFilters] = useState(false)

  // Memuat data kuis
  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        setIsLoading(true)

        // Simulasi delay untuk menunjukkan loading state
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mendapatkan kuis mendatang
        const upcoming = getUpcomingQuizzes()
        setUpcomingQuizzes(upcoming)

        // Mendapatkan semua kuis dengan filter default
        const allQuizzes = searchQuizzes("", { status: activeTab })
        setQuizzes(allQuizzes)
      } catch (error) {
        console.error("Error loading quizzes:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadQuizzes()
  }, [])

  // Memperbarui kuis saat filter berubah
  useEffect(() => {
    const applyFilters = () => {
      const filters = {
        category: selectedCategory,
        difficulty: selectedDifficulty,
        status: activeTab,
      }

      const filteredQuizzes = searchQuizzes(searchQuery, filters)
      setQuizzes(filteredQuizzes)
    }

    // Hanya jalankan jika tidak dalam loading state
    if (!isLoading) {
      applyFilters()
    }
  }, [searchQuery, selectedCategory, selectedDifficulty, activeTab, isLoading])

  // Reset semua filter
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("Semua")
    setSelectedDifficulty("Semua")
    setActiveTab("semua")
  }

  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev)
  }

  return {
    quizzes,
    upcomingQuizzes,
    isLoading,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    activeTab,
    showFilters,
    setSearchQuery,
    setSelectedCategory,
    setSelectedDifficulty,
    setActiveTab,
    resetFilters,
    toggleFilters,
  }
}
