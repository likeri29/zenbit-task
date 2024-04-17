import { Button } from "../components";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const hideButtons = location.pathname === "/register";
  return (
    <header className={styles.header}>
      <div className={styles.buttonsContainer}>
        {!hideButtons && (
          <div className={styles.buttonsContainer}>
            <Link to="register" className={styles.buttonLink}>
              <Button text="log in" style="outlined" />
            </Link>
            <Link to="register" className={styles.buttonLink}>
              <Button text="sign up" style="filled" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
