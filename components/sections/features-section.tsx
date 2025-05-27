"use client"

import { PerformanceCard } from "@/components/ui/performance-card"
import { GradientText } from "@/components/ui/gradient-text"
import { SmoothReveal } from "@/components/ui/smooth-reveal"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Zap, Shield, Database, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Sub-50ms response times with intelligent caching and CDN optimization",
    gradient: "from-yellow-400 to-orange-500",
    details: ["Global CDN", "Smart Caching", "Load Balancing"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with JWT, OAuth2, and comprehensive monitoring",
    gradient: "from-green-400 to-emerald-500",
    details: ["JWT Authentication", "Rate Limiting", "DDoS Protection"],
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description: "Auto-scaling architecture that grows with your business needs",
    gradient: "from-blue-400 to-cyan-500",
    details: ["Auto Scaling", "Database Clustering", "Microservices"],
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "15+ data centers worldwide for optimal performance everywhere",
    gradient: "from-purple-400 to-pink-500",
    details: ["15+ Regions", "Edge Computing", "Low Latency"],
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SmoothReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature <GradientText>breakthrough</GradientText>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with the latest technology to deliver an amazing developer experience
            </p>
          </div>
        </SmoothReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <SmoothReveal key={index} delay={index * 0.1}>
              <PerformanceCard className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white shadow-md transition-transform duration-200 hover:scale-110`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 dark:text-gray-400 text-gray-500">
                        {feature.details.map((detail, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {detail}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </PerformanceCard>
            </SmoothReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
