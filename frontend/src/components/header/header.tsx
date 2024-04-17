import { Button } from "../components";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const hideButtons = location.pathname === "/register";
  return (
    <header className={styles.header}>
      <div className={styles.buttonsContainer}>
        {!hideButtons && (
          <div className={styles.buttonsContainer}>
            <Button text="log in" style="outlined" />
            <Button text="sign up" style="filled" />
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
