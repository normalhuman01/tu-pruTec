import { Layout } from "@/components/Layout";
import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Tu Prutec</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
