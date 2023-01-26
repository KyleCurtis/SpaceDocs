import MainLayout from "../components/Layouts/MainLayout";

import "../styles/globals.scss";

import "../styles/components/Header.scss";

import { ThemeProvider } from "next-themes";

import { ChakraProvider } from "@chakra-ui/react";
import { MathJaxContext } from "better-react-mathjax";

export default function App({ Component, pageProps }) {
  const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
    <ChakraProvider>
      <MathJaxContext config={config}>
        <ThemeProvider enableSystem={true} attribute="class">
          <div>

              <Component {...pageProps} />

          </div>
        </ThemeProvider>
      </MathJaxContext>
    </ChakraProvider>
  );
}
