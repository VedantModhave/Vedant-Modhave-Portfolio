import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Vedant Modhave | Full Stack Developer</title>
        <meta
          name="description"
          content="Vedant Modhave is a full stack developer specializing in React, Node.js, and modern web applications."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vedant Modhave",
              "url": "https://vedantmodhave.site",
              "jobTitle": "Full Stack Developer",
              "sameAs": [
                "https://www.linkedin.com/in/vedant-modhave",
                "https://github.com/VedantModhave"
              ]
            }
          `}
        </script>
      </Helmet>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Vedant Modhave</h1>
          <p className={styles.description}>
            A Web Developer with experience in building responsive platforms,
            focused on optimizing user experience and functionality.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contact" className={styles.contactBtn}>
              Let's Connect!
            </a>
            <a
              href="https://drive.google.com/file/d/1Uog9eLz9yGPPf3DkWOUs5jrmT6m4CwRp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadBtn}
            >
              Download CV
            </a>
          </div>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  );
};
