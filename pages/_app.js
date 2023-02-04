
{
  /* NPM IMPORTS
================================================================================================= */
}
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import { MathJaxContext } from "better-react-mathjax";

{
  /* STYLE IMPORTS
================================================================================================= */
}
import "../styles/globals.scss";
import "../styles/components/Header.scss";
import "../styles/fonts.scss";

{
  /* FONT IMPORTS
================================================================================================= */
}
import { exo2, source_code } from "../components/Fonts";

import Head from "next/head";

{
  /* APP
================================================================================================= */
}
const App = ({ Component, pageProps }) => {
  {
    /* MATHJAX CONFIGURATION */
  }
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <>
    <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* FAVICON SETTINGS
        =========================================================================================== */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <div
      /* FONT VARIABLES (REQUIRED FOR SCSS USE) */
      className={`${exo2.variable} ${source_code.variable}`}
    >
        
      <ChakraProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          <MathJaxContext config={config}>
            <div>
              <Component {...pageProps} />
            </div>
          </MathJaxContext>
        </ThemeProvider>
      </ChakraProvider>
    </div>
    </>
  );
};

export default App;
