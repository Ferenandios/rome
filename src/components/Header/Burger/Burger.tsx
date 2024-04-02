import { FC } from "react";
import Hamburger from "hamburger-react";

const Burger: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center h-full">
        <Hamburger direction="right" size={28} rounded />
      </div>
    </>
  );
};

export default Burger;
