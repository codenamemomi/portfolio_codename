import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import styles from "./Skills.module.css";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Django", icon: "🟢" },
  { name: "FastAPI", icon: "🚀" },
  { name: "API Development", icon: "🔗" }
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <>
      {/* Background Particles (Placed Outside to Avoid Overlap) */}
      <Particles
        id="particles"
        options={{
          background: { color: "#111" },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 1 }
          }
        }}
        className={styles.particles}
      />
  
      <section className={styles.skills} id="skills">
        <h2>Skills & Technologies</h2>
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
      </section>
    </>
  );  
};

export default Skills;
