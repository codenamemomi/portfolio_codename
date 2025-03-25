import { useEffect } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={styles.splashScreen}>
      <div className={styles.logoContainer}>
        <h1 className={styles.name}>CODENAME</h1>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
