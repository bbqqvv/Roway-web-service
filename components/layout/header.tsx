"use client"

import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import { Server, Github, BookOpen, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface HeaderProps {
  apiStatus: "online" | "offline" | "checking"
}

export function Header({ apiStatus }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-gray-200/50 dark:border-slate-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <Server className="h-5 w-5 text-white" />
              </div>
              {apiStatus === "online" && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />
              )}
            </div>
            <div>
              <h1 className="text-xl font-bold">
                <GradientText>Roway API</GradientText>
              </h1>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${apiStatus === "online" ? "bg-green-500" : "bg-yellow-500"}`}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {apiStatus === "online" ? "Operational" : "Checking..."}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="transition-all duration-200 hover:scale-105"
            >
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm" className="transition-all duration-200 hover:scale-105">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 hover:scale-105"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Docs
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
