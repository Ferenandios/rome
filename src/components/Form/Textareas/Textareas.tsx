import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Textarea from "./Textarea/Textarea";
import styles from "./Textareas.module.css";

const Textareas: FC = (): JSX.Element => {
  const { textareaList } = useAppSelector((state) => state.form);
  return (
    <>
      <div className={styles.inner}>
        {textareaList.map((textarea) => (
          <Textarea key={textarea.id} textarea={textarea} />
        ))}
      </div>
    </>
  );
};

export default Textareas;
