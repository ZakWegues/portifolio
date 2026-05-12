'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovered, setHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const springConfig = { damping: 25, stiffness: 300 }
  const trailX = useSpring(cursorX, { damping: 35, stiffness: 150 })
  const trailY = useSpring(cursorY, { damping: 35, stiffness: 150 })

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovered(true)
      }
    }

    const onLeave = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', onEnter, true)
    document.addEventListener('mouseleave', onLeave, true)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', onEnter, true)
      document.removeEventListener('mouseleave', onLeave, true)
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-white mix-blend-difference"
          animate={{ width: hovered ? 12 : 6, height: hovered ? 12 : 6 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border mix-blend-difference"
          animate={{
            width: hovered ? 48 : 32,
            height: hovered ? 48 : 32,
            borderColor: hovered ? '#F59E0B' : '#8B5CF6',
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
