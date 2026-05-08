import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IndustriesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    {
      name: "Automotive",
      abbreviation: "AU",
      description: "Precision welding, assembly, and painting automation"
    },
    {
      name: "Electronics", 
      abbreviation: "EL",
      description: "Micro-assembly and PCB handling at scale"
    },
    {
      name: "Logistics",
      abbreviation: "LO", 
      description: "Warehouse sorting and fulfillment robotics"
    },
    {
      name: "Packaging",
      abbreviation: "PA",
      description: "High-throughput packaging line automation"
    },
    {
      name: "Healthcare",
      abbreviation: "HE",
      description: "Sterile environment robotic assistance"
    },
    {
      name: "Manufacturing",
      abbreviation: "MA",
      description: "End-to-end smart factory integration"
    }
  ]

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 lg:py-40 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="text-white/40 text-xs tracking-widest uppercase mb-8">
          Industries
        </div>
        
        {/* Heading */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-12 md:mb-16"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Built for the world's most <em className="italic text-white/40">demanding</em> industries.
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="liquid-glass robotics-glow rounded-2xl p-4 md:p-6 lg:p-8"
            >
              {/* Icon Area */}
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-white/40 text-xs">
                  {industry.abbreviation}
                </span>
              </div>
              
              {/* Industry Name */}
              <h3 className="text-white text-base md:text-lg mb-2">
                {industry.name}
              </h3>
              
              {/* Description */}
              <p className="text-white/40 text-xs md:text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
