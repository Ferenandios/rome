import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import styles from "./Title.module.css";

const Title: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.title}>{currentService.title}</h1>
      </div>
    </>
  );
};

export default Title;
