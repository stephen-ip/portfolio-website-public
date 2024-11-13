import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Project.module.scss";
import variables from "../../styles/export.module.scss";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Keywords } from "./Content";
import Modal from "./Modal";
import animate from "../Utils/animate";

function Project(props) {
  const projectRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    animate(projectRef);
  }, []);

  return (
    <div className={styles.project} ref={projectRef}>
      <div className={styles.projectpic}>
        <img
          src={props.img}
          alt="project img"
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.description}>
          <p>
            {props.description.split(" ").map((word, index) => {
              if (Keywords.includes(word.toLowerCase())) {
                return (
                  <span
                    key={index}
                    style={{ color: variables.highlightColor }}
                  >{`${word} `}</span>
                );
              } else {
                return <span key={index}>{`${word} `}</span>;
              }
            })}
          </p>
          <div className={styles.features}>
            <h4>Features</h4>
            <ul>
              {props.features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.techstack}>
          {props.techstack.map((technology, index) => (
            <div key={index}>{technology}</div>
          ))}
        </div>
        <div className={styles.links}>
          <a href={props.github} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={props.external} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        assets={props.assets}
      />
    </div>
  );
}

export default Project;
