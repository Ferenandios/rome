import Hamburger from "hamburger-react";
import { FC } from "react";
import { toggleBurgerIsOpen } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { type ICrumb } from "../../../types/types";
import Crumb from "./Crumb/Crumb";

const Burger: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { burgerIsOpen } = useAppSelector((state) => state);
  const crumbs: ICrumb[] = [
    {
      title: "Контакты",
      text: [
        { text: "+7 (346) 667-16-91", active: false },
        { text: "remiksnv@yandex.ru", active: false },
      ],
    },
    {
      title: "Навигация",
      text: [
        { text: "Главная", active: true },
        { text: "Каталог оборудования", active: false },
        { text: "Обратная связь", active: false },
      ],
    },
  ];
  return (
    <>
      <div className="z-20 flex items-center h-full">
        <Hamburger
          toggled={burgerIsOpen}
          toggle={() => dispatch(toggleBurgerIsOpen())}
          direction="right"
          size={28}
          rounded
        />
      </div>
      {burgerIsOpen && (
        <>
          <nav className="fixed z-10 top-0 left-0 touch-none flex flex-col w-screen h-screen bg-white">
            {crumbs.map((crumb, index) => (
              <Crumb key={index} crumb={crumb} />
            ))}
          </nav>
        </>
      )}
    </>
  );
};

export default Burger;
