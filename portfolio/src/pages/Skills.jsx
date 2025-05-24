import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (inView) {
      setVisibleSkills([]);
      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  }, [inView]);

  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.terminalWindow}>
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
