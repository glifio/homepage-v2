import 'normalize.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRef } from 'react'
import { EnvironmentProvider } from '@glif/react-components'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const { displayName: pageName } = Component

  const url = 'https://glif.io'
  const title = pageName ? `Glif \u2013 ${pageName}` : 'Glif'
  const description = 'Interoperable tools for the Filecoin network'
  const keywords = [
    'glif',
    'filecoin',
    'fil',
    'blockchain',
    'cypto',
    'cyptocurrency',
    'explorer',
    'wallet',
    'safe',
    'nodes',
    'verifier',
    'staking',
  ].join(',')

  const headerCloseRef = useRef(() => {
    // Set by Header
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta
          name='viewport'
          content='width=480, maximum-scale=1, user-scalable=0'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/glifogmeta.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@glifio' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='/glifogmeta.png' />
        <link
          rel='apple-touch-icon'
          type='image/png'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#000000' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <EnvironmentProvider>
        <div onClick={() => headerCloseRef.current?.()}>
          <div id='header-and-page'>
            <Header headerCloseRef={headerCloseRef} />
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </EnvironmentProvider>
    </>
  )
}

export default MyApp
