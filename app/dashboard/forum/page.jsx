"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { db } from "@/lib/database"
import { useDiscussions } from "@/hooks/use-discussions"
import { DiscussionsHeader } from "@/components/discussions/discussions-header"
import { DiscussionsFilter } from "@/components/discussions/discussions-filter"
import { DiscussionCard } from "@/components/discussions/discussion-card"
import { DiscussionSkeleton } from "@/components/discussions/discussion-skeleton"
import { EmptyDiscussions } from "@/components/discussions/empty-discussions"
import { PopularTags } from "@/components/discussions/popular-tags"
import { ActiveUsers } from "@/components/discussions/active-users"
import { ForumGuidelines } from "@/components/discussions/forum-guidelines"

export default function ForumPage() {
  const {
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
  } = useDiscussions()

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
      <DiscussionsHeader />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Search and filter section */}
          <DiscussionsFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            showFilters={showFilters}
            toggleFilters={toggleFilters}
            resetFilters={resetFilters}
            categories={db.categories}
          />

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start border-b pb-px">
              <TabsTrigger value="semua">Semua Diskusi</TabsTrigger>
              <TabsTrigger value="pinned">Disematkan</TabsTrigger>
              <TabsTrigger value="resolved">Terjawab</TabsTrigger>
              <TabsTrigger value="unresolved">Belum Terjawab</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {isLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <DiscussionSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <>
                  {discussions.length > 0 ? (
                    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                      {discussions.map((discussion) => (
                        <DiscussionCard key={discussion.id} discussion={discussion} />
                      ))}
                    </motion.div>
                  ) : (
                    <EmptyDiscussions resetFilters={resetFilters} />
                  )}
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PopularTags tags={popularTags} isLoading={isLoading} onTagClick={(tag) => setSearchQuery(tag)} />
          </motion.div>

          {/* Active users */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ActiveUsers users={activeUsers} isLoading={isLoading} />
          </motion.div>

          {/* Forum guidelines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ForumGuidelines />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
