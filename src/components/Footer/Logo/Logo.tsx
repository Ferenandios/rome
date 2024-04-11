import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Logo: FC = (): JSX.Element => {
  const { companyLogo } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex justify-center w-full h-[50px] mt-[24px] md:mt-0">
        <img className="h-full" src={companyLogo} alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
