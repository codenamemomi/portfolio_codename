import { useState } from "react";
import styles from "./Contact.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setStep(2);
    setMessages([{ sender: "bot", text: `Hey ${formData.name}! How can I help you today?` }]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const userMessage = { sender: "user", text: formData.message };
    setMessages((prev) => [...prev, userMessage]);
    setFormData({ ...formData, message: "" });
    setTyping(true);

    try {
      const response = await fetch("https://form-forums.vercel.app/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: userMessage.text,
        }),
      });

      if (response.ok) {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Got your message! I'll get back to you soon." },
        ]);
      } else {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Failed to send. Please try again later." },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error sending message. Please try again." },
      ]);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      {step === 1 ? (
        <div className={styles.contactForm}>
          <h2>New Contact</h2>
          <FaUserCircle className={styles.avatar} />
          <p>Enter your details to start chatting.</p>
          <form onSubmit={handleSaveContact}>
            <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            <button type="submit">Save & Chat</button>
          </form>
        </div>
      ) : (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <FaUserCircle className={styles.chatAvatar} />
            <h3>{formData.name}</h3>
          </div>

          <div className={styles.chatBox}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${msg.sender === "user" ? styles.user : styles.bot}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {typing && <div className={`${styles.message} ${styles.bot}`}><p>Typing...</p></div>}
          </div>

          <form className={styles.chatForm} onSubmit={handleSendMessage}>
            <input type="text" name="message" placeholder="Type a message..." required value={formData.message} onChange={handleChange} />
            <button type="submit"><IoSend /></button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
