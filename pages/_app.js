import MainLayout from "../components/MainLayout";
import Navbar from "../components/Navbar";

import "../styles/globals.scss";

import "../styles/components/Header.scss";
import "../styles/components/Dropdown.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="content-br"></div>
        <br /> <br />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
