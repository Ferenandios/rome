import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import styles from "./Line.module.css";

const Line: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <hr className={styles.line} style={{ borderColor: colorTheme }} />
    </>
  );
};

export default Line;
