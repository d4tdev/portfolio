import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/avt-pic-1.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
   return (
      <>
         <Head>
            <title>ttd4t | Home Page</title>
            <meta name="description" content="Write something about my self :)" />
         </Head>
         <main className="flex items-center text-dark w-full min-h-screen">
            <Layout className="pt-0">
               <div className="flex items-center justify-between w-full">
                  <div className="w-1/2">
                     <Image
                        src={profilePic}
                        alt="ttd4t"
                        className="ml-12 w-[63%] h-auto rounded-[50%]"
                     />
                  </div>
                  <div className="w-1/2 flex flex-col items-center self-center">
                     <AnimatedText
                        text="Make the future into reality with code and logic."
                        className="!text-6xl !text-left"
                     />
                     <p className="my-5 text-base font-medium">
                        As a skilled Back-End developer, I do my best with my
                        brain to turn ideas into logical code.Explore my latest
                        projects and articles, showcasing my expertise in
                        Node.js & JS and web development.
                     </p>
                     <div className="flex items-center self-start mt-2">
                        <Link
                           href="/cv_ttd.pdf"
                           target={'_blank'}
                           className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                           download={true}>
                           Resume <LinkArrow className={'w-6 ml-1'} />
                        </Link>
                        <Link
                           href="mailto:jsmsj04@gmail.com"
                           target={'_blank'}
                           className="ml-4 text-lg font-medium capitalize text-dark underline">
                           Contact
                        </Link>
                     </div>
                  </div>
               </div>
            </Layout>
            <HireMe />
            <div className="absolute right-8 bottom-8 inline-block w-24">
               <Image src={lightBulb} alt="ttd4t" className="w-full h-auto" />
            </div>
         </main>
      </>
   );
}
