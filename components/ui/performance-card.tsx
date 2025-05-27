"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PerformanceCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function PerformanceCard({ children, className, hover = true }: PerformanceCardProps) {
  return (
    <Card
      className={cn(
        "backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border border-gray-200/50 dark:border-slate-700/50 shadow-lg transition-all duration-300 ease-out",
        hover && "hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]",
        className,
      )}
      style={{ willChange: "transform" }}
    >
      {children}
    </Card>
  )
}
