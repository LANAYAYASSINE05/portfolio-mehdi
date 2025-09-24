import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const experiences = [
    {
      id: 1,
      title: "Responsable Marketing Digital & Trafic Manager",
      company: "BS2M MEDIA GROUP",
      period: "juillet 2025 - septembre 2025 (3 mois)",
      location: "Casablanca-Settat, Maroc",
      description: "Conception, lancement et optimisation de campagnes Meta Ads, Google Ads & TikTok Ads (acquisition, conversion, notoriété). Élaboration et exécution de plans médias et stratégies digitales sur mesure : mix-canal, allocation budgétaire, calendrier et tests A/B.",
      achievements: [
        "Conception et optimisation de campagnes Meta Ads, Google Ads & TikTok Ads",
        "Élaboration de plans médias et stratégies digitales sur mesure avec tests A/B",
        "Gestion de budgets publicitaires jusqu'à 20 000 MAD/mois",
        "Réduction du CPA et amélioration du ROAS par optimisation continue",
        "Mise en place de dashboards analytiques personnalisés pour le suivi des KPIs",
        "Conseil stratégique : accompagnement de plus de 20 clients"
      ],
      technologies: ["Meta Ads", "Google Ads", "TikTok Ads", "Analytics", "A/B Testing", "Dashboards"]
    },
    {
      id: 2,
      title: "Media Buyer & Trafic Manager",
      company: "2MAG, Agence de Communication Digitale",
      period: "janvier 2025 - juin 2025 (6 mois)",
      location: "Casablanca-Settat, Maroc",
      description: "Lancement et suivi de campagnes Google Ads (Search & Display). Création et optimisation de campagnes Meta Ads (Facebook & Instagram). Analyse des performances : suivi des KPIs, reporting, recommandations. Gestion de pages sociales : stratégie de contenu, modération, community management.",
      achievements: [
        "Lancement et suivi de campagnes Google Ads (Search & Display)",
        "Création et optimisation de campagnes Meta Ads (Facebook & Instagram)",
        "Analyse des performances : suivi des KPIs, reporting, recommandations",
        "Gestion de pages sociales : stratégie de contenu et community management",
        "Coordination avec les équipes créatives pour cohérence des campagnes",
        "A/B Testing et adaptation continue pour améliorer le ROAS"
      ],
      technologies: ["Google Ads", "Meta Ads", "Community Management", "A/B Testing", "Content Strategy"]
    },
    {
      id: 3,
      title: "Vinus",
      company: "Vinus",
      period: "septembre 2023 - décembre 2024 (1 an 4 mois)",
      location: "Casablanca-Settat, Maroc",
      description: "Évolution professionnelle chez Vinus avec 3 rôles distincts couvrant le marketing opérationnel, la gestion clientèle et le management de projet.",
      subRoles: [
        {
          title: "Responsable Marketing Opérationnel",
          period: "juin 2024 - décembre 2024 (7 mois)",
          type: "Temps plein",
          achievements: [
            "Conception et déploiement de stratégies marketing globales pour la croissance de l'entreprise",
            "Optimisation des processus internes et solutions stratégiques pour les clients",
            "Gestion des campagnes publicitaires sur réseaux sociaux et Google",
            "Analyse des KPIs marketing et optimisation du ROI",
            "Mise en place de processus de satisfaction client"
          ],
          technologies: ["Marketing Digital", "Gestion de Projet", "Google Ads", "Social Media", "KPIs"]
        },
        {
          title: "Responsable clientèle",
          period: "décembre 2023 - mai 2024 (6 mois)",
          type: "Temps plein",
          achievements: [
            "Gestion des relations clients et optimisation des interactions",
            "Développement de solutions pour fluidifier les échanges clients",
            "Analyse des retours clients et ajustement des services marketing"
          ],
          technologies: ["Gestion Client", "Communication", "CRM", "Analyse"]
        },
        {
          title: "Stagiaire management de projet",
          period: "septembre 2023 - novembre 2023 (3 mois)",
          type: "Stage",
          achievements: [
            "Découverte du secteur d'activité et des opérations de l'entreprise",
            "Analyse des besoins clients et identification des axes stratégiques",
            "Participation à la structuration des processus internes",
            "Collaboration avec les équipes sur les défis infrastructure"
          ],
          technologies: ["Gestion de Projet", "Analyse", "Processus", "Collaboration"]
        }
      ],
      technologies: ["Marketing Digital", "Gestion de Projet", "Google Ads", "Social Media", "CRM", "Processus"]
    },
    {
      id: 4,
      title: "eBay",
      company: "eBay",
      period: "juillet 2022 - août 2023 (1 an 2 mois)",
      location: "Télétravail",
      description: "Expérience diversifiée chez eBay avec 3 rôles distincts couvrant la vente, l'analyse des standards et la gestion de magasin.",
      subRoles: [
        {
          title: "Conseiller ventes",
          period: "février 2023 - août 2023 (7 mois)",
          type: "Indépendant",
          achievements: [
            "Analyse des performances des annonces et stratégies d'amélioration",
            "Formation des vendeurs sur les outils eBay et bonnes pratiques",
            "Résolution des problématiques transactions et retours clients"
          ],
          technologies: ["eBay", "Formation", "Support Client", "Analyse de Performance"]
        },
        {
          title: "Seller Standards Analyst",
          period: "février 2023 - juillet 2023 (6 mois)",
          type: "Temps plein",
          achievements: [
            "Évaluation des performances vendeurs selon critères eBay (Below/Above/Top Rated)",
            "Analyse des KPIs et identification des problèmes de performance",
            "Collaboration avec équipes internes pour expérience utilisateur optimale"
          ],
          technologies: ["Analyse de Performance", "KPI", "eBay", "Qualité"]
        },
        {
          title: "Gérant de magasin",
          period: "juillet 2022 - janvier 2023 (7 mois)",
          type: "Freelance",
          achievements: [
            "Création et optimisation d'annonces pour augmenter les ventes",
            "Suivi des commandes et livraisons internationales",
            "Résolution des litiges clients et gestion des retours",
            "Sélection de produits rentables par analyse des tendances"
          ],
          technologies: ["E-commerce", "Gestion de Ventes", "Logistique", "Analyse de Tendances"]
        }
      ],
      technologies: ["eBay", "Formation", "Support Client", "Analyse de Performance", "E-commerce"]
    },
    {
      id: 5,
      title: "Assistant responsable clientèle",
      company: "Lydec",
      period: "janvier 2022 - juin 2022 (6 mois)",
      location: "Casablanca-Settat, Maroc",
      description: "Optimisation de la satisfaction client et des processus internes chez LYDEC. Identification des points de friction dans le parcours client LYDEC. Évaluation des dysfonctionnements liés aux délais et outils de communication. Analyse des réclamations clients LYDEC. Mise en place de solutions pour un suivi rapide et efficace des demandes.",
      achievements: [
        "Identification des points de friction dans le parcours client LYDEC",
        "Évaluation des dysfonctionnements liés aux délais et outils de communication",
        "Analyse des réclamations clients et mise en place de solutions",
        "Amélioration du suivi rapide et efficace des demandes"
      ],
      technologies: ["Analyse Client", "Processus", "Communication", "Résolution de Problèmes", "LYDEC"]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-background to-gray-900/20 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-text">Expérience</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professionnelle
            </span>
          </motion.h2>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Point */}
                <motion.div
                  className="absolute left-4 sm:left-6 lg:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-black transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                />

                {/* Content Card */}
                <motion.div
                  className={`w-full lg:w-5/12 ml-12 sm:ml-16 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-6 lg:pr-8' : 'lg:ml-auto lg:pl-6 lg:pl-8'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(108, 99, 255, 0.1)"
                  }}
                >
                  <div className="dashboard-card">
                    {/* Period Badge */}
                    <motion.div
                      className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 glow-effect"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.period}
                    </motion.div>

                    {/* Title & Company */}
                    <motion.h3
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-text mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.title}
                    </motion.h3>

                    <motion.h4
                      className="text-base sm:text-lg lg:text-xl text-primary mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.company}
                    </motion.h4>

                    <motion.p
                      className="text-text-muted text-xs sm:text-sm mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      📍 {exp.location}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      className="text-text-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.subRoles ? (
                        // Structure spéciale pour eBay avec sous-rôles
                        <div>
                          <h5 className="text-text font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Postes occupés :</h5>
                          <div className="grid grid-cols-1 gap-3 sm:gap-4">
                            {exp.subRoles.map((subRole, subIndex) => (
                              <motion.div
                                key={subIndex}
                                className="bg-gray-800/50 p-3 sm:p-4 rounded-lg border border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + subIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <h6 className="text-text font-semibold mb-2 text-xs sm:text-sm">
                                  {subRole.title}
                                </h6>
                                <div className="text-xs text-text-muted mb-2">
                                  {subRole.period}
                                </div>
                                <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-2 sm:mb-3">
                                  {subRole.type}
                                </div>
                                <ul className="space-y-1">
                                  {subRole.achievements.map((achievement, achIndex) => (
                                    <motion.li
                                      key={achIndex}
                                      className="flex items-start space-x-2"
                                      initial={{ opacity: 0, x: -10 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + subIndex * 0.1 + achIndex * 0.05 }}
                                      viewport={{ once: true }}
                                    >
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span className="text-text-light text-xs">{achievement}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Structure normale pour les autres expériences
                        <div>
                          <h5 className="text-text font-semibold mb-3">Réalisations clés :</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + achIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-text-light text-sm">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(108, 99, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
