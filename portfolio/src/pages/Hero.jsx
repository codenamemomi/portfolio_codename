import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span>JOLAOLUWA</span></h1>
        <p className={styles.subtitle}>A Backend Developer with some Frontend Skills</p>
        <a href="#projects" className={styles.cta}>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
