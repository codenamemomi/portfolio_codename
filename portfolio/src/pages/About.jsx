import { useEffect, useState } from "react";
import { FaCode, FaTools, FaUserTie } from "react-icons/fa";
import styles from "./About.module.css";
import profilePic from "../assets/profile.jpg";

// Custom Hook for Typing Effect
const useTypingEffect = (fullText, speed = 50) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typeCharacter = () => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText[i]);
        i++;
        const timeout = setTimeout(typeCharacter, speed);
        return () => clearTimeout(timeout);
      }
    };
    const timeout = setTimeout(typeCharacter, speed);
    return () => clearTimeout(timeout);
  }, [fullText, speed]);

  return typedText;
};

const About = () => {
  const fullText = `> Initializing user profile...
> Loading credentials...
> Welcome, Omomijolaoluwa Akinrogunde`;
  const typedText = useTypingEffect(fullText);

  return (
    <section className={styles.about} id="about" aria-label="About Me">
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.greenDot} aria-hidden="true"></span>
          <span className={styles.yellowDot} aria-hidden="true"></span>
          <span className={styles.redDot} aria-hidden="true"></span>
          <span className={styles.windowTitle}>/usr/about-me</span>
        </div>

        <div className={styles.terminalBody}>
          <pre 
            className={styles.typedOutput} 
            aria-live="polite"
            aria-atomic="true"
          >
            {typedText}
          </pre>

          <div className={styles.profileSection}>
            <img 
              src={profilePic} 
              alt="Omomijolaoluwa Akinrogunde's profile picture" 
              className={styles.profileImage}
              loading="lazy"
              onError={(e) => e.target.src = "fallback-image.jpg"} // Add fallback
            />
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
            <div className={`${styles.card} ${styles.fadeIn}`}>
              <FaUserTie className={styles.icon} aria-hidden="true" />
              <h3>&gt; Experience</h3>
              <p>1+ years in full-stack development</p>
            </div>

            <div className={`${styles.card} ${styles.fadeIn}`}>
              <FaCode className={styles.icon} aria-hidden="true" />
              <h3>&gt; Skills</h3>
              <p>Python, JavaScript, HTML, CSS, REST APIs</p>
            </div>

            <div className={`${styles.card} ${styles.fadeIn}`}>
              <FaTools className={styles.icon} aria-hidden="true" />
              <h3>&gt; Technologies</h3>
              <p>Django, Flask, FastAPI, React, Nginx</p>
            </div>

            <div className={`${styles.card} ${styles.fadeIn}`}>
              <span role="img" aria-label="Education" className={styles.icon}>🎓</span>
              <h3>&gt; Education</h3>
              <p>Mass Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;