import styles from "./Resume.module.css";
import ResumePDF from "../assets/Jolaoluwa_Resume.pdf";

const Resume = () => {
    return (
      <section className={styles.resumeSection}>
        <div className={styles.resumeCard}>
          <h2 className={styles.heading}>My Resume</h2>
          <iframe src={ResumePDF} className={styles.resumeViewer} title="Resume Viewer"></iframe>
          
          {/* New Full-Screen Button */}
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className={styles.fullScreenBtn}>
            View Full Screen
          </a>
  
          <a href={ResumePDF} download="Jolaoluwa_Resume.pdf" className={styles.downloadBtn}>
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  

export default Resume;
