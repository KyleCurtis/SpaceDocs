import MainLayout from "../components/Layouts/MainLayout";

import "../styles/globals.scss";

import "../styles/components/Header.scss";

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
