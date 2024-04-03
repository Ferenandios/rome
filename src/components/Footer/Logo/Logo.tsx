import { FC } from "react";
import logoAsset from "/logo.jpg";

const Logo: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center w-full h-[50px] mt-[24px]">
        <img className="h-full" src={logoAsset} alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
