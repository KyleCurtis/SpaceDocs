import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";

import "../styles/globals.scss";

import "../styles/components/Header.scss";
import "../styles/components/Dropdown.scss";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {


  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div>
        <div className="content-br"></div>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}
