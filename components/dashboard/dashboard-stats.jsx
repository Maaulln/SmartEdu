"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, Award, Zap } from "lucide-react"

export function DashboardStats({ stats }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <motion.div variants={item}>
        <Card>
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-slate-500">Materi Selesai</div>
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div className="mt-4 flex items-baseline space-x-1">
              <span className="text-3xl font-bold">{stats.completedMaterials}</span>
              <span className="text-sm text-slate-500">/ {stats.totalMaterials}</span>
            </div>
            <Progress value={(stats.completedMaterials / stats.totalMaterials) * 100} className="mt-4 h-2" />
            <div className="mt-2 text-xs text-slate-500">
              {Math.round((stats.completedMaterials / stats.totalMaterials) * 100)}% selesai
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-slate-500">Kuis Selesai</div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="mt-4 flex items-baseline space-x-1">
              <span className="text-3xl font-bold">{stats.completedQuizzes}</span>
              <span className="text-sm text-slate-500">/ {stats.totalQuizzes}</span>
            </div>
            <Progress value={(stats.completedQuizzes / stats.totalQuizzes) * 100} className="mt-4 h-2 bg-slate-200" />
            <div className="mt-2 text-xs text-slate-500">
              {Math.round((stats.completedQuizzes / stats.totalQuizzes) * 100)}% selesai
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-slate-500">Total Poin</div>
              <Award className="h-5 w-5 text-amber-500" />
            </div>
            <div className="mt-4 text-3xl font-bold">{stats.totalPoints}</div>
            <div className="mt-2 text-xs text-slate-500">+250 poin minggu ini</div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardContent className="flex flex-col p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-slate-500">Streak Belajar</div>
              <Zap className="h-5 w-5 text-orange-500" />
            </div>
            <div className="mt-4 text-3xl font-bold">{stats.streak} hari</div>
            <div className="mt-2 text-xs text-slate-500">Pertahankan streak Anda!</div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
