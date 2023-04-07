/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
   content: [
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx}',
   ],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            mont: ['var(--font-mont)', ...fontFamily.sans],
         },
         colors: {
            dark: '#1b1b1b',
            light: '#f5f5f5',
            primary: '#41c375',
            primaryDark: '#58E6D9',
            insColor1: '#ffd676',
            insColor2: '#f05c3c',
            insColor3: '#c22f86',
            insColor4: '#5c6cb2',
         },
         animation: {
            'spin-slow': 'spin 8s linear infinite',
         },
         backgroundImage: {
            circularLight:
               'repeating-radial-gradient(#41c375 2px,#f5f5f5 6px,#f5f5f5 100px);',
            circularDark:
               'repeating-radial-gradient(#41c375 2px,#1b1b1b 6px,#1b1b1b 100px);',
            circularLightLg:
               'repeating-radial-gradient(#41c375 2px,#f5f5f5 5px,#f5f5f5 80px)',

            circularDarkLg:
               'repeating-radial-gradient(#41c375 2px,#1b1b1b 6px,#1b1b1b 80px)',

            circularLightMd:
               'repeating-radial-gradient(#41c375 2px,#f5f5f5 5px,#f5f5f5 60px)',

            circularDarkMd:
               'repeating-radial-gradient(#41c375 2px,#1b1b1b 6px,#1b1b1b 60px)',

            circularLightSm:
               'repeating-radial-gradient(#41c375 2px,#f5f5f5 5px,#f5f5f5 40px)',

            circularDarkSm:
               'repeating-radial-gradient(#41c375 2px,#1b1b1b 4px,#1b1b1b 40px)',
         },
      },
      screens: {
         '2xl': { max: '1535px' },
         // => @media (max-width: 1535px)

         xl: { max: '1279px' },
         // => @media (max-width: 1279px) { ... }

         lg: { max: '1023px' },
         // => @media (max-width: 1023px) { ... }

         md: { max: '767px' },
         // => @media (max-width: 767px) { ... }

         sm: { max: '639px' },
         // => @media (max-width: 639px) { ... }

         xs: { max: '479px' },
         // => @media (max-width: 479px) { ... }
      },
   },
   plugins: [],
};
