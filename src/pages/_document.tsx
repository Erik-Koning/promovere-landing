import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
   render() {
      return (
         <Html>
            <body>
               <Head>
                  <meta property='og:title' content='Promovere' key='title' />
                  <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                  <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                  <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                  <link rel='manifest' href='/site.webmanifest' />
                  <meta name='theme-color' content='#e7ecff' />
               </Head>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
