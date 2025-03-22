import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Feel free to reach out!</p>

      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className={styles.socials}>
        <a href="https://github.com/codenamemomi" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/omomijolaoluwa-akinrogunde-735aa0336" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
