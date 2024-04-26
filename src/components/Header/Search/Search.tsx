import { FC } from "react";
import Input from "./Input/Input";
import Shape from "./Shape/Shape";
import styles from "./Search.module.css";

const Search: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <Input />
        <Shape />
      </div>
    </>
  );
};

export default Search;
