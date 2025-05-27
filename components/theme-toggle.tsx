"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="relative overflow-hidden border-2 transition-all duration-300"
    >
      <motion.div
        className="flex items-center justify-center"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
        animate={{
          scale: isDark ? [1, 1.2, 1] : [1, 0.8, 1],
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </Button>
  )
}
