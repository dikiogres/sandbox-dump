import React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Sun = () => {
  return (
    <Layout>
      <Seo templateTitle='Card Overlay Sandbox' />

      <section className=''>
        <div className='layout min-h-screen py-20'>
          <div className='sun'></div>
        </div>
      </section>
    </Layout>
  );
};

export default Sun;
