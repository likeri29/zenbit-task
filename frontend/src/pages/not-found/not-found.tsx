import styles from "./not-found.module.css";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundHeader}>404 - Not Found</h1>
      <p className={styles.notFoundMessage}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.link}>
        Go to Homepage
      </Link>
    </div>
  );
};

export { NotFound };
