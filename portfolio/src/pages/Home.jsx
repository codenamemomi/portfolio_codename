import Hero from "./Hero";
import Certificates from "./Certificate";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Certificates />
    </div>
  );
};

export default Home;
