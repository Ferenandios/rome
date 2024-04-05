import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Logo: FC = (): JSX.Element => {
  const { logoIcon } = useAppSelector((state) => state.footer);
  return (
    <>
      <div className="flex justify-center w-full h-[50px] mt-[24px]">
        <img className="h-full" src={logoIcon} alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
