import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/avt-pic-1.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
   return (
      <>
         <Head>
            <title>d4tdev | Home Page</title>
            <meta name="title" content="d4tdev | Home Page" />
            <meta
               name="description"
               content="Write something about my self :)"
            />

            {/* <!-- Open Graph | Facebook | Zalo --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://datdev.id.vn/" />
            <meta property="og:title" content="d4tdev | Home Page" />
            <meta
               property="og:description"
               content="Write something about my self :Đ"
            />
            <meta property="og:image" content={profilePic} />
            <script
               async
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6991461966723365"
               crossorigin="anonymous"></script>
            <meta
               name="google-adsense-account"
               content="ca-pub-6991461966723365"></meta>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://datdev.id.vn/" />
            <meta property="twitter:title" content="d4tdev | Home Page" />
            <meta
               property="twitter:description"
               content="Write something about my self :)"
            />
            <meta property="twitter:image" content={profilePic} />
         </Head>
         <TransitionEffect />
         <main
            className="
         md:max-h-full lg:min-h-[79.8vh] xl:max-h-[75vh]
         min-h-[77.4vh] m-0 flex items-center text-dark w-full dark:text-light">
            <Layout className="pt-0 flex flex-col items-center md:p-16 sm:pt-8">
               <div className="max-w-[1400px] translate-y-14 flex items-center justify-between w-full lg:flex-col">
                  <div className="w-1/2 md:w-[75%]">
                     <Image
                        src={profilePic}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        alt="d4tdev"
                        className="ml-12 w-[63%] h-auto rounded-[50%] lg:hidden md:inline-block md:w-full xl:w-[77%] md:ml-0"
                     />
                  </div>
                  <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                     <AnimatedText
                        text="Make the future into reality with code and logic."
                        className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                     />
                     <p className="my-5 text-base font-medium md:text-sm sm:text-xs">
                        As a skilled Back-End developer, I do my best with my
                        brain to turn ideas into logical code.Explore my latest
                        projects and articles, showcasing my expertise in
                        Node.js & JS and web development.
                     </p>
                     <div className="flex items-center self-start mt-2 lg:self-center">
                        <Link
                           href="/resume_Tran_Tien_Dat.pdf"
                           target={'_blank'}
                           className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-primary hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                           download={true}>
                           Resume{' '}
                           <LinkArrow className={'w-6 xs:w-[18px] ml-1'} />
                        </Link>
                        <Link
                           href="mailto:ttdat.contact@gmail.com"
                           target={'_blank'}
                           className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                           Contact
                        </Link>
                     </div>
                  </div>
               </div>
            </Layout>
            <HireMe />
            <div className="absolute right-8 bottom-24 inline-block w-24 md:hidden">
               <Image src={lightBulb} alt="d4tdev" className="w-full h-auto" />
            </div>
         </main>
      </>
   );
}
