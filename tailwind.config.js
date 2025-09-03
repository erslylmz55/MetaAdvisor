/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)', 
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'accent-gold': 'var(--color-accent-gold)',
      },
    },
  },
  plugins: [],
};