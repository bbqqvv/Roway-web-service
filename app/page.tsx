"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { EndpointsSection } from "@/components/sections/endpoints-section"
import { CTASection } from "@/components/sections/cta-section"

function HomePage() {
  const [apiStatus, setApiStatus] = useState<"online" | "offline" | "checking">("checking")

  useEffect(() => {
    const timer = setTimeout(() => setApiStatus("online"), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Header apiStatus={apiStatus} />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <EndpointsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
