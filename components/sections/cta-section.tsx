"use client"

import { PerformanceCard } from "@/components/ui/performance-card"
import { SmoothReveal } from "@/components/ui/smooth-reveal"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Rocket, Star, ArrowRight, BookOpen } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SmoothReveal>
          <PerformanceCard className="overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5" />
            <CardContent className="relative p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sẵn sàng khởi động dự án?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Tham gia cộng đồng 1000+ developers đang xây dựng ứng dụng tuyệt vời với Roway API.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 group transition-all duration-200"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Bắt đầu miễn phí
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 transition-all duration-200 hover:scale-105">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Đọc Documentation
                </Button>
              </div>
            </CardContent>
          </PerformanceCard>
        </SmoothReveal>
      </div>
    </section>
  )
}
