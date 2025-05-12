"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { db } from "@/lib/database"
import { useQuizzes } from "@/hooks/use-quizzes"
import { QuizzesHeader } from "@/components/quizzes/quizzes-header"
import { QuizzesFilter } from "@/components/quizzes/quizzes-filter"
import { QuizCard } from "@/components/quizzes/quiz-card"
import { QuizSkeleton } from "@/components/quizzes/quiz-skeleton"
import { UpcomingQuiz } from "@/components/quizzes/upcoming-quiz"
import { EmptyQuizzes } from "@/components/quizzes/empty-quizzes"

export default function KuisPage() {
  const {
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
  } = useQuizzes()

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Page header */}
      <QuizzesHeader />

      {/* Upcoming quizzes */}
      {!isLoading && upcomingQuizzes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Ujian Mendatang</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingQuizzes.map((quiz) => (
              <UpcomingQuiz key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Search and filter section */}
      <QuizzesFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        resetFilters={resetFilters}
        categories={db.categories}
      />

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="semua">Semua Kuis</TabsTrigger>
          <TabsTrigger value="available">Tersedia</TabsTrigger>
          <TabsTrigger value="in_progress">Sedang Dikerjakan</TabsTrigger>
          <TabsTrigger value="completed">Selesai</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <QuizSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {quizzes.length > 0 ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {quizzes.map((quiz) => (
                    <QuizCard key={quiz.id} quiz={quiz} />
                  ))}
                </motion.div>
              ) : (
                <EmptyQuizzes resetFilters={resetFilters} />
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
