import { FC } from "react";
import { toggleIsShowModal } from "../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import styles from './Button.module.css'

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.header);
  const handleCLick = () => {
    dispatch(toggleIsShowModal());
  };
  return (
    <>
      <div className={styles.ansoc}>
        <button
          onMouseUp={handleCLick}
          style={{ backgroundColor: colorTheme }}
          className={styles.inner}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
