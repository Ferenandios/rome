import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Animation.module.css";

const Animation: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        style={{ borderColor: colorTheme }}
        className={styles.neurosama}
      ></div>
    </>
  );
};

export default Animation;
