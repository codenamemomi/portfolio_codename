import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        <h1 className={styles.title}>I'm <span>JOLAOLUWA</span></h1>
        <p className={styles.subtitle}>I automate things.</p>
        <Link to="/resume" className={styles.cta}>View Resume</Link>
        <Link to="/certificate" className={styles.cta}>View Certs</Link>
      </div>
    </section>
  );
};

export default Hero;
