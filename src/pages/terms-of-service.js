import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';

const TermsOfService = () => {
   // Render Terms of Service page with generic content
   return (
      <>
         <Head>
            <title>d4tdev | Terms of Service</title>
            <meta name="description" content="Terms of Service for d4tdev" />
         </Head>
         <TransitionEffect />
         <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
               <AnimatedText
                  text="Terms of Service"
                  className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
               />
               <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-start text-dark dark:text-light">
                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     1. Acceptance of Terms
                  </h2>
                  <p className="font-medium mb-8">
                     By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     2. Use License
                  </h2>
                  <p className="font-medium mb-8">
                     Permission is granted to temporarily download one copy of the materials (information or software) on d4tdev&apos;s website for personal, non-commercial transitory viewing only.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     3. Disclaimer
                  </h2>
                  <p className="font-medium mb-8">
                     The materials on d4tdev&apos;s website are provided on an &apos;as is&apos; basis. d4tdev makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     4. Limitations
                  </h2>
                  <p className="font-medium mb-8">
                     In no event shall d4tdev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on d4tdev&apos;s website.
                  </p>
               </div>
            </Layout>
         </main>
      </>
   );
};

export default TermsOfService;
