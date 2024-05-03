import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import styles from "./Title.module.css";

const Title: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  const { title } = useAppSelector((state) => state.global.services[serviceId]);
  return (
    <>
      <div className={styles.ansoc}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </>
  );
};

export default Title;
