"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type ThemeType = "dark-midnight" | "light-cobalt" | "light-cyan" | "light-slate"

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("dark-midnight")

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    // Remove all theme classes
    root.classList.remove(
      "theme-dark-midnight",
      "theme-light-cobalt",
      "theme-light-cyan",
      "theme-light-slate"
    )
    
    // Add active theme class
    root.classList.add(`theme-${theme}`)
    
    if (theme === "dark-midnight") {
      root.style.colorScheme = "dark"
    } else {
      root.style.colorScheme = "light"
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
