import React, { useState } from "react";
import styles from "./Contact.module.css";

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
    const formURL = "https://getform.io/f/bdrydpdb";
    fetch(formURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Error sending message. Please try again later."));
  };

  return (
    <section id="contact" className={styles.container}>
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
    </section>
  );
};





