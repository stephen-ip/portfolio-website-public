import React from "react";
import styles from "../../styles/Skills.module.scss";
import { Skills } from "./Content";

function SkillsSlider() {
  return (
    <div className={styles.skills}>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {Skills.map((skill) => skill.svg)}
          {Skills.map((skill) => skill.svg)}
        </div>
      </div>
    </div>
  );
}

export default SkillsSlider;
