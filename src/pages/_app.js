import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
   subsets: ['latin'],
   variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.datdev.click/" />
            <meta property="og:title" content="ttd4t | Home Page" />
            <meta
               property="og:description"
               content="Write something about my self :)"
            />
            <meta
               property="og:image"
               content="https://www.datdev.click/public/images/profile/avt-pic-1.jpg"
            />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.datdev.click/" />
            <meta property="twitter:title" content="ttd4t | Home Page" />
            <meta
               property="twitter:description"
               content="Write something about my self :)"
            />
            <meta
               property="twitter:image"
               content="https://www.datdev.click/public/images/profile/avt-pic-1.jpg"
            />

            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main
            className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
         </main>
      </>
   );
}
