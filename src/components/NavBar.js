import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
   DiscordIcon,
   FacebookIcon,
   GithubIcon,
   InstagramIcon,
   MoonIcon,
   SunIcon,
} from './Icon';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
   const router = useRouter();
   return (
      <Link href={href} className={`${className} relative group`}>
         {title}

         <span
            className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${
               router.asPath === href ? 'w-full' : 'w-0'
            }`}>
            &nbsp;
         </span>
      </Link>
   );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
   const router = useRouter();

   const handleClick = () => {
      toggle();
      router.push(href);
   };

   return (
      <button
         href={href}
         className={`${className} relative group text-light dark:text-dark my-2`}
         onClick={handleClick}>
         {title}

         <span
            className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-primary ${
               router.asPath === href ? 'w-full' : 'w-0'
            }`}>
            &nbsp;
         </span>
      </button>
   );
};

const NavBar = () => {
   const [darkMode, setDarkMode] = useThemeSwitcher();
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className="z-10 max-h-10vh w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative md:px-12 lg:px-16 sm:px-8">
         <button
            className="flex-col justify-center items-center hidden lg:flex"
            onClick={handleClick}>
            <span
               className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
               }`}></span>
            <span
               className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
               }`}></span>
            <span
               className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
               }`}></span>
         </button>

         <div className="w-full flex justify-between items-center lg:hidden">
            <nav>
               <CustomLink href="/" title="Home" className="mr-4" />
               <CustomLink href="/about" title="About" className="mx-4" />
               <CustomLink href="/projects" title="Projects" className="mx-4" />
               <CustomLink href="/articles" title="Articles" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
               <motion.a
                  href="https://www.facebook.com/t.t.d4t/"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3">
                  <FacebookIcon />
               </motion.a>
               <motion.a
                  href="https://discord.com/users/968119621544710195"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3">
                  <DiscordIcon />
               </motion.a>
               <motion.a
                  href="https://github.com/d4tdev
"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3">
                  <GithubIcon />
               </motion.a>
               <motion.a
                  href="https://www.instagram.com/d4tdev
._//ttd4t._/"
                  target={'_blank'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 ml-3">
                  <InstagramIcon />
               </motion.a>

               <button
                  onClick={() =>
                     setDarkMode(darkMode === 'dark' ? 'light' : 'dark')
                  }
                  className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                     darkMode === 'light'
                        ? 'bg-dark text-light'
                        : 'bg-light text-dark'
                  }`}>
                  {darkMode === 'dark' ? (
                     <SunIcon className={'fill-dark'} />
                  ) : (
                     <MoonIcon className={'fill-dark'} />
                  )}
               </button>
            </nav>
         </div>

         {isOpen ? (
            <motion.div
               initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
               animate={{ scale: 1, opacity: 1 }}
               className="min-w-[70vw] z-30 flex-col flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
">
               <nav className="flex items-center flex-col justify-center">
                  <CustomMobileLink
                     href="/"
                     title="Home"
                     className=""
                     toggle={handleClick}
                  />
                  <CustomMobileLink
                     href="/about"
                     title="About"
                     className=""
                     toggle={handleClick}
                  />
                  <CustomMobileLink
                     href="/projects"
                     title="Projects"
                     className=""
                     toggle={handleClick}
                  />
                  <CustomMobileLink
                     href="/articles"
                     title="Articles"
                     className=""
                     toggle={handleClick}
                  />
               </nav>
               <nav className="flex items-center justify-center flex-wrap mt-2">
                  <motion.a
                     href="https://www.facebook.com/t.t.d4t/"
                     target={'_blank'}
                     whileHover={{ y: -2 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-6 mr-3 sm:mx-1">
                     <FacebookIcon />
                  </motion.a>
                  <motion.a
                     href="https://discord.com/users/968119621544710195"
                     target={'_blank'}
                     whileHover={{ y: -2 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-6 mx-3 sm:mx-1">
                     <DiscordIcon />
                  </motion.a>
                  <motion.a
                     href="https://github.com/d4tdev
"
                     target={'_blank'}
                     whileHover={{ y: -2 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1">
                     <GithubIcon />
                  </motion.a>
                  <motion.a
                     href="https://www.instagram.com/d4tdev
._/"
                     target={'_blank'}
                     whileHover={{ y: -2 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-6 ml-3 bg-gradient-to-tr from-insColor1 via-insColor2 via-insColor3 to-insColor4 dark:bg-gradient-to-tr dark:from-insColor1 dark:via-insColor2 dark:via-insColor3 dark:to-insColor4 rounded-full sm:mx-1">
                     <InstagramIcon />
                  </motion.a>

                  <button
                     onClick={() =>
                        setDarkMode(darkMode === 'dark' ? 'light' : 'dark')
                     }
                     className={`ml-3 xs:w-[30px] flex items-center justify-center rounded-full p-1 ${
                        darkMode === 'light'
                           ? 'bg-dark text-light'
                           : 'bg-light text-dark'
                     }`}>
                     {darkMode === 'dark' ? (
                        <SunIcon className={'fill-dark'} />
                     ) : (
                        <MoonIcon className={'fill-dark'} />
                     )}
                  </button>
               </nav>
            </motion.div>
         ) : null}

         <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
         </div>
      </header>
   );
};

export default NavBar;
