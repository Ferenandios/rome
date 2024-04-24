import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div>
        <span className="text-[12px]">{companyAddress}</span>
      </div>
    </>
  );
};

export default Address;
