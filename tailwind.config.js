/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B4D8', // Bleu néon primaire - look moderne façon dashboard/analytics
        secondary: '#121212', // Gris anthracite secondaire
        accent: '#9EF01A', // Vert lime accent - look moderne façon dashboard/analytics
        background: '#121212', // Gris anthracite fond - look moderne façon dashboard/analytics
        text: '#E0E0E0', // Gris clair texte principal
        'text-light': '#B0B0B0', // Gris moyen texte secondaire
        'text-muted': '#808080', // Gris foncé texte atténué
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
