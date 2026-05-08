import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const RobotsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const robots = [
    {
      name: "COBOT X1",
      tag: "Collaborative Intelligence",
      description: "Advanced AI-powered collaborative robots with adaptive learning capabilities, designed to work seamlessly alongside human operators in complex manufacturing environments."
    },
    {
      name: "SCARA PRO",
      tag: "Ultra Precision", 
      description: "Next-generation SCARA robots featuring micron-level accuracy and real-time vision systems for high-precision assembly, testing, and quality control applications."
    },
    {
      name: "DELTA MAX",
      tag: "Quantum Speed",
      description: "Revolutionary delta robots with AI-driven motion optimization, delivering unmatched speed and efficiency for high-throughput sorting, packaging, and material handling."
    }
  ];

  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="text-white/40 text-xs tracking-widest uppercase">Our Systems</span>
        </div>
        
        {/* Heading */}
        <h2 
          className="text-center text-5xl md:text-7xl text-white mb-16"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          Advanced. Intelligent. <em className="italic text-white/40">Reliable.</em>
        </h2>

        {/* Robots Grid */}
        <div className="grid-cols-1 md:grid-cols-3 gap-6 grid">
          {robots.map((robot, index) => (
            <motion.div
              key={robot.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group liquid-glass robotics-glow rounded-3xl overflow-hidden"
            >
              {/* Top Panel */}
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <h3 
                  className="text-3xl italic text-white/30"
                  style={{ fontFamily: 'Instrument Serif, serif' }}
                >
                  {robot.name}
                </h3>
              </div>
              
              {/* Body */}
              <div className="p-6">
                {/* Tag */}
                <div className="text-white/40 text-xs tracking-widest uppercase mb-3">
                  {robot.tag}
                </div>
                
                {/* Robot Name */}
                <h3 className="text-white text-xl mb-2">
                  {robot.name}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {robot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RobotsSection;
