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
        }, index * 100);
      });
    }
  }, [inView]);

  return (
    <section className={styles.skillsSection} id="skills">
      {/* Skills Container */}
      <div className={`${styles.skillsContainer} ${inView ? styles.expanded : styles.collapsed}`}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skillCard} ${visibleSkills.includes(index) ? styles.fadeIn : ""}`}
            >
              <span className={styles.icon}>{skill.icon}</span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
