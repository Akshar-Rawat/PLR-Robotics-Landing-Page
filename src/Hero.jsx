import React, { useRef, useEffect, useState } from 'react'
import { Cpu, ArrowRight, Camera, MessageCircle, Zap } from 'lucide-react'

const Hero = () => {
  const videoRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const animateOpacity = (targetOpacity, duration = 500) => {
      if (isAnimating) return
      setIsAnimating(true)
      
      const startOpacity = parseFloat(video.style.opacity || 0)
      const startTime = performance.now()
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        video.style.opacity = startOpacity + (targetOpacity - startOpacity) * progress
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setIsAnimating(false)
        }
      }
      
      requestAnimationFrame(animate)
    }

    const handleCanPlay = () => {
      video.play().catch(error => {
        console.log('Video play error:', error)
        setTimeout(() => {
          video.play().catch(e => console.log('Retry failed:', e))
        }, 1000)
      })
      video.style.opacity = 1
    }

    const handleError = () => {
      console.log('Video error, retrying...')
      setTimeout(() => {
        video.load()
      }, 2000)
    }

    video.style.opacity = 1
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [isAnimating])

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        src="https://www.pexels.com/download/video/32386523/"
        muted
        autoPlay
        playsInline
        preload="auto"
        loop
        disablePictureInPicture
        x-webkit-airplay="allow"
        webkit-playsinline="true"
      />

      {/* Navbar */}
      <nav className="relative z-20 px-4 py-4">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cpu size={20} className="text-white" />
            <span className="text-white font-semibold text-base">PLR Robotics</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-white text-xs font-medium hover:text-white/80 transition-colors hidden sm:block">Contact</button>
            <button className="liquid-glass rounded-full px-4 py-2 text-white text-xs font-medium hover:bg-white/5 transition-colors">Demo</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 text-center -translate-y-[15%]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tight font-serif leading-tight" style={{ fontFamily: 'Instrument Serif, serif' }}>
          Engineering <em className="italic">Intelligent</em>
          <br className="block" />
          Automation.
        </h1>
        
        <div className="w-full max-w-sm mt-8">
          <div className="liquid-glass rounded-full pl-4 pr-2 py-2 flex items-center gap-2">
            <input
              type="email"
              placeholder="Request consultation"
              className="bg-transparent text-white placeholder:text-white/40 outline-none flex-1 text-sm"
            />
            <button className="bg-white rounded-full p-2 text-black hover:bg-white/90 transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <p className="text-white text-sm leading-relaxed px-2 mt-6 max-w-lg">
          Precision robotics and AI-powered automation systems for the future of smart manufacturing. Transform your industrial operations with cutting-edge robotic solutions.
        </p>

        <button className="liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-6 flex items-center gap-2">
          <Zap size={14} />
          Explore Solutions
        </button>
      </div>

      {/* Social Icons Footer */}
      <div className="relative z-10 flex justify-center gap-3 pb-8">
        <a href="#" className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Camera size={16} />
        </a>
        <a href="#" className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <MessageCircle size={16} />
        </a>
        <a href="#" className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Cpu size={16} />
        </a>
      </div>
    </section>
  )
}

export default Hero
