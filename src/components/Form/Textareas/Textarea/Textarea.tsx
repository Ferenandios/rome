import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { ITextarea } from "../../../../types/Form/types";
import styles from "./Textarea.module.css";

const Textarea: FC<{ textarea: ITextarea }> = ({ textarea }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.inner}>
        <h2 className={styles.title}>{textarea.title}</h2>
        <textarea
          style={{ borderColor: colorTheme }}
          className={styles.textarea}
          placeholder={textarea.placeholder}
          defaultValue={textarea.text}
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
