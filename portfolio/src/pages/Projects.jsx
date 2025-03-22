import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "ONLINE STORE API",
    description: "This is an online API store that allows users to browse, add to cart, and purchase products.",
    image: "/images/online_store_api.png",
    github: "https://github.com/codenamemomi/online_store_API",
    live: "https://example.com",
    category: "Backend"
  },
  {
    title: "Outboundd_AI",
    description: "Outbound AI  is a call automation solution that helps businesses save time and improve communication.",
    image: "/images/outbound.png",
    github: "https://github.com/codenamemomi/Outbound-AI-Backend/tree/codenamemomi",
    live: "https://outbound.im/",
    category: "Full-Stack"
  },
  {
    title: "Telex Interval Integration",
    description: "An automated Telex integration for scheduled programming tips and coding challenges.",
    image: "/images/telex.png",
    github: "https://github.com/codenamemomi/CodeRefactorInsight_HNG12_stage3",
    live: "https://github.com/codenamemomi/HNG12_telex_integration_json_stage3/raw/refs/heads/master/telex_integration.json",
    category: "API"
  }
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h2>My Projects</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on tablets
          1024: { slidesPerView: 3 } // Show 3 slides on desktops
        }}
        className={styles.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                View Live Project
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
