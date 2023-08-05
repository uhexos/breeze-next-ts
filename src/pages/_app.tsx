import 'tailwindcss/tailwind.css'

import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';


function App({ Component, pageProps }: AppProps) {
    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}
export default App
