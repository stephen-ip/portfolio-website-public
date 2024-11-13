import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Contact.module.scss";
import emailjs from "@emailjs/browser";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";
import animate from "../Utils/animate";
const override = css`
  display: block;
  margin: 31px auto;
  border-color: red;
`;

function Contact() {
  const [sending, showSending] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const form = useRef();
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const PUBLIC_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    showSending(true);
    emailjs
      .sendForm(SERVICE_ID, PUBLIC_TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          // console.log(result.text);
          showSending(false);
          alert("Your message has been successfully sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          showSending(false);
          alert("Something went wrong while sending your message");
        }
      );
  };

  useEffect(() => {
    animate(titleRef);
    animate(contentRef);
  }, []);

  return (
    <div name="contact" className={styles.contact}>
      <div className={styles.header}>
        <h1 className={styles.title} ref={titleRef}>
          Get In Touch
        </h1>
      </div>
      <div className={styles.content} ref={contentRef}>
        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
          <div className={styles.Name}>
            <div className={styles.firstname}>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="user_firstname"
                id="firstname"
                required
              />
            </div>
            <div className={styles.lastname}>
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="user_lastname" id="lastname" required />
            </div>
          </div>
          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" required />
          </div>
          <div className={styles.message}>
            <label htmlFor="message">Message</label>
            <textarea name="user_message" id="message" required />
          </div>
          {!sending ? (
            <div className={styles.submit}>
              <input type="submit" value="Send" />
            </div>
          ) : (
            <BarLoader
              color={"#ffffff"}
              loading={sending}
              css={override}
              size={50}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
