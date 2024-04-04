import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Copyright: FC = (): JSX.Element => {
  const { companyName } = useAppSelector((state) => state.global);
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex justify-center mt-[16px]">
        <span className="font-sans font-semibold text-[12px]">
          &copy; {year} {companyName}
        </span>
      </div>
    </>
  );
};

export default Copyright;
