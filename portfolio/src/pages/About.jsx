import { useEffect, useState } from "react";
import { FaUserTie, FaCode, FaTools } from "react-icons/fa";
import styles from "./About.module.css";
import profilePic from "../assets/profile.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className={`${styles.about} ${isVisible ? styles.show : ""}`} id="about">
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <img src={profilePic} alt="Profile" className={styles.profileImage} />
          <h2 className={styles.fullName}>Omomijolaoluwa Akinrogunde</h2>
          <p className={styles.role}>FullStack Developer</p>
        </div>

        <p className={styles.description}>
          Passionate about building scalable and efficient backend systems. I specialize in 
          Python, JavaScript, and API development, ensuring seamless communication between 
          frontend and backend technologies.
        </p>

        <div className={styles.details}>
          <div className={styles.infoCard}>
            <FaCode className={styles.icon} />
            <div>
              <h3>Skills</h3>
              <p>Python, JavaScript, HTML, CSS, API Development</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <FaTools className={styles.icon} />
            <div>
              <h3>Technologies</h3>
              <p>Django, Flask, FastAPI, React, Nginx</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
