import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.title}>
          Hi, I'm <span>JOLAOLUWA</span>, a Full Stack Developer
        </h1>
        <p className={styles.subtitle}>
          I automate things and build scalable software solutions.
        </p>
        <div className={styles.ctaGroup}>
          <Link to="/resume" className={styles.cta}>
            View Resume
          </Link>
          <Link to="/certificate" className={styles.cta}>
            View Certs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;