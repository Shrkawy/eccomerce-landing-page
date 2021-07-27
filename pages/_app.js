import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/favicon.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
