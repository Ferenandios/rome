import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { IInput } from "../../../../types/Form/types";
import styles from "./Input.module.css";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.inner}>
        <p className={styles.title}>{input.title}</p>
        <input
          style={{ borderColor: colorTheme }}
          className={styles.input}
          placeholder={input.placeholder}
          type={input.type}
          required
        />
      </div>
    </>
  );
};

export default Input;
