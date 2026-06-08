"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type ThemeType = "dark" | "light-emerald" | "light-violet" | "light-orange"

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("light-orange")

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    // Remove all theme classes
    root.classList.remove("theme-dark", "theme-light-emerald", "theme-light-violet", "theme-light-orange")
    
    // Add active theme class
    if (theme === "dark") {
      root.classList.add("theme-dark")
      root.style.colorScheme = "dark"
    } else if (theme === "light-emerald") {
      root.classList.add("theme-light-emerald")
      root.style.colorScheme = "light"
    } else if (theme === "light-violet") {
      root.classList.add("theme-light-violet")
      root.style.colorScheme = "light"
    } else if (theme === "light-orange") {
      root.classList.add("theme-light-orange")
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
