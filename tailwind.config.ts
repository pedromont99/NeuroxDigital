/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DB591",
        "primary-dark": "#1A8C6E",
        support: "#0EA5E9",
        light: "#F0FBF8",
        dark: "#1C2B38",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to bottom right, #1A8C6E, #2DB591, #0EA5E9)",
        'shimmer-gradient': "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;