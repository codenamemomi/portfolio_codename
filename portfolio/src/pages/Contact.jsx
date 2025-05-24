import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Neo-Terminal v1.0" },
    { sender: "bot", text: "login: Please enter your name and email to authenticate." }
  ]);
  const [typing, setTyping] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setStep(2);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: `$ login --name ${formData.name} --email ${formData.email}` },
      { sender: "bot", text: `[${new Date().toLocaleTimeString()}] Authentication successful.` },
      { sender: "bot", text: "Type 'help' for available commands." }
    ]);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const input = formData.message.trim();
    if (!input) return;

    const timestamp = new Date().toLocaleTimeString();
    const userMsg = { sender: "user", text: `$ ${input}` };
    setMessages((prev) => [...prev, userMsg]);
    setFormData({ ...formData, message: "" });
    setTyping(true);

    setTimeout(() => {
      let response;

      switch (input.toLowerCase()) {
        case "whoami":
          response = `${formData.name} <${formData.email}>`;
          break;
        case "email":
          response = `📧 ${formData.email}`;
          break;
        case "connect":
          response = `🟢 Connected to server. Terminal secure.`;
          break;
        case "help":
          response = `Available commands: whoami, email, connect, clear, help`;
          break;
        case "clear":
          setMessages([]);
          setTyping(false);
          return;
        default:
          response = `Unknown command: '${input}'. Type 'help' for available commands.`;
          break;
      }

      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `[${timestamp}] ${response}` }
      ]);
    }, 800);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <span className={styles.redDot}></span>
          <span className={styles.yellowDot}></span>
          <span className={styles.greenDot}></span>
          <span className={styles.title}>neo-terminal</span>
        </div>

        <div className={styles.terminalBody}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.line}>
              <span className={msg.sender === "user" ? styles.prompt : styles.botResponse}>
                {msg.text}
              </span>
            </div>
          ))}
          {typing && (
            <div className={styles.line}>
              <span className={styles.botResponse}>
                Booting response<span className={styles.cursor}>|</span>
              </span>
            </div>
          )}

          <form
            className={styles.chatForm}
            onSubmit={step === 1 ? handleLogin : handleCommand}
          >
            <span className={styles.prompt}>$</span>
            <input
              type="text"
              name={step === 1 ? "name" : "message"}
              placeholder={step === 1 ? "Enter name" : "Type a command..."}
              autoComplete="off"
              required
              value={step === 1 ? formData.name : formData.message}
              onChange={handleInput}
            />
            {step === 1 && (
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                value={formData.email}
                onChange={handleInput}
                className={styles.secondaryInput}
              />
            )}
            <button type="submit" style={{ display: "none" }}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
