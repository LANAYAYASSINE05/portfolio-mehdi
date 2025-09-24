import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      id: 1,
      title: "Haier Maroc : Sponsoring Stratégique avec la FRMF",
      category: "brand",
      description: "Accroître la notoriété de la marque Haier et renforcer son image au Maroc à travers une alliance stratégique avec la Fédération Royale Marocaine de Football (FRMF).",
      context: "Objectif : Accroître la notoriété de la marque Haier et renforcer son image au Maroc à travers une alliance stratégique avec la Fédération Royale Marocaine de Football (FRMF).",
      strategy: "En tant que Trafic manager et Media Buyer, j'ai géré des campagnes de sponsoring axées sur les interactions et la notoriété, en utilisant les plateformes Instagram et Facebook pour maximiser l'engagement et la portée.",
      results: [
        { metric: "18.6M", label: "Vues Cumulées", description: "Visibilité Exceptionnelle : Le partenariat a généré plus de 18,6 millions de vues cumulées." },
        { metric: "11.3%", label: "Taux d'Engagement Instagram", description: "Engagement Profond sur Instagram : Le taux d'interaction sur Instagram a atteint environ 11,3 %, démontrant une forte capacité à générer un engagement qualifié." },
        { metric: "0.0004$ - 0.01$", label: "Coût par Résultat", description: "Coût par Résultat Ultra-Compétitif : Une campagne d'interactions a été menée avec un coût par résultat extrêmement bas, oscillant entre 0,0004 $ et 0,01 $." },
        { metric: "926 876", label: "Personnes Uniques", description: "Portée Massive : La campagne a atteint plus de 926 876 personnes uniques." },
        { metric: "17 353", label: "Nouveaux Abonnés Instagram", description: "Création de Communauté : Le travail a permis de transformer l'intérêt en adhésion durable, avec 17 353 nouveaux abonnés sur Instagram et 15 700 suivis sur Facebook, renforçant la communauté Haier." }
      ],
      technologies: ["Meta Ads", "Facebook", "Instagram", "Sponsoring", "FRMF"],
      image: "/assets/haier img.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Les Résidences du Golf à Saïdia : Génération de Leads Qualifiés",
      category: "lead",
      description: "Générer des leads qualifiés auprès des MRE, investisseurs et clientèle haut de gamme intéressés par l'immobilier premium dans la région de l'Oriental (Saïdia et environs), grâce à une stratégie mixte Meta Ads & Google Ads.",
      context: "Objectif : Générer des leads qualifiés auprès des MRE, investisseurs et clientèle haut de gamme intéressés par l'immobilier premium dans la région de l'Oriental (Saïdia et environs), grâce à une stratégie mixte Meta Ads & Google Ads.",
      strategy: "En tant que Media Buyer & Traffic Manager, j'ai conçu et déployé le plan média (Google & Meta), paramétré les campagnes, ciblé les MRE, investisseurs et clientèle haut de gamme avec précision, optimisé en continu (A/B tests, enchères) et assuré le tracking avancé pour garantir des leads qualifiés et performants.",
      results: [
        { metric: "933", label: "Leads Totaux", description: "Résultats combinés : 933 leads au total, dont 606 qualifiés avec un CPL global de 18,3 MAD." },
        { metric: "412", label: "Leads Meta Ads", description: "Meta Ads (Budget 8 000 MAD) : 412 leads collectés via formulaires et WhatsApp, 67% qualifiés (≈276 prospects sérieux)." },
        { metric: "19.4 MAD", label: "CPL Meta Ads", description: "CPL compétitif à 19,4 MAD avec CTR moyen 3,9%, supérieur au benchmark immobilier (~2,5%)." },
        { metric: "521", label: "Leads Google Ads", description: "Google Ads (Budget 9 000 MAD) : 5 480 clics qualifiés, CTR 6,2%, 521 prospects générés via site et WhatsApp." },
        { metric: "17.3 MAD", label: "CPL Google Ads", description: "CPL moyen de 17,3 MAD, inférieur à la moyenne du marché (20-25 MAD). Optimisation des enchères → réduction CPC de 4,1 à 3,4 MAD (-17%)." }
      ],
      technologies: ["Google Ads", "Meta Ads", "A/B Testing", "Tracking", "WhatsApp"],
      image: "/assets/residences du golf.jpeg.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Medina Mall Saïdia : Lancement & Revitalisation d'un Projet d'État",
      category: "brand",
      description: "Promouvoir l'ouverture d'un espace culturel, familial et touristique au centre de Saïdia et renforcer sa visibilité auprès d'une audience locale, nationale et MRE à travers une stratégie digitale multi-plateformes.",
      context: "Objectif : Promouvoir l'ouverture d'un espace culturel, familial et touristique au centre de Saïdia et renforcer sa visibilité auprès d'une audience locale, nationale et MRE à travers une stratégie digitale multi-plateformes.",
      strategy: "En tant que Trafic Manager & Media Buyer, j'ai conçu et piloté un dispositif média digital basé sur Meta Ads (Facebook & Instagram), combinant campagnes de notoriété, interactions et trafic Instagram. L'approche a reposé sur un ciblage large (familles, jeunes, MRE) et des optimisations continues (A/B tests, ajustement de budgets et créatifs) pour maximiser la visibilité et l'engagement autour de l'événement d'ouverture.",
      results: [
        { metric: "1.65M", label: "Personnes Uniques", description: "Visibilité Exceptionnelle : Plus de 1,65M personnes uniques touchées et 1,7M impressions délivrées, consolidant la notoriété du projet dès son lancement." },
        { metric: "151 656", label: "Interactions", description: "Engagement Record : Plus de 151 656 interactions générées avec un coût par interaction ultra-compétitif de 0,002 $." },
        { metric: "3 100", label: "Visites Profil Instagram", description: "Trafic Qualifié : Plus de 3 100 visites de profil Instagram pour un CPC moyen de 0,05 $, validant l'intérêt fort de l'audience." },
        { metric: "459", label: "Nouveaux Abonnés", description: "Croissance Communautaire : +459 abonnés Instagram et +91 Facebook en un seul mois, créant une base digitale solide pour la suite." },
        { metric: "6.2M", label: "Vues Cumulées", description: "Puissance Vidéo : Plus de 6,2M vues cumulées (4,4M sur Facebook et 1,8M sur Instagram), avec des pics dépassant 1M de vues par jour lors de l'ouverture." }
      ],
      technologies: ["Meta Ads", "Facebook", "Instagram", "A/B Testing", "Video Marketing"],
      image: "/assets/Medina Mall Saidia.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Ariston : Exécution & Lancement de Campagnes Publicitaires",
      category: "consideration",
      description: "Exécution et lancement de campagnes publicitaires pour Ariston : déploiement opérationnel de campagnes multicanaux, gestion des partenariats sportifs (Juventus) et mise en œuvre d'initiatives de sponsoring d'événements. Focus sur l'exécution technique des campagnes, l'optimisation en temps réel et la génération de leads qualifiés via des campagnes digitales ciblées.",
      context: "Objectif : Exécuter et lancer des campagnes publicitaires pour Ariston, leader des solutions de confort thermique, en déployant opérationnellement des campagnes multicanaux, en gérant les partenariats sportifs (Juventus) et en mettant en œuvre des initiatives de sponsoring d'événements. Focus sur l'exécution technique, l'optimisation en temps réel et la génération de leads qualifiés.",
      strategy: "En tant que Media Buyer & Traffic Manager, j'ai exécuté et lancé des campagnes publicitaires pour Ariston. J'ai déployé opérationnellement des campagnes multicanaux (TV, digital, print), géré l'exécution du partenariat sportif avec Juventus, mis en œuvre des initiatives de sponsoring d'événements sectoriels, et optimisé en temps réel les performances des campagnes. L'approche s'est concentrée sur l'exécution technique des campagnes, l'optimisation continue des performances et la génération de leads qualifiés à travers des campagnes digitales ciblées, avec un suivi détaillé via captures d'écran des plateformes publicitaires.",
      results: [
        { metric: "2.25M", label: "Impressions Générées", description: "Visibilité Maximisée : Les initiatives de sponsoring et campagnes publicitaires ont généré plus de 2,25 millions d'impressions, renforçant significativement la présence de la marque sur le marché." },
        { metric: "5 400+", label: "Clics Site Web", description: "Trafic Qualifié : Les campagnes multicanaux ont conduit à plus de 5 400 clics sur le site web, démontrant l'efficacité des stratégies de media buying mises en place." },
        { metric: "285+", label: "Leads Qualifiés", description: "Conversion Optimisée : Plus de 285 leads qualifiés générés grâce aux campagnes de sponsoring et aux initiatives publicitaires ciblées." },
        { metric: "Juventus", label: "Partenariat Sportif", description: "Sponsoring Stratégique : Négociation et gestion du partenariat régional avec Juventus, associant la marque à des valeurs de performance et d'excellence." }
      ],
      technologies: ["Campaign Execution", "Media Buying", "Traffic Management", "Performance Optimization", "Screenshots Tracking"],
      image: "/assets/Ariston.jpg",
      link: "#"
    }
  ]

  const filters = [
    { 
      key: 'all', 
      label: 'Tous les projets',
      icon: (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      key: 'brand', 
      label: 'Brand Awareness',
      icon: (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      key: 'lead', 
      label: 'Lead Generation',
      icon: (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      key: 'consideration', 
      label: 'Consideration',
      icon: (
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900/20 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-text">Mes</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projets
            </span>
          </motion.h2>
          <motion.p
            className="text-text-light text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Découvrez mes cas clients et les résultats obtenus pour mes clients dans différents secteurs
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center text-xs xs:text-sm ${
                activeFilter === filter.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-800 text-text-light hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-3 xs:w-4 h-3 xs:h-4 mr-1 xs:mr-2">{filter.icon}</span>
              <span className="hidden xs:inline">{filter.label}</span>
              <span className="xs:hidden">{filter.label.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Counter */}
        <motion.div
          className="text-center mb-8 xs:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-text-muted text-sm xs:text-base">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} 
            {activeFilter !== 'all' && ` en ${filters.find(f => f.key === activeFilter)?.label.toLowerCase()}`}
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="dashboard-card overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(108, 99, 255, 0.1)"
              }}
            >
              {/* Project Image */}
              <div className={`h-40 xs:h-48 sm:h-64 lg:h-80 flex items-center justify-center relative overflow-hidden group ${
                project.id === 1 
                  ? 'bg-black' 
                  : project.id === 2
                  ? 'bg-[#1a3a2e]'
                  : project.id === 3
                  ? 'bg-[#DEDFE4]'
                  : project.id === 4
                  ? 'bg-[#CDC6B3]'
                  : 'bg-gradient-to-br from-primary/20 to-accent/20'
              }`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-2 xs:top-4 left-2 xs:left-4">
                  <span className={`px-2 xs:px-3 py-0.5 xs:py-1 rounded-full text-xs font-semibold ${
                    project.category === 'brand' 
                      ? 'bg-primary/90 text-white glow-effect' 
                      : project.category === 'lead'
                      ? 'bg-accent/90 text-white glow-effect-accent'
                      : 'bg-green-500/90 text-white glow-effect-green'
                  }`}>
                    {project.category === 'brand' ? 'Brand' : 
                     project.category === 'lead' ? 'Lead' : 
                     'Consideration'}
                  </span>
                </div>
                
                {/* Floating Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${
                      i % 2 === 0 ? 'bg-primary' : 'bg-accent'
                    }`}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + (i % 2) * 40}%`
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>

              {/* Project Content */}
              <div className="p-3 xs:p-4 sm:p-6 lg:p-8">
                {/* Project Title */}
                <motion.h3
                  className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-text mb-2 xs:mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                {/* Project Description */}
                <motion.p
                  className="text-text-light mb-3 xs:mb-4 sm:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>


                {/* Strategy */}
                <motion.div
                  className="mb-3 xs:mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-text mb-1 xs:mb-2">Stratégie</h4>
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{project.strategy}</p>
                </motion.div>

                {/* Key Results */}
                <motion.div
                  className="mb-3 xs:mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-text mb-1 xs:mb-2 sm:mb-3">Résultats Clés</h4>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-1.5 xs:space-x-2 sm:space-x-3">
                        <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1 xs:mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-primary font-semibold text-xs xs:text-sm sm:text-base">{result.metric}</span>
                          <span className="text-text-muted text-xs sm:text-sm ml-1 sm:ml-2">{result.label}</span>
                          <p className="text-text-muted text-xs mt-0.5 xs:mt-1">{result.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mb-3 xs:mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={
                      project.id === 1 ? "/uploads/Haier Morocco × FRMF.pdf" :
                      project.id === 2 ? "/uploads/Résidences du Golf.pdf" :
                      project.id === 3 ? "/uploads/Medina Mall Saidia.pdf" :
                      project.id === 4 ? "/uploads/ARISTON.pdf" :
                      "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center glow-effect text-xs xs:text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voir le projet
                    <motion.svg
                      className="ml-1 xs:ml-2 w-3 xs:w-4 h-3 xs:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                  <motion.a
                    href={
                      project.id === 1 ? "/uploads/Haier Morocco × FRMF.pdf" :
                      project.id === 2 ? "/uploads/Résidences du Golf.pdf" :
                      project.id === 3 ? "/uploads/Medina Mall Saidia.pdf" :
                      project.id === 4 ? "/uploads/ARISTON.pdf" :
                      "#"
                    }
                    download={
                      project.id === 1 ? "Haier_Morocco_FRMF.pdf" :
                      project.id === 2 ? "Residences_du_Golf.pdf" :
                      project.id === 3 ? "Medina_Mall_Saidia.pdf" :
                      project.id === 4 ? "ARISTON.pdf" :
                      "projet.pdf"
                    }
                    className="px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 border border-gray-600 text-text-light rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center text-xs xs:text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.svg
                      className="w-3 xs:w-4 h-3 xs:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 xs:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-6 xs:px-8 py-3 xs:py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center mx-auto text-sm xs:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer un projet
            <motion.svg
              className="ml-1 xs:ml-2 w-4 xs:w-5 h-4 xs:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects