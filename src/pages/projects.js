import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icon';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import projectDiscord from '../../public/images/projects/discordv14_thumbnail.png';
import projectAPIXSMB from '../../public/images/projects/xsmb_thumbnail.png';
import projectAPIEbook from '../../public/images/projects/ebook_thumnail.png.png';
import projectAPILetsFood from '../../public/images/projects/letsfood_thumbnail.png';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
   return (
      <div>
         <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link
               href={link}
               target="_blank"
               className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
               <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
               <span className="text-primary font-medium text-xl">{type}</span>
               <Link
                  href={link}
                  target="_blank"
                  className="hover:underline underline-offset-2">
                  <h2 className="my-2 w-full text-left text-4xl font-bold">
                     {title}
                  </h2>
               </Link>
               <p className="my-2 font-medium text-dark">{summary}</p>
               <div className="mt-2 flex items-center">
                  <Link href={github} target="_blank" className="w-10">
                     {' '}
                     <GithubIcon />
                  </Link>
                  <Link
                     href={link}
                     target="_blank"
                     className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
                     {' '}
                     Visit Project
                  </Link>
               </div>
            </div>
         </article>
      </div>
   );
};

const Project = ({ title, type, img, link, github }) => {
   return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
         <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
         <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg">
            <Image src={img} alt={title} className="w-full h-auto" />
         </Link>

         <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary font-medium text-xl">{type}</span>
            <Link
               href={link}
               target="_blank"
               className="hover:underline underline-offset-2">
               <h2 className="my-2 w-full text-left text-3xl font-bold">
                  {title}
               </h2>
            </Link>

            {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

            <div className="w-full mt-2 flex items-center justify-between">
               <Link
                  href={link}
                  target="_blank"
                  className="text-lg font-semibold">
                  {' '}
                  Visit
               </Link>
               <Link href={github} target="_blank" className="w-8">
                  {' '}
                  <GithubIcon />
               </Link>
            </div>
         </div>
      </article>
   );
};

const projects = () => {
   return (
      <>
         <Head>
            <title> ttd4t | Projects Page</title>
            <meta name="description" content="Some projects made by me" />
         </Head>
         <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
               <AnimatedText
                  text="Learning must go hand in hand with practice!"
                  className="mb-16"
               />

               <div className="grid grid-cols-12 gap-24 gap-y-32">
                  <div className="col-span-12">
                     <FeaturedProject
                        title="Discord Bot version 14"
                        img={projectDiscord}
                        summary="The project is created from discord.js to create a bot with many functions used in Discord (the most commonly used function is playing music). This project is quite popular among Discord users."
                        link="https://discord.com/api/oauth2/authorize?client_id=903232960415805510&permissions=8&scope=bot%20applications.commands"
                        type="Featured Project (use for Discord)"
                        github="https://github.com/ttd4t/discord-bot-v14"
                     />
                  </div>
                  <div className="col-span-6">
                     <Project
                        title="API XSMB"
                        img={projectAPIXSMB}
                        link="https://api-xsmb.cyclic.app/v1"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-xsmb-today"
                     />
                  </div>
                  <div className="col-span-6">
                     <Project
                        title="API One Piece"
                        img={projectAPIXSMB}
                        link="https://api-one-piece.cyclic.app/api/v1"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-one-piece"
                     />
                  </div>

                  <div className="col-span-12">
                     <FeaturedProject
                        title="API for website Ebook"
                        img={projectAPIEbook}
                        summary={`The project is created from Typescript along with NodeJS to create an API for a book-selling website. The project uses the MVC and client-server model. It was carried out by two people.`}
                        link="https://ban-sach-truc-tuyen.vercel.app"
                        type="Featured Project"
                        github="https://github.com/ttd4t/api-web-ban-sach"
                     />
                  </div>
                  <div className="col-span-6">
                     <Project
                        title="API for website Let's food"
                        img={projectAPILetsFood}
                        link="https://api-xsmb.cyclic.app/v1"
                        type="Featured Project"
                        github="https://github.com/ttd4t/api-xsmb-today"
                     />
                  </div>
                  <div className="col-span-6">
                     <Project
                        title="API XSMB"
                        img={projectAPIXSMB}
                        link="https://api-xsmb.cyclic.app/v1"
                        type="Featured Project"
                        github="https://github.com/ttd4t/api-xsmb-today"
                     />
                  </div>
               </div>
            </Layout>
         </main>
      </>
   );
};

export default projects;
