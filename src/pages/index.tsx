import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

const sandbox = [
  {
    title: 'Card Overlay',
    route: '/sandbox/card-overlay',
  },
  {
    title: 'Sun',
    route: '/sandbox/sun',
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <h1 className='mt-4'>Sandbox Dump</h1>
            <p className='mt-2 text-sm text-gray-800'>
              A Repository for Sandbox Dump creativity purpose{' '}
            </p>
            <div className='mt-6'>
              <div className='mt-2 flex flex-wrap justify-center gap-2'>
                {sandbox.map(({ title, route }) => (
                  <ButtonLink key={route} href={route} variant='outline'>
                    {title}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
