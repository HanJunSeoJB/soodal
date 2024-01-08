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
        '897': '897px',
        '700': '700px',
        '315': '315px',
        '1200': '1200px',
        '105': '105px',
        '1000': '1000px',
        '70' : '70px',
      },
      height: {
        '30px': '30px',
        '140': '140px',
        '58': '58px',
        '40': '40px',
        '216': '216px',
        '3436': '3436px',
        '138': '138px',
        '92': '92px',
        '26': '26px',
        '270': '270px',
        '70' : '70px',
        '26' : '26px',
      },
      gap: {
        '127': '127px',
        '108': '108px',
        '54': '54px',
        '50': '50px',
        '22' : '22px',
      },
      margin: {
        '10': '10%'
      },
      fontSize: {
        '19': '19px',
        '17': '17px',
        '14': '14px',
      },
      colors: {
        'grey': '#707070',
        'skyblue': '#A4D0FD',
        'lightgrey': '#F6F6F6',
        'blue': '#306EB3',
        'darkblue': '#005CA6',
        'fontblue': '#109FFF',
        'star_blue': '#1E4F85',
        'lightgrey': '#E8EDF3',
      },
      boxShadow: {
        'little': 'inset 0 8px 4px 0 rgb(0 0 0 / 0.05)',
        'hi': '0 0 0 -16px rgb(0 0 0 / 0.05)'
      },
      borderWidth: {
        '0.5': '0.5px',
        '0.25': '0.25px',
      }
    },
  },
  plugins: [],
}
