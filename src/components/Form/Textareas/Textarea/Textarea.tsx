import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { ITextarea } from "../../../../types/Form/types";
import styles from "./Textarea.module.css";
import { setSubmitItem } from "../../../../features/global.slice";

const Textarea: FC<{ textarea: ITextarea }> = ({ textarea }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { message } = useAppSelector((state) => state.global.submit);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setSubmitItem({ key: "message", value: event.target.value }));
  };
  return (
    <>
      <div className={styles.inner}>
        <h2 className={styles.title}>{textarea.title}</h2>
        <textarea
          onChange={(event) => handleChange(event)}
          style={{ borderColor: colorTheme }}
          className={styles.textarea}
          placeholder={textarea.placeholder}
          value={message}
        ></textarea>
      </div>
    </>
  );
};

export default Textarea;
