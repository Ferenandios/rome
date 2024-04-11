import Hamburger from "hamburger-react";
import { FC } from "react";
import { toggleBurgerIsOpen } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Crumb from "./Crumb/Crumb";
import { titleType } from "../../../types/Header/types";

const Burger: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { burgerIsOpen } = useAppSelector((state) => state.global);
  const titles: titleType[] = ["Контакты", "Навигация"];
  return (
    <>
      <div className="z-40 flex items-center h-full">
        <Hamburger
          toggled={burgerIsOpen}
          toggle={() => dispatch(toggleBurgerIsOpen())}
          direction="right"
          size={28}
          rounded
        />
      </div>
      <nav
        className={`fixed z-30 top-0 left-0 touch-none flex flex-col ${
          burgerIsOpen ? "w-screen" : "w-0"
        } h-screen bg-white gap-[8px] overflow-hidden origin-right duration-500`}
      >
        {titles.map((title, index) => (
          <Crumb key={index} title={title} />
        ))}
      </nav>
    </>
  );
};

export default Burger;
