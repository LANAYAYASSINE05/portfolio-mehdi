# Personal Portfolio

A modern, responsive one-page portfolio built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, minimal design with elegant animations
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized**: Semantic HTML structure and meta tags
- 🌈 **Custom Color Palette**: Blue petrol (#0077B6) and burnt orange (#F77F00) accents
- ✨ **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- 📧 **Contact Form**: Mailto integration for easy contact

## Sections

1. **Hero/Intro** - Eye-catching headline with call-to-action buttons
2. **About Me** - Personal bio with photo placeholder and key stats
3. **Skills** - Animated progress bars for key competencies
4. **Projects** - Showcase of featured work with case studies
5. **Contact** - Contact form and social media links
6. **Footer** - Additional links and information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your own information:

- `src/components/Hero.jsx` - Name, role, and tagline
- `src/components/About.jsx` - Bio, stats, and photo
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Projects.jsx` - Your project portfolio
- `src/components/Contact.jsx` - Contact information and social links

### Styling

- Colors are defined in `tailwind.config.js`
- Custom CSS classes are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Adding Your Photo

Replace the placeholder in `src/components/About.jsx` with your actual photo:

```jsx
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name" 
  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
/>
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the portfolio or via email.
