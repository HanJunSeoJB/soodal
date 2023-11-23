/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      translate: {
        '360': '360px',
        '60': '60px'
      },
      width: {
        '897': '897px'
      },
      height: {
        '30px': '30px',
        '140': '140px',
        '58': '58px',
        '40': '40px'
      },
      gap: {
        '127': '127px',
        '108': '108px'
      },
      margin: {
        '10': '10%'
      },
      fontSize: {
        '19': '19px',
      }
    },
  },
  plugins: [],
}
