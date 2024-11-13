import React, { useState, useEffect } from "react";
import styles from "../../styles/Linksbar.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import GoogleDriveLoading from "./GoogleDriveLoading";

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY <= window.innerHeight - 2;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

function Linksbar() {
  const scroll = useScrollHandler();
  const [resumeUrl, setResumeUrl] = useState(
    "https://drive.google.com/file/d/14eTz-4nitCU9N0tQYFs59w0RcWsUkgIb/view"
  );

  function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

  useEffect(() => {
    fetch("/api/resume")
      .then((response) => response.json())
      .then((res) => {
        const byteArray = base64ToArrayBuffer(res.b64data);
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        setResumeUrl(url);
      });
  }, []);

  return (
    <div className={!scroll ? styles.linksbar : styles.linksbarlanding}>
      <ul>
        <li className={!scroll ? styles.itemresume : styles.itemresumelanding}>
          <a
            className={styles.link}
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.content}>
              {resumeUrl ==
              "https://drive.google.com/file/d/14eTz-4nitCU9N0tQYFs59w0RcWsUkgIb/view" ? (
                <GoogleDriveLoading />
              ) : (
                <BsFillFileEarmarkPdfFill size={30} />
              )}{" "}
              <p>Resume</p>
            </div>
          </a>
        </li>
        <li
          className={!scroll ? styles.itemlinkedin : styles.itemlinkedinlanding}
        >
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/stephencfip/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.content}>
              <FaLinkedin size={30} /> <p>LinkedIn</p>
            </div>
          </a>
        </li>
        <li className={!scroll ? styles.itemgithub : styles.itemgithublanding}>
          <a
            className={styles.link}
            href="https://github.com/stephen-ip"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.content}>
              <FaGithub size={30} /> <p>GitHub</p>
            </div>
          </a>
        </li>
        <li className={!scroll ? styles.itememail : styles.itememaillanding}>
          <a
            className={styles.link}
            href="mailto:stephenip@berkeley.edu"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.content}>
              <HiOutlineMail size={30} /> <p>Email</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Linksbar;
