import React from "react";
import styles from "../../styles/Landing.module.scss";
import "pathseg";
import Canvas from "./Canvas.js";
import LandingMobile from "./LandingMobile";

function Landing() {
  return (
    <div name="landing" className={styles.landing}>
      <Canvas />
      <LandingMobile />
    </div>
  );
}

export default Landing;
