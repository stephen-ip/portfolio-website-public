import React from "react";
import Head from "next/head";
import styles from "../styles/Page.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Linksbar from "../components/Linksbar/Linksbar";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Ip</title>
        <meta name="description" content="Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Linksbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
