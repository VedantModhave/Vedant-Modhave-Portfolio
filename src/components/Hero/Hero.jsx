import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
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
            href="/assets/Resume_Vedant Modhave.pdf"
            download
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
  );
};





// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Vedant Modhave</h1>
//         <p className={styles.description}>
//         A Web Developer with experience in building responsive platforms, focused on optimizing user experience and functionality.
//         </p>
//         <a href="#contact" className={styles.contactBtn}>
//           Let's Connect!
//         </a>
//       </div>
//       <img
//         src={getImageUrl("hero/heroImage.png")}
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };