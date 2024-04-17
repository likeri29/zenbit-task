import { useState, ChangeEvent } from "react";
import { Button, FormRow } from "../../components/components";
import registerImg from "../../assets/register-image.png";
import styles from "./register.module.css";

const initialValues = {
  email: "",
  password: "",
  isMember: false,
};

const Register: React.FC = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <div className={styles.register}>
      <img src={registerImg} alt="dubai" />
      <form className={styles.form}>
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
