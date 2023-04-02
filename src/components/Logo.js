import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
   return (
      <div className="flex items-center justify-center mt-2">
         <MotionLink
            href="/"
            className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
            whileHover={{
               scale: 1.05,
               backgroundColor: [
                  '#121212',
                  '#41c375',
                  'rgba(253,29,29,1)',
                  'rgba(252,176,69,1)',
                  '#41c375',
                  '#121212',
               ],
               transition: { duration: 1, repeat: Infinity },
            }}>
            TD
         </MotionLink>
      </div>
   );
};

export default Logo;
