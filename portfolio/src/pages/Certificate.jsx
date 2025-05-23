import { useState, useEffect } from "react";
import styles from "./Certificate.module.css";

const certificates = [
  {
    title: "Backend with Python Django – Univelcity",
    image: "/images/IMG_6263.JPG",
    link: "/images/IMG_6263.JPG",
  },
  {
    title: "HNG Internship 12 Finalist",
    image: "/images/hng-preview.JPG",
    link: "/images/hng-preview.JPG",
  },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openModal = (image) => {
    setActiveImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <section className={styles.certificates}>
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => openModal(cert.image)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className={styles.image}
            />
            <p className={styles.caption}>{cert.title}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={activeImage} alt="Certificate" className={styles.modalImage} />
            <button className={styles.closeButton} onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
