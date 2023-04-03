import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { DiscordIcon, FacebookIcon, GithubIcon, InstagramIcon } from './Icon';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = '' }) => {
   const router = useRouter();
   return (
      <Link href={href} className={`${className} relative group`}>
         {title}

         <span
            className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
               router.asPath === href ? 'w-full' : 'w-0'
            }`}>
            &nbsp;
         </span>
      </Link>
   );
};

const NavBar = () => {
   return (
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
         <nav>
            <CustomLink href="/" title="Home" className="mr-4" />
            <CustomLink href="/about" title="About" className="mx-4" />
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink href="/articles" title="Articles" className="ml-4" />
         </nav>
         <nav className="flex items-center justify-center flex-wrap">
            <motion.a
               href="https://www.facebook.com/ttd4t/"
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
               href="https://github.com/ttd4t"
               target={'_blank'}
               whileHover={{ y: -2 }}
               whileTap={{ scale: 0.9 }}
               className="w-6 mx-3">
               <GithubIcon />
            </motion.a>
            <motion.a
               href="https://www.instagram.com/ttd4t._/"
               target={'_blank'}
               whileHover={{ y: -2 }}
               whileTap={{ scale: 0.9 }}
               className="w-6 ml-3">
               <InstagramIcon />
            </motion.a>
         </nav>

         <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
         </div>
      </header>
   );
};

export default NavBar;
