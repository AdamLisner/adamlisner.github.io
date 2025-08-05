/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all your React components for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette based on your images
        'primary-green': '#00a650',
        'secondary-green': '#00d65b',
        'lime': {
          500: '#65a30d', // A slightly darker, more accessible lime for the button
          600: '#4d7c0f',
        },
        'dark-bg': '#111827',      // bg-gray-900
        'dark-card': '#1f2937',   // bg-gray-800
        'dark-input': '#374151',  // bg-gray-700
      },
      fontFamily: {
        // Sets Inter as the default font, matching the design
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}