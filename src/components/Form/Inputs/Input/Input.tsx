import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { IInput } from "../../../../types/Form/types";
import styles from "./Input.module.css";
import { setSubmitItem } from "../../../../features/global.slice";

const Input: FC<{ input: IInput }> = ({ input }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const value = useAppSelector((state) => state.global.submit[input.type]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSubmitItem({ key: input.type, value: event.target.value }));
  };
  return (
    <>
      <div className={styles.inner}>
        <p className={styles.title}>{input.title}</p>
        <input
          onChange={(event) => handleChange(event)}
          style={{ borderColor: colorTheme }}
          className={styles.input}
          placeholder={input.placeholder}
          type={input.type}
          value={value}
          required
        />
      </div>
    </>
  );
};

export default Input;
