import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  const { sendTo, colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.form);
  const handleClick = () => {
    alert(sendTo);
  };
  return (
    <>
      <div style={{ backgroundColor: colorTheme }} className={styles.inner}>
        <button onClick={handleClick} className={styles.button} type="submit">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
