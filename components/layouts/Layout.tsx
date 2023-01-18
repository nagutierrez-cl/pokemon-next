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
                
                {
                    title
                        ? 
                            <>
                                <meta name="description" content={`Info about ${ title }`} />
                                <meta property="og:title" content={`Info about ${ title }`}/>
                                <meta property="og:description" content={`This page is about ${ title }`} />
                            </>
                        : 
                            <>
                                <meta name="description" content={`Info about Pokémons`} />
                                <meta property="og:title" content={`Info about Pokémons`}/>
                                <meta property="og:description" content={`This page is about Pokémons`} />
                            </>
                }

                <meta name="keywords" content={`${ title }. pokemon, pokedex`} />

                <meta property="og:image" content={`${ origin }/banner.png`} />
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
