'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl tracking-tight">
            <span className="text-text-primary">isaac</span>
            <span className="text-violet-DEFAULT">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-body transition-colors duration-200 relative ${
                    active === link.href.slice(1)
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-violet-DEFAULT"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:zakduwe@gmail.com"
            className="hidden md:block text-sm font-body px-4 py-2 border border-violet-DEFAULT/50 text-violet-glow rounded-full hover:bg-violet-DEFAULT/10 transition-all duration-200"
          >
            Contato
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-text-primary"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-bg/95 backdrop-blur-lg border-b border-border md:hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-display font-bold text-text-primary hover:text-violet-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:zakduwe@gmail.com"
                  className="inline-block mt-2 text-sm px-4 py-2 border border-violet-DEFAULT text-violet-glow rounded-full"
                >
                  zakduwe@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
