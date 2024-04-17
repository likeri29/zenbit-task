import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, FormRow } from "../../components/components";
import { AppDispatch, IRootState } from "../../store/store";
import { loginUser, registerUser } from "../../store/auth/actions";
import registerImg from "../../assets/register-image.png";
import styles from "./register.module.css";

const initialValues = {
  email: "",
  password: "",
  isMember: false,
};

const Register: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state: IRootState) => state.auth);
  console.log(accessToken);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, isMember } = values;

    if (!email || !password) {
      alert(`please fill out all fields`);
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ email, password }));
  };

  useEffect(() => {
    if (accessToken) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [accessToken, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <div className={styles.register}>
      <img src={registerImg} alt="dubai" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.header}>
          {values.isMember ? "login" : "register"}
        </h3>
        <FormRow
          handleChange={handleChange}
          name="email"
          type="email"
          value={values.email}
          labelText="Email"
          placeholder="Email"
        />
        <FormRow
          handleChange={handleChange}
          name="password"
          type="password"
          value={values.password}
          labelText="Password"
          placeholder="Password"
        />
        <button type="button" className={styles.button}>
          Forgot password?
        </button>
        <Button
          type="submit"
          style="filled"
          text={values.isMember ? "login" : "register"}
        />
        <p className={styles.member}>
          {values.isMember ? "Don't have account?" : "Already have account"}
          <button
            type="button"
            onClick={toggleMember}
            className={styles.button}
          >
            {values.isMember ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </form>
    </div>
  );
};

export { Register };
