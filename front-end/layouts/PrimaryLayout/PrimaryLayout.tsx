import Head from "next/head";
import * as React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./PrimaryLayout.module.css";
interface PrimaryLayoutProps {
  title: string;
  description: string;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  title,
  description,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
);

export default PrimaryLayout;
