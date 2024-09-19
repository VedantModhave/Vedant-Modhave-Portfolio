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
        <h2>Contact</h2>
        <p>Submit the form below to get in touch with me</p>
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





// import React from "react";

// import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

// export const Contact = () => {
//   return (
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:modhavevedant@email.com">modhavevedant@email.com</a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/in/vedant-modhave">linkedin.com/vedant-modhave</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://github.com/VedantModhave">github.com/VedantModhave</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };
