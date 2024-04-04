import { FC } from "react";
import { NavLink } from "react-router-dom";
import { toggleBurgerIsOpen } from "../../../../../features/global.slice";
import { useAppDispatch } from "../../../../../hooks";
import { type IElement } from "../../../../../types/Header/types";

const Text: FC<{ el: IElement }> = ({ el }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleBurgerIsOpen());
  };
  return (
    <>
      <NavLink
        onMouseUp={handleClick}
        className={({ isActive, isPending }) =>
          `${
            isPending || (isActive && "font-semibold")
          } text-[16px] w-[calc(100vw-34px)] overflow-hidden`
        }
        to={el.link}
      >
        {el.text}
      </NavLink>
    </>
  );
};

export default Text;
