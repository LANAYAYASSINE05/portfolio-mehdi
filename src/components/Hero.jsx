import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-background via-gray-900 to-background flex items-center overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background/20" />
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Disponible pour de nouveaux projets
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-text block">Portfolio de</span>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                <Typewriter 
                  text="Traffic Manager & Media Buyer" 
                  speed={80}
                  delay={1000}
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                />
              </div>
            </motion.h1>

            {/* Name */}
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              RHANIM MEHDI
            </motion.h2>

            {/* Signature Identity */}
            <motion.div
              className="relative mb-6 sm:mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Signature Phrase */}
              <div className="relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <motion.div
                  className="text-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {/* Single Line */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                      La{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Performance
                      </span>
                      , Ma{' '}
                      <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        Priorité
                      </span>
                      .
                    </span>
                  </motion.div>
                  
                  {/* Divider */}
                  <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto mb-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  />
                  
                  {/* Single Line */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                      Les{' '}
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Résultats
                      </span>
                      , Mon{' '}
                      <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        Objectif
                      </span>
                      .
                    </span>
                  </motion.div>
                </motion.div>
                
                {/* Floating Accent Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-text-muted mb-6 sm:mb-8 lg:mb-10 max-w-2xl leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              Spécialisé dans l'acquisition digitale et l'optimisation des campagnes publicitaires. 
              J'accompagne les entreprises dans leur croissance en maximisant leur ROI sur les plateformes 
              Meta Ads et Google Ads.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
            >
              {['Meta Ads', 'Google Ads', 'SEA', 'Analytics', 'A/B Testing', 'ROI Optimization'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 border border-gray-700 rounded-full text-text-light text-xs sm:text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.9 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.5 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 glow-effect text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-gray-600 text-text-light rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#00B4D8"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.button>


              <motion.a
                href="https://www.linkedin.com/in/mehdi-rhanim/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0077B5] text-white rounded-xl font-semibold hover:bg-[#005885] transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 119, 181, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 3.7 }}
              >
                LinkedIn
                <motion.svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </motion.svg>
              </motion.a>
            </motion.div>

          </div>

          {/* Right Column - Visual Element */}
          <div className="relative lg:block hidden">
            <motion.div
              className="relative w-full h-96 lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Main Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              
              {/* Overlay Shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform -rotate-3"></div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-3 h-3 bg-primary rounded-full ${
                    i % 2 === 0 ? 'bg-primary' : 'bg-accent'
                  }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-text-muted rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero