import { Button } from "../components";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "../../store/store";
import { logout } from "../../store/auth/actions";

const Header: React.FC = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const hideButtons = location.pathname === "/register";
  const { accessToken } = useSelector((state: IRootState) => state.auth);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.buttonsContainer}>
        {!hideButtons && (
          <div className={styles.buttonsContainer}>
            {accessToken ? (
              <Button text="logout" style="filled" handleClick={handleClick} />
            ) : (
              <>
                <Link to="register" className={styles.buttonLink}>
                  <Button text="log in" style="outlined" />
                </Link>
                <Link to="register" className={styles.buttonLink}>
                  <Button text="sign up" style="filled" />
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
