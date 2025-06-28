import { useEffect, useState, useRef } from "react";
import styles from "./Skills.module.css";

const skills = {
  programmingLanguages: [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "💻" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
  ],
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "FastAPI", icon: "🚀" },
    { name: "Flask", icon: "🔥" },
  ],
  databases: [
    { name: "MongoDB", icon: "📈" },
    { name: "PostgreSQL", icon: "📊" },
  ],
  developmentTools: [
    { name: "Git", icon: "🔧" },
    { name: "CI/CD", icon: "🔄" },
  ],
  softSkills: [
    { name: "Leadership", icon: "👑" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Coordination", icon: "🧩" },
    { name: "Analytical Thinking", icon: "🧠" },
  ],
  apiDevelopment: [
    { name: "API Development", icon: "🔗" },
    { name: "GraphQL", icon: "🤖" },
  ],
  backendDevelopment: [
    { name: "Node.js", icon: "📊" },
  ],
};

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [inView, setInView] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [allowDismiss, setAllowDismiss] = useState(false);
  const containerRef = useRef(null);

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
      const allSkills = Object.values(skills).flat();
      allSkills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, index]);
        }, index * 300);
      });

      const timer = setTimeout(() => setAllowDismiss(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!allowDismiss) return;

      if (containerRef.current &&!containerRef.current.contains(event.target)) {
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
            {Object.keys(skills).map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className={styles.categoryTitle}>{category.replace(/([A-Z])/g, '1').trim()}</h2>
                {skills[category].map((skill, skillIndex) => {
                  const index = Object.values(skills)
                  .flat()
                  .findIndex((s) => s.name === skill.name);
                  return (
                    <div
                      key={skillIndex}
                      className={`${styles.skillLine} ${
                        visibleSkills.includes(index)? styles.visible : ""
                      }`}
                    >
                      <span className={styles.skillPrefix}>[+]</span> {skill.name} detected {skill.icon}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;