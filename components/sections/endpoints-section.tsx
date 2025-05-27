"use client"

import { PerformanceCard } from "@/components/ui/performance-card"
import { GradientText } from "@/components/ui/gradient-text"
import { SmoothReveal } from "@/components/ui/smooth-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, ExternalLink, Clock, ChevronRight } from "lucide-react"

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/users",
    description: "Retrieve paginated user list with advanced filtering",
    status: "stable",
    responseTime: "45ms",
  },
  {
    method: "POST",
    path: "/api/v1/auth/login",
    description: "Authenticate users and generate secure JWT tokens",
    status: "stable",
    responseTime: "32ms",
  },
  {
    method: "GET",
    path: "/api/v1/analytics",
    description: "Real-time analytics and business intelligence data",
    status: "beta",
    responseTime: "78ms",
  },
  {
    method: "PUT",
    path: "/api/v1/users/{id}",
    description: "Update user profiles with validation and audit logs",
    status: "stable",
    responseTime: "56ms",
  },
]

const getMethodColor = (method: string) => {
  const colors = {
    GET: "bg-emerald-500",
    POST: "bg-blue-500",
    PUT: "bg-amber-500",
    DELETE: "bg-red-500",
  }
  return colors[method as keyof typeof colors] || "bg-gray-500"
}

export function EndpointsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SmoothReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              API <GradientText>Endpoints</GradientText>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover powerful endpoints with detailed documentation and optimal response Times            </p>
          </div>
        </SmoothReveal>

        <SmoothReveal delay={0.2}>
          <PerformanceCard className="max-w-4xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-xl text-gray-900 dark:text-white">
                <Code2 className="h-5 w-5 mr-3 text-blue-500" />
                Available Endpoints
                <Badge className="ml-auto bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs">
                  50+ endpoints
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getMethodColor(endpoint.method)} text-white font-mono text-xs px-2 py-1`}>
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400">{endpoint.path}</code>
                      <Badge
                        variant="outline"
                        className={`text-xs ${endpoint.status === "beta"
                          ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                          : "border-green-500 text-green-600 dark:text-green-400"
                          }`}
                      >
                        {endpoint.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{endpoint.responseTime}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 pl-16">{endpoint.description}</p>
                </div>
              ))}

              <div className="text-center pt-4">
                <Button variant="outline" className="transition-all duration-200 hover:scale-105 dark:bg-gray-800 dark:text-white/70">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Explore all endpoints
                </Button>
              </div>
            </CardContent>
          </PerformanceCard>
        </SmoothReveal>
      </div>
    </section>
  )
}
