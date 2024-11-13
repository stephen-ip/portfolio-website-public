import React from "react";
import styles from "../../styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.bar}></span>
      <a
        href="https://github.com/stephen-ip/next-portfolio-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed and Built by Stephen Ip
      </a>
    </footer>
  );
}

export default Footer;
