import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex justify-between items-start flex-wrap gap-8">
          {/* Left: Logo and Tagline */}
          <div>
            <div 
              className="text-2xl text-white"
              style={{ fontFamily: 'Instrument Serif, serif' }}
            >
              PLR Robotics
            </div>
            <div className="text-white/30 text-sm mt-2">
              Next-generation industrial robotics
            </div>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-white/40">Call Us:</span>
                <a href="tel:+917058091580" className="hover:text-white transition-colors">
                  +91 7058091580
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-white/40">Email Us:</span>
                <a href="mailto:contact@plrobotics.com" className="hover:text-white transition-colors">
                  contact@plrobotics.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Navigation Columns */}
          <div className="flex gap-12">
            {/* Column 1: Solutions */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Solutions
              </div>
              <div className="space-y-2">
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  COBOT Systems
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  SCARA Units
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  Delta Robots
                </a>
              </div>
            </div>
            
            {/* Column 2: Company */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Company
              </div>
              <div className="space-y-2">
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  About
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  Process
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Column 3: Connect */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Connect
              </div>
              <div className="space-y-2">
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/50 text-sm hover:text-white block transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-white/20 text-xs">
          <div>
            © 2026 PLR Robotics. All rights reserved.
          </div>
          <div>
            Built for the future of industry
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
