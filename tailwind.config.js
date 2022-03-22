module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      tablet: {max: '1039px'},
      desktop: '1040px',
    },
    maxWidth: {
      700: '700px',
    },
    minHeight: {
      main: `calc(100vh - 120px)`,
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      xmd: '1.125rem',
      title: '2.125rem',
      subtitle: '1.25rem',
    },
  },
  plugins: [],
};
