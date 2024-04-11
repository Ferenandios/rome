import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="hidden md:flex w-[200px] lg:justify-end lg:w-[350px]">
        <address className="font-sans font-semibold text-[12px] text-right">
          {companyAddress}
        </address>
      </div>
    </>
  );
};

export default Address;
