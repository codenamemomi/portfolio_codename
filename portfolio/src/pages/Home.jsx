import Hero from "./Hero";
import Certificates from "./Certificate";
import styles from "./Home.module.css"; // Optional CSS module for layout control

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Certificates />
    </div>
  );
};

export default Home;
