import { FC, useEffect } from "react";
import {
  toggleIsShowMessage,
  toggleIsShowModal,
} from "../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Animation from "./Animation/Animation";
import Button from "./Button/Button";
import styles from "./Message.module.css";

const Message: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme, isShowMessage } = useAppSelector((state) => state.global);
  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleIsShowMessage());
    }, 3000);
  }, [dispatch]);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      {isShowMessage && (
        <button
          onClick={handleClick}
          style={{ background: colorTheme + "33" }}
          className={styles.ansoc}
        >
          <div className={styles.inner}>
            <Animation />
            <Button />
          </div>
        </button>
      )}
    </>
  );
};

export default Message;
