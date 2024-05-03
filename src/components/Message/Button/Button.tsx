import { FC } from "react";
import { toggleIsShowModal } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { logoIcon } = useAppSelector((state) => state.message);
  const handleClick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <button
        onMouseUp={handleClick}
        style={{ backgroundColor: colorTheme }}
        className={styles.button}
      >
        <img className={styles.img} src={logoIcon} alt="Write" />
      </button>
    </>
  );
};

export default Button;
