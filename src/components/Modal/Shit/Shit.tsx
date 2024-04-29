import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./Shit.module.css";
import { toggleIsShowModal } from "../../../features/global.slice";

const Shit: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isShowModal } = useAppSelector((state) => state.global);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      {isShowModal && <div onClick={handleClick} className={styles.shit}></div>}
    </>
  );
};

export default Shit;
