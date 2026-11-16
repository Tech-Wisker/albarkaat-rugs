import CollectionHome from '@/components/Collections/Home';
import Head from 'next/head';
import React from 'react';

const Collections = () => {
    return (
      <>
        <Head>
          <title>Collections | Albarkaat Overseas</title>
          <meta name="description" content="Browse all rug collections from Albarkaat Overseas. Find handmade carpets in a variety of styles, sizes, and designs for every space." />
          <meta property="og:title" content="Collections | Albarkaat Overseas" />
          <meta property="og:description" content="Explore our full range of handmade rug collections at Albarkaat Overseas." />
        </Head>
        <CollectionHome/>
      </>
    );
}

export default Collections;
