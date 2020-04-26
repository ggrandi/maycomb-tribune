import * as React from "react";
import Head from "next/head";
import styles from './Layout.module.css';

const assetPrefix = process.env.ASSET_PREFIX

/**
 * The layout of all the pages in the site
 */
const Layout: React.FC<{ Footer?: React.FC<{}>, title: string }> = ({ children, Footer, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={`${assetPrefix}/favicon.svg`} color="#000" />
      <link rel="alternate icon" href={`${assetPrefix}/favicon.ico`} />
    </Head>
    <div className={styles.container}>
      <div className={styles.logocontainer}>
        <div style={{ flex: 1 }} />
        <img className={styles.logo} src={`${assetPrefix}/static/logo.png`} />
        <div style={{ flex: 1 }} />
      </div>
      <Separator />
      <div>
        {children}
      </div>
      <Separator />
      {Footer && <Footer />}
    </div>
  </>
);

export const Separator: React.FC<{}> = () => (
  <div className={styles.separator} />
);

export default Layout;