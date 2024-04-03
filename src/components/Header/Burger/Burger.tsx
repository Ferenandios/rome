import Hamburger from "hamburger-react";
import { FC } from "react";
import { toggleBurgerIsOpen } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";

const Burger: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { burgerIsOpen } = useAppSelector((state) => state);
  return (
    <>
      <div className="flex items-center h-full">
        <Hamburger
          toggled={burgerIsOpen}
          toggle={() => dispatch(toggleBurgerIsOpen())}
          direction="right"
          size={28}
          rounded
        />
      </div>
    </>
  );
};

export default Burger;
