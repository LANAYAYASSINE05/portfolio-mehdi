import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="container-custom px-4 sm:px-6">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-text mb-3 sm:mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                RHANIM MEHDI
              </motion.h3>
              <p className="text-text-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Traffic Manager & Media Buyer spécialisé dans l'acquisition digitale et l'optimisation des campagnes publicitaires. 
                J'accompagne les entreprises dans leur croissance en maximisant leur ROI sur les plateformes 
                Meta Ads et Google Ads avec une approche data-driven et des résultats mesurables.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1 sm:space-y-2">
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-primary">Email:</span> mehdi.rhanim.37@gmail.com
                </p>
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-primary">Téléphone:</span> +212 698 773 783
                </p>
                <p className="text-text-light text-xs sm:text-sm">
                  <span className="text-primary">Localisation:</span> Casablanca, Maroc
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-text mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: 'Accueil', id: 'hero' },
                  { name: 'À propos', id: 'about' },
                  { name: 'Compétences', id: 'skills' },
                  { name: 'Expérience', id: 'experience' },
                  { name: 'Formation', id: 'education' },
                  { name: 'Méthodologie', id: 'methodology' },
                  { name: 'Projets', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-text-light hover:text-primary transition-colors duration-300 text-left text-xs sm:text-sm"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-text mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Campagnes Meta Ads',
                  'Google Ads (SEA)',
                  'Planification Média',
                  'Optimisation ROI',
                  'Tests A/B',
                  'Reporting & Analytics',
                  'Stratégie d\'Acquisition',
                  'Audit de Campagnes'
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    className="text-text-light text-xs sm:text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-text-muted text-xs sm:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 RHANIM MEHDI. Tous droits réservés.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer