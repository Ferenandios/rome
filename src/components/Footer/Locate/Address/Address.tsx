import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Address: FC = (): JSX.Element => {
  const { companyAddress } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="hidden md:block w-[200px]">
        <address className="font-sans font-semibold text-[12px] text-right">
          {companyAddress}
        </address>
      </div>
    </>
  );
};

export default Address;
