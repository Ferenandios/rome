import { FC } from "react";
import Title from "./Title/Title";
import Exit from "./Exit/Exit";

const Top: FC = (): JSX.Element => {
  return (
    <>
      <div className="relative">
        <Title />
        <Exit />
      </div>
    </>
  );
};

export default Top;
