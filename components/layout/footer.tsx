"use client"

import { Server } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Server className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Roway API</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise API Platform</p>
            </div>
          </div>

          <div className="text-center md:text-right text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; 2025 Roway Backend · Powered by Spring Boot & Heroku</p>
            <p className="mt-1">Built with ❤️ for developers worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
