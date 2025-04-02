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
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #130428 7%, #251043 34%, #38126d 57%, #261045 85%, #190634 100%)',
        'project-card-gradient':
          'linear-gradient(to bottom right, rgba(79, 70, 229, 0.3), rgba(124, 58, 237, 0.1))',
        'gradient-primary':
          'linear-gradient(135deg, #11071f 0%, #1a0b2e 50%, #2c1250 100%)',
        'gradient-purple':
          'linear-gradient(135deg, #7127ba 0%, #4f228d 50%, #2c1250 100%)',
        'gradient-dark':
          'linear-gradient(135deg, #0a0413 0%, #11071f 50%, #1a0b2e 100%)',
        'gradient-intense':
          'linear-gradient(to right, #11071f 0%, #251c31 25%, #2c1250 50%, #693b93 75%, #7127ba 100%)',
        'gradient-soft':
          'linear-gradient(to bottom right, #11071f, #1a0b2e, #4f228d, #7127ba)',
      },
    },
  },
  plugins: [],
};
