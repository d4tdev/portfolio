import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';

const PrivacyPolicy = () => {
   // Render Privacy Policy page with generic content
   return (
      <>
         <Head>
            <title>d4tdev | Privacy Policy</title>
            <meta name="description" content="Privacy Policy for d4tdev" />
         </Head>
         <TransitionEffect />
         <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
               <AnimatedText
                  text="Privacy Policy"
                  className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
               />
               <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-start text-dark dark:text-light">
                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     1. Information Collection
                  </h2>
                  <p className="font-medium mb-8">
                     We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     2. Information Usage
                  </h2>
                  <p className="font-medium mb-8">
                     Any of the information we collect from you may be used in one of the following ways: to personalize your experience, to improve our website, to improve customer service, or to process transactions.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     3. Information Protection
                  </h2>
                  <p className="font-medium mb-8">
                     We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
                  </p>

                  <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                     4. Cookies
                  </h2>
                  <p className="font-medium mb-8">
                     We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                  </p>
               </div>
            </Layout>
         </main>
      </>
   );
};

export default PrivacyPolicy;
