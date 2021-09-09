import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  return <div className={darkMode ? 'dark' : ''}>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      titleTemplate = 'Michael Rausch Blog | %s'
    />
    
    <div className="fixed right-5 bottom-5 h-16 w-16 text-center pt-5 bg-gray-200 dark:bg-gray-800 rounded-full shadow-xl">
      <button onClick={() => setDarkMode(!darkMode)}>
        { darkMode ? <DarkModeButton/> : <LightModeButton/>}
      </button>
    </div>

    <Component {...pageProps} />
  </div>
}

const DarkModeButton: React.FC = () => {
  return (
    <svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 20 20" className="text-secondary text-2xl cursor-pointer" height="1em" width="1em" ><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
  )
}

const LightModeButton: React.FC = () => {
  return (
    <svg stroke="#000" fill="#000" stroke-width="0" viewBox="0 0 20 20" className="text-secondary text-2xl cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
  )
}


export default MyApp
