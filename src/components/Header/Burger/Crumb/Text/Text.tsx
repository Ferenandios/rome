import { FC } from "react";
import { NavLink } from "react-router-dom";
import { toggleBurgerIsOpen } from "../../../../../features/global.slice";
import { useAppDispatch } from "../../../../../hooks";
import { type IElement } from "../../../../../types/Header/types";
import styles from "./Text.module.css";

const Text: FC<{ el: IElement }> = ({ el }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleBurgerIsOpen());
  };

  return (
    <>
      <NavLink
        onMouseUp={handleClick}
        style={({ isActive }) => ({
          fontWeight: isActive ? "semibold" : "",
        })}
        className={styles.link}
        to={el.link}
      >
        {el.text}
      </NavLink>
    </>
  );
};

export default Text;
