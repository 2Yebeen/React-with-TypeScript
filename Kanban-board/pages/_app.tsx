import { FC } from 'react';
import Nprogress from "nprogress";
import Router from "next/router";
import type { AppProps /*, AppContext */ } from 'next/app';
import { Page } from "../components/Page";
import Sidebar from '../components/sidebar';

import "../styles/tailwind.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Page>
    <div style={{ display: 'flex', maxWidth: 1100 }}>
      <div style={{ flexBasis: '30%', margin: 25 }}>
        <Sidebar />
      </div>
      <div style={{ flexBasis: '70%', margin: 25 }}>
        <Component {...pageProps} />
      </div>
    </div>
    </Page>
  );
};

export default MyApp;
