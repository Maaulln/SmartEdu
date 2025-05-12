"use client"
import { motion } from "framer-motion"
import { Search, Filter, ChevronDown, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MaterialsFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  selectedSort,
  setSelectedSort,
  showFilters,
  toggleFilters,
  resetFilters,
  categories,
  levels,
}) {
  // Kategori dengan "Semua" di awal
  const allCategories = ["Semua", ...categories]
  const allLevels = ["Semua", ...levels]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            type="search"
            placeholder="Cari materi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={toggleFilters}>
            <Filter className="h-4 w-4" />
            <span>Filter</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Terbaru</SelectItem>
              <SelectItem value="oldest">Terlama</SelectItem>
              <SelectItem value="rating">Rating Tertinggi</SelectItem>
              <SelectItem value="duration-asc">Durasi (Pendek-Panjang)</SelectItem>
              <SelectItem value="duration-desc">Durasi (Panjang-Pendek)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Expandable filter section */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg border bg-white p-4 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Kategori</label>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Tingkat Kesulitan</label>
              <div className="flex flex-wrap gap-2">
                {allLevels.map((level) => (
                  <Badge
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs" onClick={resetFilters}>
              <X className="h-3 w-3" />
              Reset Filter
            </Button>
          </div>
        </motion.div>
      )}

      {/* Applied filters */}
      {(selectedCategory !== "Semua" || selectedLevel !== "Semua" || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500">Filter aktif:</span>
          {selectedCategory !== "Semua" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Kategori: {selectedCategory}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("Semua")} />
            </Badge>
          )}
          {selectedLevel !== "Semua" && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Level: {selectedLevel}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedLevel("Semua")} />
            </Badge>
          )}
          {searchQuery && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Pencarian: {searchQuery}
              <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
            </Badge>
          )}
        </div>
      )}
    </motion.div>
  )
}
