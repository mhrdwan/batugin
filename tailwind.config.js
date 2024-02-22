/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poopin': ['"Poopin"', 'sans-serif']
      },
      colors: {
        neutral: {
          1: '#FAFAFA',
          2: '#A1A1A1',
          3: '#5B5B5B',
          4: '#1F1F1F',
        },
        primary: {
          1: '#FDFCDA',
          2: '#FDDB1D',
          3: '#EACB1D',
          4: '#AD961A',
        },
        secondary: {
          1: '#FFE1C6',
          2: '#744419',
          3: '#633D19',
          4: '#4A2A0C'
        },
        accents: {
          1: '#FAE9EA',
          2: '#D1232A',
          3: '#901111',
          4: '#540E11'
        }
      },
     
    },
  },
  plugins: [],
};
