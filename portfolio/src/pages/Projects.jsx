import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ONLINE STORE API",
    description: "An API for browsing, adding to cart, and purchasing products.",
    image: "/images/online_store_api.png",
    github: "https://github.com/codenamemomi/online_store_API",
    live: "https://example.com",
    category: "Backend"
  },
  {
    title: "Outboundd_AI",
    description: "A call automation solution that saves time and improves communication.",
    image: "/images/outbound.png",
    github: "https://github.com/codenamemomi/Outbound-AI-Backend/tree/codenamemomi",
    live: "https://outbound.im/",
    category: "Full-Stack"
  },
  {
    title: "Telex Interval Integration",
    description: "Automated Telex integration for programming tips and coding challenges.",
    image: "/images/telex.png",
    github: "https://github.com/codenamemomi/CodeRefactorInsight_HNG12_stage3",
    live: "https://github.com/codenamemomi/HNG12_telex_integration_json_stage3/raw/refs/heads/master/telex_integration.json",
    category: "API"
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className={styles.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={styles.projectCard}>
            <div className={styles.cardContent}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                  Live <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                  Code <FaGithub />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Action Button (FAB) for future actions */}
      <div className={styles.fab}>
        <FaGithub />
      </div>
    </section>
  );
};

export default Projects;
