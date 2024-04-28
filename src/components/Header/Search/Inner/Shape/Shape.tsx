import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Shape.module.css";

const Shape: FC = (): JSX.Element => {
  const { searchIcon } = useAppSelector((state) => state.header);
  return (
    <>
      <div className={styles.ansoc}>
        <img className={styles.img} src={searchIcon} alt="Shape" />
      </div>
    </>
  );
};

export default Shape;
