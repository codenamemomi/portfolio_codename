import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "ONLINE STORE API",
    description: "An API for browsing, adding to cart, and purchasing products.",
    image: "/images/online_store_api.png",
    github: "https://github.com/codenamemomi/online_store_API",
    live: "https://example.com",
    category: "Backend",
    tags: ["API", "E-commerce"],
  },
  {
    id: 2,
    title: "Outboundd_AI",
    description: "A call automation solution that saves time and improves communication.",
    image: "/images/outbound.png",
    github: "https://github.com/codenamemomi/Outbound-AI-Backend/tree/codenamemomi",
    live: "https://outbound.im/",
    category: "Full-Stack",
    tags: ["Call automation", "AI"],
  },
  {
    id: 3,
    title: "Telex Interval Integration",
    description: "Automated Telex integration for programming tips and coding challenges.",
    image: "/images/telex.png",
    github: "https://github.com/codenamemomi/CodeRefactorInsight_HNG12_stage3",
    live: "https://github.com/codenamemomi/HNG12_telex_integration_json_stage3/raw/refs/heads/master/telex_integration.json",
    category: "API",
    tags: ["Telex", "Integration"],
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>/** Projects Dashboard */</h2>
      <div className={styles.matrixGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectTerminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.greenDot}></span>
              <span className={styles.yellowDot}></span>
              <span className={styles.redDot}></span>
              <span className={styles.windowTitle}>{project.title}</span>
            </div>
            <div className={styles.terminalBody}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <pre className={styles.terminalText}>
                {`> Description:
  ${project.description}

> Category:
  ${project.category}

> Tags:
  ${project.tags.join(", ")}`}
              </pre>
              <div className={styles.terminalLinks}>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  Live <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;