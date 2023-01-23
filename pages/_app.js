import MainLayout from "../components/Layouts/MainLayout";

import "../styles/globals.scss";

import "../styles/components/Header.scss";

import { ThemeProvider } from "next-themes";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <div>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}
