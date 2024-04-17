import { Button } from "../components";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.buttonsContainer}>
        <Button text="log in" style="outlined" />
        <Button text="sign up" style="filled" />
      </div>
    </header>
  );
};

export { Header };
