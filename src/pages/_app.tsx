/** @format */
import React from "react";
import logger from "@/utils/logger";
import Layout from "@/components/Layout";

import "@/styles/global.css";

export function reportWebVitals(metric) {
  logger.info(metric);
}

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
