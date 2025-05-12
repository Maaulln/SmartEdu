"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { db } from "@/lib/database"
import { useMaterials } from "@/hooks/use-materials"
import { MaterialsHeader } from "@/components/materials/materials-header"
import { MaterialsFilter } from "@/components/materials/materials-filter"
import { MaterialCard } from "@/components/materials/material-card"
import { MaterialSkeleton } from "@/components/materials/material-skeleton"
import { FeaturedMaterial } from "@/components/materials/featured-material"
import { CategoryCard } from "@/components/materials/category-card"
import { EmptyMaterials } from "@/components/materials/empty-materials"

export default function MateriPage() {
  const {
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
  } = useMaterials()

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
      <MaterialsHeader />

      {/* Featured materials */}
      {!isLoading && featuredMaterials.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Materi Unggulan</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredMaterials.map((material) => (
              <FeaturedMaterial key={material.id} material={material} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Search and filter section */}
      <MaterialsFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
        resetFilters={resetFilters}
        categories={db.categories}
        levels={db.levels}
      />

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b pb-px">
          <TabsTrigger value="semua">Semua Materi</TabsTrigger>
          <TabsTrigger value="progress">Sedang Dipelajari</TabsTrigger>
          <TabsTrigger value="selesai">Selesai</TabsTrigger>
          <TabsTrigger value="belum">Belum Dipelajari</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <MaterialSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {materials.length > 0 ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {materials.map((material) => (
                    <MaterialCard key={material.id} material={material} />
                  ))}
                </motion.div>
              ) : (
                <EmptyMaterials resetFilters={resetFilters} />
              )}
            </>
          )}
        </TabsContent>
      </Tabs>

      {/* Categories section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Jelajahi Berdasarkan Kategori</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {db.categories.map((category) => {
            const count = materials.filter((material) => material.category === category).length
            return (
              <CategoryCard
                key={category}
                category={category}
                count={count}
                onClick={() => {
                  setSelectedCategory(category)
                  setActiveTab("semua")
                }}
              />
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
