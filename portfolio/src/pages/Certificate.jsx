import { useState, useEffect, useRef } from "react";
import styles from "./Certificate.module.css";

const certificates = [
  {
    id: 1,
    title: "Backend with Python Django – Univelcity",
    image: "/images/IMG_6263.JPG",
    alt: "Certificate from Univelcity for Django backend development",
    link: "/images/IMG_6263.JPG",
  },
  {
    id: 2,
    title: "HNG Internship 12 Finalist",
    image: "/images/hng-preview.JPG",
    alt: "HNG Internship 12 Finalist Certificate",
    link: "/images/hng-preview.JPG",
  },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef(null);
  const prevFocusRef = useRef(null);

  const openModal = (image, index) => {
    prevFocusRef.current = document.activeElement;
    setActiveImage(image);
    setActiveIndex(index);
    setModalOpen(true);
    // Delay focus for animation
    setTimeout(() => {
      modalRef.current?.focus();
    }, 300);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImage(null);
    // Return focus to previously focused element
    prevFocusRef.current?.focus();
  };

  const navigateCertificates = (direction) => {
    const newIndex = (activeIndex + direction + certificates.length) % certificates.length;
    setActiveIndex(newIndex);
    setActiveImage(certificates[newIndex].image);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          navigateCertificates(-1);
          break;
        case "ArrowRight":
          navigateCertificates(1);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, activeIndex]);

  // Focus trap for modal
  useEffect(() => {
    if (modalOpen) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = modalRef.current;
      const firstFocusableElement = modal.querySelector(focusableElements);
      const focusableContent = modal.querySelectorAll(focusableElements);
      const lastFocusableElement = focusableContent[focusableContent.length - 1];

      const focusLoop = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      };

      modal.addEventListener("keydown", focusLoop);
      return () => modal.removeEventListener("keydown", focusLoop);
    }
  }, [modalOpen]);

  return (
    <section className={styles.certificates} aria-labelledby="certificates-heading">
      <h2 id="certificates-heading" className={styles.title}>Certificates</h2>
      
      <div className={styles.grid} role="list" aria-label="Certificate gallery">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            role="listitem"
            className={styles.card}
            onClick={() => openModal(cert.image, index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(cert.image, index);
              }
            }}
            tabIndex={0}
            aria-label={`View ${cert.title} certificate`}
            aria-haspopup="dialog"
          >
            <img
              src={cert.image}
              alt={cert.alt}
              className={styles.image}
              loading="lazy"
              width="300"
              height="200"
              onError={(e) => {
                e.target.src = "/images/placeholder-cert.jpg";
                e.target.alt = "Certificate image not available";
              }}
            />
            <p className={styles.caption}>{cert.title}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div 
          className={styles.modalOverlay} 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-certificate-title"
          ref={modalRef}
          tabIndex="-1"
        >
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <button 
              className={styles.closeButton} 
              onClick={closeModal}
              aria-label="Close certificate viewer"
              tabIndex="0"
            >
              ×
            </button>
            
            <button 
              className={styles.navButton} 
              onClick={(e) => {
                e.stopPropagation();
                navigateCertificates(-1);
              }}
              aria-label="Previous certificate"
              tabIndex="0"
            >
              &lt;
            </button>
            
            <button 
              className={styles.navButton} 
              onClick={(e) => {
                e.stopPropagation();
                navigateCertificates(1);
              }}
              aria-label="Next certificate"
              tabIndex="0"
            >
              &gt;
            </button>
            
            <img 
              src={activeImage} 
              alt={certificates[activeIndex]?.alt || "Certificate"} 
              className={styles.modalImage}
              loading="eager"
              width="800"
              height="600"
              onError={(e) => {
                e.target.src = "/images/placeholder-cert.jpg";
                e.target.alt = "Certificate image not available";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;