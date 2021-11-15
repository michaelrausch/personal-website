import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const isProd = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  return <div className={darkMode ? 'dark' : ''}>
    <DefaultSeo
      titleTemplate="Michael Rausch | %s"
      description="A Christchurch based software engineer who specializes in creating websites and apps for small and medium-sized businesses"
      canonical="https://michaelrausch.nz"
      openGraph={{
        type: 'website',
        locale: 'en_NZ',
        url: 'https://michaelrausch.nz',
        site_name: 'Michael Rausch | Web and App Development',
      }}
    />

    <Component {...pageProps} />
  </div>
}

export default MyApp
