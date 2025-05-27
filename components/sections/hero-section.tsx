"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PerformanceCard } from "@/components/ui/performance-card"
import { GradientText } from "@/components/ui/gradient-text"
import { SmoothReveal } from "@/components/ui/smooth-reveal"
import { CardContent } from "@/components/ui/card"
import { Sparkles, Rocket, ArrowRight, Play, CheckCircle, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SmoothReveal delay={0.1}>
              <Badge className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                <Sparkles className="h-4 w-4 mr-2" />
                Enterprise-Grade • Spring Boot • Cloud Native
              </Badge>
            </SmoothReveal>

            <SmoothReveal delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                API Platform
                <br />
                <GradientText className="text-5xl lg:text-6xl font-bold">Thế hệ mới</GradientText>
              </h1>
            </SmoothReveal>

            <SmoothReveal delay={0.3}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                Trải nghiệm sức mạnh của RESTful API hiện đại với hiệu suất vượt trội, bảo mật enterprise và khả năng mở
                rộng không giới hạn.
              </p>
            </SmoothReveal>

            <SmoothReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 group transition-all duration-200"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Bắt đầu miễn phí
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 transition-all duration-200 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  Xem Demo
                </Button>
              </div>
            </SmoothReveal>

            <SmoothReveal delay={0.5}>
              <div className="flex items-center space-x-6 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Free forever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">No credit card</span>
                </div>
              </div>
            </SmoothReveal>
          </div>

          <SmoothReveal delay={0.3} direction="right">
            <PerformanceCard className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Terminal className="h-5 w-5 text-green-500" />
                    <span className="font-mono text-sm text-gray-600 dark:text-gray-300">api.roway.dev/v1</span>
                  </div>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-500 font-semibold">GET</span> /api/v1/users
                  </div>
                  <div className="pl-4 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-slate-800/50 rounded-lg p-3 text-xs">
                    {`{
  "status": "success",
  "data": [...],
  "meta": {
    "total": 1247,
    "response_time": "45ms"
  }
}`}
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
              </CardContent>
            </PerformanceCard>
          </SmoothReveal>
        </div>
      </div>
    </section>
  )
}
