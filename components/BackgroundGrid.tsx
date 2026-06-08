"use client"

import React, { useRef, useEffect } from "react"
import { useTheme } from "../context/theme-context"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle resizing
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        // Slower velocities for organic, smooth background motion
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 2 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx
        if (this.y < 0 || this.y > height) this.vy = -this.vy
      }

      draw(ctx: CanvasRenderingContext2D, color: string) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    // Initialize particles
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100)
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Set colors based on theme
    const getColors = () => {
      switch (theme) {
        case "light-emerald":
          return {
            particle: "rgba(4, 120, 87, 0.25)", // Emerald green
            line: "rgba(4, 120, 87, 0.08)",
            grid: "rgba(4, 120, 87, 0.03)",
          }
        case "light-violet":
          return {
            particle: "rgba(109, 40, 217, 0.22)", // Violet
            line: "rgba(109, 40, 217, 0.06)",
            grid: "rgba(109, 40, 217, 0.02)",
          }
        case "dark":
        default:
          return {
            particle: "rgba(245, 158, 11, 0.28)", // Amber/Gold
            line: "rgba(245, 158, 11, 0.08)",
            grid: "rgba(245, 158, 11, 0.03)",
          }
      }
    }

    // Render loop
    const render = () => {
      const colors = getColors()
      
      // Clear screen
      ctx.clearRect(0, 0, width, height)

      // Draw subtle grid lines in background
      ctx.strokeStyle = colors.grid
      ctx.lineWidth = 1
      const gridSize = 80
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw connections
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            // Fade lines based on distance
            const alphaFactor = (1 - dist / 150)
            ctx.strokeStyle = colors.line.replace(
              /rgba\(([^)]+)\)/, 
              (_, p1) => {
                const parts = p1.split(",")
                const originalAlpha = parseFloat(parts[parts.length - 1])
                parts[parts.length - 1] = (originalAlpha * alphaFactor).toString()
                return `rgba(${parts.join(",")})`
              }
            )
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx, colors.particle)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-60"
    />
  )
}
