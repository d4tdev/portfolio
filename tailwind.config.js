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
         },
         animation: {
            'spin-slow': 'spin 8s linear infinite',
         },
         backgroundImage: {
            circularLight:
               'repeating-radial-gradient(#41c375 2px,#f5f5f5 6px,#f5f5f5 100px);',
            circularDark:
               'repeating-radial-gradient(#41c375 2px,#1b1b1b 6px,#1b1b1b 100px);',
         },
      },
   },
   plugins: [],
};
