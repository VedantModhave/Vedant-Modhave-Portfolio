import React, { useState } from "react";
import styles from "./Contact.module.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formURL = "https://getform.io/f/bkkkeopb";
    fetch(formURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast.success("Message sent successfully!", {
          iconTheme: {
            primary: '#add8e6', // Light blue tick color
            secondary: '#ffffff', // White background for the icon
          },
          progressStyle: {
            background: '#add8e6', // Light blue progress bar
          },
        });
      })
      .catch((error) => {
        toast.error("Error sending message. Please try again later.", {
          iconTheme: {
            primary: '#add8e6', // Light blue tick color
            secondary: '#ffffff', // White background for the icon
          },
          progressStyle: {
            background: '#add8e6', // Light blue progress bar
          },
        });
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <ToastContainer />
      <div className={styles.text}>
        <h2>CONTACT</h2>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Let's talk
        </button>
      </form>
      <div className={styles.socialContainer}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={styles.purple}>connect </span>with me
        </p>
        <ul className={styles.socialLinks}>
          <li className={styles.socialIcon}>
            <a
              href="https://github.com/VedantModhave"
              target="_blank"
              rel="noreferrer"
              className={styles.iconColour}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={styles.socialIcon}>
            <a
              href="https://twitter.com/VedantModhave"
              target="_blank"
              rel="noreferrer"
              className={styles.iconColour}
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className={styles.socialIcon}>
            <a
              href="https://www.linkedin.com/in/vedant-modhave/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconColour}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
