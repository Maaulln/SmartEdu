"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Users, BookOpen } from "lucide-react"

export function DashboardUpcomingEvents({ events }) {
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const getEventIcon = (type) => {
    switch (type) {
      case "exam":
        return <BookOpen className="h-4 w-4" />
      case "discussion":
        return <Users className="h-4 w-4" />
      case "webinar":
        return <Users className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  const getEventColor = (type) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-600"
      case "discussion":
        return "bg-blue-100 text-blue-600"
      case "webinar":
        return "bg-purple-100 text-purple-600"
      default:
        return "bg-slate-100 text-slate-600"
    }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
      {events.map((event) => (
        <motion.div key={event.id} variants={item} className="flex items-start rounded-lg border p-4">
          <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full ${getEventColor(event.type)}`}>
            {getEventIcon(event.type)}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{event.title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3.5 w-3.5" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
