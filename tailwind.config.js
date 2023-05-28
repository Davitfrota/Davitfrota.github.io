module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#3e764f',
        bg: '#fffdd0',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        about1: "url('./assets/about4.png')",
        about2: "url('./assets/about3.jpeg')",
        services: "url('./assets/react.png')",
      },
    },
  },
  plugins: [],
};
