import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import variables from "../../styles/export.module.scss";
import { Link } from "react-scroll";
import styled from "styled-components";
const Bar = styled.span`
  height: 3px;
  width: 100%;
  background-color: ${variables.primaryTextColor};
  border-radius: 10px;
  transition: 0.4s ease-in-out;
  :nth-child(1) {
    transform: ${(props) =>
      props.open ? "translate(-10px, 9px) rotate(90deg)" : "translate(0px)"};
  }
  :nth-child(2) {
    transform: ${(props) =>
      props.open ? "translate(0px, 0px) rotate(90deg)" : "translate(0px)"};
  }
  :nth-child(3) {
    transform: ${(props) =>
      props.open ? "translate(10px, -9px) rotate(90deg)" : "translate(0px)"};
  }
`;

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a href="." className={styles["brand-title"]}>
          <img src="/logo.png" alt="logo" />
        </a>
        <div className={styles["navbar-links"]}>
          <ul>
            <li>
              <Link
                to="landing"
                smooth={true}
                // activeClass={styles.active}
                // spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                // activeClass={styles.active}
                // spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                // activeClass={styles.active}
                // spy={true}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                // activeClass={styles.active}
                // spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.navbarmobile}>
        <a href="." className={styles["brand-title"]}>
          <img src="/logo.png" alt="logo" />
        </a>
        <a
          className={styles["hamburger"]}
          onClick={() => setExpanded(!expanded)}
        >
          <Bar open={expanded} />
          <Bar open={expanded} />
          <Bar open={expanded} />
        </a>
        <div
          className={styles["navbarmobile-links"]}
          style={{
            transform: expanded ? "translate(0px, 278px)" : "translate(0px)",
            opacity: expanded ? "1" : "0",
          }}
        >
          <ul>
            <li>
              <Link
                to="landing"
                smooth={true}
                onClick={() => setExpanded(false)}
                // activeClass={styles.active}
                // spy={true}
                // onSetActive={() => setExpanded(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                onClick={() => setExpanded(false)}
                // activeClass={styles.active}
                // spy={true}
                // onSetActive={() => setExpanded(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                onClick={() => setExpanded(false)}
                // activeClass={styles.active}
                // spy={true}
                // onSetActive={() => setExpanded(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                onClick={() => setExpanded(false)}
                // activeClass={styles.active}
                // spy={true}
                // onSetActive={() => setExpanded(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
