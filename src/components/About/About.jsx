import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I'm a web developer with experience in building responsive platforms using technologies like HTML, CSS, React.js, and Firebase, focused on optimizing user experience and functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/designer.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Designer</h3>
              <p>
              I'm a designer experienced in crafting intuitive UIs and creating visuals using tools like Canva, including posters and graphics for GDG TSEC.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

