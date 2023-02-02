{/* NPM IMPORTS
================================================================================================= */}
import { ThemeProvider } from "next-themes";
import { ChakraProvider } from "@chakra-ui/react";
import { MathJaxContext } from "better-react-mathjax";

{/* STYLE IMPORTS
================================================================================================= */}
import "../styles/globals.scss";
import "../styles/components/Header.scss";
import "../styles/fonts.scss";

{/* FONT IMPORTS
================================================================================================= */}
import { exo2, source_code } from "../components/Fonts";


{/* APP
================================================================================================= */}
const App = ({ Component, pageProps }) => {
  
  {/* MATHJAX CONFIGURATION */}
    const config = {
    loader: { load: ["input/asciimath"] },
  };

  return (
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
  );
}

export default App;