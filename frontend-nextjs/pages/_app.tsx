import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import constantSite from "../lib/constants/constantSite";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{constantSite.name}</title>

        <meta name="description" content={constantSite.description} />
        <link rel="icon" href={constantSite.favicon} />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
