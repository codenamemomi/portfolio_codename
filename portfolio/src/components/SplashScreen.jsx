import { useEffect } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide splash after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={styles.splashScreen}>
      <img src="/codename.ico" alt="Logo" className={styles.logo} />
      <h1 className={styles.name}>HEY USER!</h1>
    </div>
  );
};

export default SplashScreen;
