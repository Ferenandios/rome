import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Shit.module.css";

const Shit: FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.global);
  return <>{isShowModal && <div className={styles.shit}></div>}</>;
};

export default Shit;
