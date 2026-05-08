import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FeaturedVideoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black pt-4 md:pt-6 lg:pt-10 pb-16 md:pb-24 lg:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="rounded-3xl overflow-hidden aspect-video relative"
        >
          {/* Video */}
          <video
            className="w-full h-full object-cover"
            src="https://www.pexels.com/download/video/8328046/"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-start">
              {/* Left card */}
              <div className="liquid-glass rounded-2xl p-4 md:p-6 lg:p-8 max-w-md w-full">
                <div className="text-white/50 text-xs tracking-widest uppercase mb-3">Our Approach</div>
                <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed">
                  We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.
                </p>
              </div>
              
              {/* Right button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="liquid-glass rounded-full px-6 py-3 text-white text-xs md:text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                Explore more
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedVideoSection
