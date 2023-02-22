import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
