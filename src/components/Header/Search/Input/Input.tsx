import { FC, useEffect } from "react";
import {
  setSearch,
  setSearchPlaceholder,
} from "../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import styles from "./Input.module.css";

const Input: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { placeholder, search } = useAppSelector((state) => state.global);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };
  useEffect(() => {
    dispatch(setSearchPlaceholder());
  }, []);
  return (
    <>
      <input
        className={styles.input}
        onChange={handleChange}
        value={search}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
};

export default Input;
