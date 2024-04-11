import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Copyright: FC = (): JSX.Element => {
  const { companyName } = useAppSelector((state) => state.global);
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center w-[100px] mt-[16px] md:mt-0 lg:justify-end lg:w-[350px]">
        <span className="font-sans font-semibold text-[12px] text-right">
          &copy; {year} {companyName}
        </span>
      </div>
    </>
  );
};

export default Copyright;
