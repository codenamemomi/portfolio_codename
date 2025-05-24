import { useEffect, useState } from "react";
import { FaUserTie, FaCode, FaTools } from "react-icons/fa";
import styles from "./About.module.css";
import profilePic from "../assets/profile.jpg";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = `> Initializing user profile...
> Loading credentials...
> Welcome, Omomijolaoluwa Akinrogunde`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[i]);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.about} id="about">
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.greenDot}></span>
          <span className={styles.yellowDot}></span>
          <span className={styles.redDot}></span>
          <span className={styles.windowTitle}>/usr/about-me</span>
        </div>

        <div className={styles.terminalBody}>
          <pre className={styles.typedOutput}>{typedText}</pre>

          <div className={styles.profileSection}>
            <img src={profilePic} alt="Profile" className={styles.profileImage} />
            <div>
              <h2 className={styles.name}>Omomijolaoluwa Akinrogunde</h2>
              <p className={styles.role}>FullStack Developer</p>
              <p className={styles.description}>
                Passionate about building scalable backend systems and hacking together full-stack apps. 
                Adept with Python, JavaScript, and seamless frontend-backend architecture.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <FaCode className={styles.icon} />
              <h3>&gt; Skills</h3>
              <p>Python, JavaScript, HTML, CSS, REST APIs</p>
            </div>

            <div className={styles.card}>
              <FaTools className={styles.icon} />
              <h3>&gt; Technologies</h3>
              <p>Django, Flask, FastAPI, React, Nginx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
