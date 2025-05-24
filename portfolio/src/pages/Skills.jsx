import { useEffect, useState, useRef } from "react";
import styles from "./Skills.module.css";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Django", icon: "🟢" },
  { name: "FastAPI", icon: "🚀" },
  { name: "API Development", icon: "🔗" },
  { name: "Leadership", icon: "👑" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Coordination", icon: "🧩" },
  { name: "Analytical Thinking", icon: "🧠" }
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [inView, setInView] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [allowDismiss, setAllowDismiss] = useState(false);
  const containerRef = useRef(null);

  // Detect if in view
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate skills
  useEffect(() => {
    if (inView) {
      setVisibleSkills([]);
      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, index]);
        }, index * 300);
      });

      // Allow outside click to dismiss *after* animation starts
      const timer = setTimeout(() => setAllowDismiss(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Outside click logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!allowDismiss) return;

      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDismissed(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [allowDismiss]);

  if (dismissed) return null;

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.terminalWindow} ref={containerRef}>
        <div className={styles.terminalHeader}>
          <span className={styles.redDot}></span>
          <span className={styles.yellowDot}></span>
          <span className={styles.greenDot}></span>
          <span className={styles.title}>skills-scan</span>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.scanTitle}>&gt;&gt; Initiating network skill scan...</p>
          <div className={styles.output}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${styles.skillLine} ${
                  visibleSkills.includes(index) ? styles.visible : ""
                }`}
              >
                <span className={styles.skillPrefix}>[+]</span> {skill.name} detected {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
