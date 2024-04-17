import styles from "./button.module.css";

type ButtonProps = {
  type?: "button" | "submit";
  style: "outlined" | "filled" | "white";
  text: string;
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  style,
  handleClick,
}) => {
  const styleMap: { [key in ButtonProps["style"]]: string } = {
    outlined: styles.buttonOutlined,
    filled: styles.buttonFilled,
    white: styles.buttonWhite,
  };

  const buttonStyle = styleMap[style] || styles.button;

  return (
    <button
      type={type}
      className={`${styles.button} ${buttonStyle}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export { Button };
