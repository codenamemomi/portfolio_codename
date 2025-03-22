import { useEffect } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide splash screen after animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={styles.splashScreen}>
      <h1 className={styles.name}>WELCOME to CODENAME</h1>
    </div>
  );
};

export default SplashScreen;
