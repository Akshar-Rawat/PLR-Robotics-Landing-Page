import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ProcessSection = () => {
  const ref = useRef(null)

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We map your production environment and identify automation opportunities."
    },
    {
      number: "02", 
      title: "System Design",
      description: "Custom robotic systems engineered to your exact specifications."
    },
    {
      number: "03",
      title: "Integration", 
      description: "Seamless installation alongside existing infrastructure with zero downtime."
    },
    {
      number: "04",
      title: "Deployment",
      description: "Live system activation with real-time monitoring and QA validation."
    },
    {
      number: "05",
      title: "Optimization",
      description: "Continuous performance tuning and AI-driven efficiency improvements."
    }
  ]

  return (
    <section ref={ref} className="bg-black py-16 md:py-24 lg:py-40 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <div className="text-white/40 text-xs tracking-widest uppercase mb-8">
          Deployment Pipeline
        </div>
        
        {/* Heading */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl text-white mb-12 md:mb-16"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          From consultation to <em className="italic text-white/40">automation.</em>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/30 absolute left-[10px] top-2" />
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="pl-8 md:pl-12"
              >
                {/* Step number */}
                <div className="text-white/20 text-xs tracking-widest mb-1">
                  {step.number}
                </div>
                
                {/* Step title */}
                <h3 
                  className="text-white text-lg md:text-xl mb-2"
                  style={{ fontFamily: 'Instrument Serif, serif' }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              
              {/* Divider */}
              {index < steps.length - 1 && (
                <div className="mt-8 mb-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
