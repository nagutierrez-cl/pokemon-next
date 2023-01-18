import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import { Navbar } from '../ui/Navbar';
import { Footer } from '../ui/Footer';

interface Props {
    children?: JSX.Element;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="nagutierrez-cl" />
        <meta name="description" content={`Información sobre el pokemon ${ title }`} />
        <meta name="keywords" content={`${ title }. pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${ title }`}/>
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
      </Head>

      <Navbar />

      <Box sx={{ height: '70px' }} />

      <main style={{
        backgroundColor: 'black',
        padding: '16px 0',
        minHeight: 'calc(100vh - 155px)'
      }}>
        { children }
      </main>

      <Footer />
    </>
  )
}
