import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-gray-900/20 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Picture */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
            {/* Profile Circle */}
            <motion.div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
                {/* Profile Image */}
                <motion.img
                  src="/src/assets/profil.png"
                  alt="Rhanim Mehdi"
                  className="w-full h-full object-cover rounded-full"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-8 right-8 w-4 h-4 bg-primary rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-6 h-6 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 left-4 w-3 h-3 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full border border-primary/30"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full border border-accent/30"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <span className="text-text">À propos de</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RHANIM MEHDI
              </span>
            </motion.h2>

            {/* Role */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">Traffic Manager & Media Buyer</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-text-light leading-relaxed text-lg">
                Expert en acquisition digitale, développement de réputation et notoriété digitale, 
                je transforme les objectifs business en stratégies de croissance globale performantes, 
                orienté résultats.
              </p>
              
              <p className="text-text-light leading-relaxed text-lg">
                Mon expertise me permet de traduire les objectifs d'une entreprise en une stratégie 
                d'acquisition concrète, de développer l'image de marque et le branding, de sélectionner 
                les canaux les plus performants, et d'analyser les données pour garantir une croissance 
                mesurable et durable.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="dashboard-card">
                <h4 className="text-base font-semibold text-text mb-2">Analytics</h4>
                <p className="text-text-muted text-xs">Analyse de données et reporting personnalisé</p>
              </div>
              <div className="dashboard-card">
                <h4 className="text-base font-semibold text-text mb-2">Stratégie</h4>
                <p className="text-text-muted text-xs">Plans médias sur mesure et tests A/B</p>
              </div>
              <div className="dashboard-card">
                <h4 className="text-base font-semibold text-text mb-2">Branding</h4>
                <p className="text-text-muted text-xs">Développement d'identité de marque et notoriété digitale</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border border-gray-600 text-text-light rounded-lg font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#00B4D8"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About