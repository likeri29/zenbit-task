import styles from "./form-row.module.css";

type FormRowProps = {
  type?: "email" | "text" | "password";
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  placeholder?: string;
};

const FormRow: React.FC<FormRowProps> = ({
  type = "text",
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <div className={styles.formRow}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export { FormRow };
