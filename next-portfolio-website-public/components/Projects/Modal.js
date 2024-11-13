import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.scss";
import { Carousel } from "react-responsive-carousel";

function Modal({ show, onClose, assets }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  if (show && isBrowser) {
    document.body.style.overflow = "hidden";
  } else if (!show && isBrowser) {
    document.body.style.overflow = "visible";
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.background} onClick={handleClose}></div>
      <div className={styles.modal}>
        <div className={styles.body}>
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
          >
            {assets.map((asset, index) => {
              return (
                <div key={index} className={styles.asset}>
                  {asset}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;
