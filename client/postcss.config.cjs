// postcss.config.cjs
module.exports = {
  plugins: {
    autoprefixer: {
      flexbox: true,
      grid: true,
    },
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          minifyFontValues: true,
          minifySelectors: true,
          normalizeWhitespace: true,
          reduceIdents: false, // Preserve CSS animations
        },
      ],
    },
  },
};
