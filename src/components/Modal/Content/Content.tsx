import { FC } from "react";
import Inner from "./Inner/Inner";
import Top from "./Top/Top";
import { useAppSelector } from "../../../hooks";
import styles from "./Content.module.css";

const Content: FC = (): JSX.Element => {
  const { isShowModal, colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        style={{ width: isShowModal ? "500px" : "0" }}
        className={styles.ansoc}
      >
        <div style={{ borderColor: colorTheme }} className={styles.inner}>
          <Top />
          <Inner />
        </div>
      </div>
    </>
  );
};

export default Content;
