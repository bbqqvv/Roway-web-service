"use client"

import { PerformanceCard } from "@/components/ui/performance-card"
import { SimpleCounter } from "@/components/ui/simple-counter"
import { SmoothReveal } from "@/components/ui/smooth-reveal"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Activity, TrendingUp, Users, Layers } from "lucide-react"

const stats = [
  { label: "API Calls", value: 2400000, suffix: "+", icon: Activity, color: "text-blue-500" },
  { label: "Uptime", value: 99.99, suffix: "%", icon: TrendingUp, color: "text-green-500" },
  { label: "Developers", value: 1200, suffix: "+", icon: Users, color: "text-purple-500" },
  { label: "Endpoints", value: 50, suffix: "+", icon: Layers, color: "text-orange-500" },
]

export function StatsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <SmoothReveal key={index} delay={index * 0.1}>
              <PerformanceCard>
                <CardContent className="p-6 text-center">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <SimpleCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</div>
                  <Badge className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12%
                  </Badge>
                </CardContent>
              </PerformanceCard>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
