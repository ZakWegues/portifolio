'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'

function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full border border-violet-DEFAULT/30 flex items-center justify-center">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-DEFAULT to-amber-DEFAULT"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border border-violet-DEFAULT"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="font-display text-sm tracking-[0.3em] text-text-muted uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          isaac.dev
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
