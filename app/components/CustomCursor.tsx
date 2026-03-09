"use client"

import { useEffect, useRef } from "react"

const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0  // mouse position
    let rx = 0, ry = 0  // ring position

    // Dot follows mouse instantly
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = mx + "px"
        dotRef.current.style.top  = my + "px"
      }
    }

    // Ring lags behind using lerp (linear interpolation)
    const animate = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11

      if (ringRef.current) {
        ringRef.current.style.left = rx + "px"
        ringRef.current.style.top  = ry + "px"
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove)
    animate()

    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 bg-[#6B0F2B] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 border border-[#6B0F2B] rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}

export default CustomCursor