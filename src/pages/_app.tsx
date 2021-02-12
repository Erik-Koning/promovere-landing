import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

import "../animations.css";

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider resetCSS theme={theme}>
         <Head>
            <title>Promovere</title>
         </Head>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}

export default MyApp;
