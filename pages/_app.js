import Head from 'next/head';
import '@styles/globals.css';
import { MantineProvider } from '@mantine/core';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mr. Jayson Wong | Front-End Web Developer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta charSet="utf-8" />
        <meta name="author" content="Mr. Jayson Wong" />
        <meta
          name="description"
          content="Mr. Jayson Wong Personal Website and Portfolio"
        />
        <meta
          property="og:title"
          content="Mr. Jayson Wong | Front-End Web Developer"
        />
        <meta
          property="og:description"
          content="Mr. Jayson Wong Personal Website and Portfolio"
        />
        <meta property="og:url" content="https://mrjaysonwong.vercel.app/" />
        <link rel="icon" href="/jwicon.png" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Montserrat',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default MyApp;
