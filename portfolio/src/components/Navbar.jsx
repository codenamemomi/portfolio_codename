import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaHome, FaUser, FaEnvelopeOpenText, FaProjectDiagram, FaTools } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = ({ toggleSkills }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.logo}>CODENAME</Link>
        </div>
        <button className={styles.skillsButton} onClick={toggleSkills}>
          <FaTools /> View Skills
        </button>
      </nav>

      <div className={styles.bottomNav}>
        <Link to="/" className={styles.navItem} data-title="Home"><FaHome /></Link>
        <Link to="/about" className={styles.navItem} data-title="About"><FaUser /></Link>
        <Link to="/projects" className={styles.navItem} data-title="Projects"><FaProjectDiagram /></Link>
        <Link to="/contact" className={styles.navItem} data-title="Contact"><FaEnvelopeOpenText /></Link>
        <a href="https://github.com/codenamemomi" target="_blank" rel="noopener noreferrer" className={styles.navItem} data-title="GitHub">
          <FaGithub />
        </a>
      </div>

      <div
        className={styles.scrollIndicator}
        style={{
          width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
        }}
      ></div>
    </>
  );
};

export default Navbar;
