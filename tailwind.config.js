module.exports = {
  content: [
      "./src/**/*.{js,jsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
      hex1: '50px',
      hex2: '18px',
      hex3: '45px',
      hex4: '35px'
    },
      extend: {
        spacing: {
          'fix': '2.75rem'
        }
      },
  },
  plugins: [],
}