import React from "react";
import styles from "../../styles/LandingMobile.module.scss";
import { Link } from "react-scroll";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function LandingMobile() {
  return (
    <div className={styles.landingmobile}>
      <div className={styles.content}>
        <h1>Stephen Ip</h1>
        <p className={styles.p1}>Full Stack Developer</p>
        <p className={styles.p2}> CS @ UC Berkeley</p>
        <Link to="about" smooth={true}>
          <BsFillArrowDownCircleFill className={styles.arrow} size={50} />
        </Link>
      </div>
    </div>
  );
}

export default LandingMobile;
