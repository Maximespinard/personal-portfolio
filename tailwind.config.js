module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#1a0b2e',
        'main-background': '#11071f',
        'main-purple': '#7127ba',
        'button-bg': '#2c1250',
        'button-border': '#693b93',
        'bright-purple': '#4f228d',
        'stack-bg': '#251c31',
      },
      fontFamily: {
        mono: ['monospace', 'sans-serif'],
      },
      fontSize: {
        tiny: '0.65rem',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #130428 7%, #251043 34%, #38126d 57%, #261045 85%, #190634 100%)',
        'project-card-gradient':
          'linear-gradient(to bottom right, rgba(79, 70, 229, 0.3), rgba(124, 58, 237, 0.1))',
      },
    },
  },
  plugins: [],
};
