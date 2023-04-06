import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y, className = '' }) => {
   return (
      <motion.div
         className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light ${className}`}
         whileHover={{ scale: 1.05 }}
         initial={{ x: 0, y: 0 }}
         whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
         viewport={{ once: true }}>
         {name}
      </motion.div>
   );
};

const Skills = () => {
   return (
      <>
         <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
         {/* Use repeating radial gradient() */}
         <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
            <motion.div
               className={`p-6 bg-primary flex items-center justify-center rounded-full font-semibold text-light shadow-dark cursor-pointer absolute dark:text-light dark:bg-primary`}
               whileHover={{ scale: 1.05 }}
               initial={{ x: 0, y: 0 }}
               whileInView={{ x: 0, y: 0 }}
               viewport={{ once: true }}>
               Web
            </motion.div>
            <Skill name="HTML" x="-20vw" y="20vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="Webpack" x="-30vw" y="2vw" />
            <Skill name="Github" x="-25vw" y="-10vw" />
            <Skill name="Postman" x="-10vw" y="5vw" />
            <Skill name="NodeJS" x="7vw" y="-8vw" />
            <Skill name="MongoDB" x="10vw" y="10vw" />
            <Skill name="MySQL" x="30vw" y="18vw" />
            <Skill name="Javascript" x="8vw" y="2vw" />
            <Skill name="Typescript" x="30vw" y="-2vw" />
            <Skill name="DiscordJS" x="20vw" y="-15vw" />
         </div>
      </>
   );
};

export default Skills;
