"use client"

import { useEffect, useRef, useState } from "react"

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updateEnabled = () => setEnabled(mediaQuery.matches)

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top = `${my}px`
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove)
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] h-3 w-3 rounded-full bg-[#6B0F2B] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] h-9 w-9 rounded-full border border-[#6B0F2B] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  )
}

export default CustomCursor