'use client'

import { motion } from 'framer-motion'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
