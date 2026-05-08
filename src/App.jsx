import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import FeaturedVideoSection from './FeaturedVideoSection'
import PhilosophySection from './PhilosophySection'
import ServicesSection from './ServicesSection'
import RobotsSection from './RobotsSection'
import StatsSection from './StatsSection'
import IndustriesSection from './IndustriesSection'
import ProcessSection from './ProcessSection'
import CTASection from './CTASection'
import Footer from './Footer'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const documentHeight = document.body.scrollHeight - window.innerHeight
      const progress = (scrollY / documentHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black relative">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-white/20 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0 w-64 h-64 rounded-full blur-3xl bg-white/5"
        style={{ 
          left: cursorPosition.x, 
          top: cursorPosition.y, 
          position: 'fixed',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <Hero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <RobotsSection />
      <StatsSection />
      <IndustriesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
