import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PhilosophySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 lg:py-40 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white tracking-tight mb-12 md:mb-16 lg:mb-24"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Precision then <em className="italic text-white/40">x</em> Intelligence
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-video lg:aspect-[4/3]"
          >
            <video
              className="w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            />
          </motion.div>

          {/* Right: Text blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Block 1 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">Industrial Excellence</div>
              <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">
                Every automation breakthrough begins at the intersection of precision engineering and artificial intelligence. We operate at that forefront, transforming industrial challenges into smart manufacturing solutions that redefine productivity and quality standards.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Block 2 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">Future of Manufacturing</div>
              <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">
                We believe that the future of industry lies in intelligent automation. Our robotic systems are engineered to deliver unmatched reliability, adaptability, and performance, ensuring our clients lead in an increasingly automated world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
