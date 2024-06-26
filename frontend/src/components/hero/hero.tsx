import { Button } from "../components";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  const scrollToTarget = () => {
    const targetBlock = document.getElementById("deals");
    if (targetBlock) {
      targetBlock.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>The chemical negatively charged</h1>
        <p>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is{" "}
        </p>
        <div className={styles.buttonContainer}>
          <Button
            style="white"
            text="get started"
            handleClick={scrollToTarget}
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
