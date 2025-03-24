import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false); // For animation

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Delayed animation
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://form-forums.vercel.app/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.detail || "Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section className={`${styles.contact} ${isVisible ? styles.visible : ""}`} id="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Feel free to reach out!</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>

      {responseMessage && <p className={styles.response}>{responseMessage}</p>}

      <div className={styles.socials}>
        <a href="https://github.com/codenamemomi" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/omomijolaoluwa-akinrogunde-735aa0336" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
