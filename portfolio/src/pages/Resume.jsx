import styles from "./Resume.module.css";

const resumeText = `
Omomijolaoluwa Akinrogunde
Full Stack Developer
akinrogundecodenamemomi@gmail.com
Nigeria
github.com/codenamemomi
+2349011123434
codename-rho.vercel.app/

About Me
"I am a passionate Full Stack Developer with core expertise in Python back-end frameworks such as Django and Flask. I specialize in building efficient, scalable applications with a strong focus on API design, database architecture, and performance optimization.
My background in Mass Communication from Babcock University has sharpened my research, reconnaissance, and analytical skills - a unique asset in fields like ethical hacking and cybersecurity. This perspective enhances my ability to approach development and security challenges creatively and strategically.
I’m currently advancing my front-end development skills in HTML, CSS, JavaScript, and React, enabling me to deliver complete, end-to-end solutions. I’ve also been working on an AI project that combines code assistance with natural conversation, aimed at making programming more intuitive and interactive.
I’m eager to contribute to impactful projects, grow as a developer, and bridge the gap between technology, communication, and user experience."

Experience
Dates
Nigeria
Freelance Web Developer
Self-Employed
• Built custom web applications for clients using Flask and Django.
• Designed and implemented PostgreSQL databases for data storage.
• Provided maintenance and support for databases for deployed applications.
• Helped in the connection of databases to the back-end service
03/2025 – 06/2025
Lagos, Nigeria
Back-end Developer and Devops
Mentorled
• Collaborated with a team as their backend developer to build scalable api endpoints for the web application
• Built and integrated the API using FastAPI
• Optimized the database and improved the performance
• Maintained and managed the back-end server
01/2024
Nigeria
Back-end Development Intern
HNG Internship
• Collaborated with a team to develop and maintain back-end systems for web applications.
• Built and integrated RESTful API using Django and Flask.
• Optimized database queries and improved application performance.
• Gained hands-on experience with version control (Git) and agile development practices.
• Helped with the open source Telex integration project on GitHub.
01/2024
Nigeria
Back-end Development Apprentice
UNIVELCITY
• Built and integrated a RESTful API using Django to build an e-commerce site as a capstone project.
• Optimized database queries and improved web application performance with better security using CORS.

Education
Bachelor of Arts in Mass Communication (IN VIEW)
Babcock University
• Mass Communication: Time management, Communication, Strategic planning, Strategic planning.

Skills
Back-end Development
Django, Flask, Node.js
Other
Problem Solving, Debugging, API Integration, Teamwork, Creativity, Discipline, Technical proficiency, Adaptability, Time management, Communication, Strategic planning, Strategic planning
Databases
SQL, PostgreSQL, MySQL, MongoDB
Front-end Development
HTML, CSS, JavaScript (Basic), React (Basic)

Achievements
Won a hackathon
Tools
Git, Docker, REST API, Fast API, CI/CD

Hobbies
Basketball
Basketball fuels my competitive spirit, allowing me to improve my skills on the court while enjoying teamwork and strategy.
Gym
Gym keeps me fit and focused, providing a balance to my hobbies and fostering discipline in my daily life.
Gaming
Gaming immerses me in diverse worlds, enhancing my creativity and problem-solving abilities.
Coding
Coding is my cosmic playground, where I transform ideas into reality through technology, often inspired by intricate anime plots.

Achievements
Won a hackathon
• Won a hackathon for developing a task management tool using Django.
Contributed to an open-source project
• Contributed to an open-source project by fixing bugs in a Flask-based application.
Got to Stage 10 in the HNG internship program
• Got to Stage 10 in the HNG internship program and recognized as a finalist

Projects
Personal Blog with Django
Description: Developed a fully functional blog application where users can create, edit, and delete posts. The application includes user authentication and a responsive design.
Role: Designed and implemented the back-end logic, database schema, and REST API.
Technologies Used: Django, PostgreSQL, HTML, CSS, Python.
GitHub: GitHub Repository

Outbound AI Calling Agent
Description: Outbound AI is a call automation solution that helps businesses save time and improve communication by handling small-scale to large-scale outgoing phone calls with minimal human intervention.
Role: Designed and implemented the back-end logic, database schema, Payment integrations and Fast-API
Technologies Used: Fast-API, PostgreSQL, JavaScript, Node.js, React, CSS, Python.
Link: Outbound.im
GitHub: GitHub Repository

E-Commerce Back-end with Django
Description: Built a back-end for an e-commerce platform with features like user authentication, product management, and order processing.
Role: Developed the back-end logic, database integration, and REST API.
Technologies Used: Django, MySQL, REST Framework, Python.
GitHub: GitHub Repository

Inventory Management System
Description: Created an inventory management system to track products, stock levels, and sales.
Role: Designed the database schema, implemented CRUD operations, and built the back-end logic.
Technologies Used: Flask, SQLite, HTML/CSS, Python.

Wunmi's Booking API
Description: A service that stores booking information from the front-end service
Role: Helped in the developing and connection of the database to the back-end service.
Technologies: Django, RESTful-API, PostgreSQL, Python.
Link: Wunmi
GitHub: GitHub Repository

Clust
Description: A minimalist event planning tool designed specifically for small groups and communities
Role: Developed API endpoints, managed database and management of server
Technologies: Fast API, PostgreSQL, Python.
GitHub: GitHub Repository

Certifications
CERTIFICATE OF COMPLETION
Successful completion of Univelcity's Backend with Python course
HNG FINALIST
Became a finalist in HNG internship 12 being part of the top 432 out of 11,285

Contact Me
Email
akinrogundej@gmail.com
Portfolio
https://codename-rho.vercel.app/
Phone
+2349011123434
GitHub
https://github.com/codenamemomi
`;

const Resume = () => {
  return (
    <section className={styles.resumeSection} id="resume">
      <div className={styles.resumeCard}>
        <h2 className={styles.heading}>📄 My Resume</h2>

        <div className={styles.viewerWrapper}>
          <pre className={styles.resumeViewer}>
            {resumeText}
          </pre>
        </div>

        <div className={styles.buttonGroup}>
          <a
            href="path-to-your-resume.pdf"
            download="Your Name - Resume.pdf"
            className={styles.downloadBtn}
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;