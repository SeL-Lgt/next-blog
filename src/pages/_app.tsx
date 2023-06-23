import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import Layout from "@/components/Layout";
import Observer from "@/utils/observer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Observer = Observer;
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
