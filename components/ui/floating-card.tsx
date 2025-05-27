"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "backdrop-blur-xl border-white/10 bg-white/5 dark:bg-white/5 shadow-2xl hover:shadow-3xl transition-all duration-300",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}
