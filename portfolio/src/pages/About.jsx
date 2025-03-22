import styles from "./About.module.css";
import profilePic from "../assets/profile.jpg"; // Ensure this path is correct

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Profile" className={styles.profileImage} />
        </div>

        {/* About Content */}
        <div className={styles.textContainer}>
          <h2>About Me</h2>
          <p>
            I am a proficient developer with a strong command of <strong>Python, JavaScript, HTML, CSS,</strong> and <strong>API development.</strong> 
            My expertise in <strong>Python</strong> allows me to tackle a variety of projects, from web applications using frameworks like 
            <strong> Flask</strong> and <strong>Django</strong> to data analysis with libraries such as <strong>Pandas</strong> and <strong>NumPy</strong>.
          </p>
          <p>
            In the realm of web development, I excel in <strong>JavaScript</strong>, creating dynamic, interactive user interfaces with frameworks 
            like <strong>React</strong> and <strong>Vue.js</strong>. My skills in <strong>HTML</strong> and <strong>CSS</strong> enable me to design visually appealing and 
            user-friendly layouts that enhance user experiences.
          </p>
          <p>
            Additionally, I have extensive experience in <strong>API development</strong>, designing and implementing <strong>RESTful APIs</strong> that ensure seamless 
            communication between front-end and back-end systems. My focus on <strong>security, efficiency,</strong> and <strong>comprehensive documentation</strong> makes 
            my APIs reliable and easy to integrate.
          </p>
          <p>
            I thrive on solving problems and optimizing solutions. Whether building robust backend services or crafting engaging front-end experiences, 
            I strive to bridge the gap between functionality and aesthetics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
