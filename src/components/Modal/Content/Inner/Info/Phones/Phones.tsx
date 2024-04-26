import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Phone from "./Phone/Phone";

const Phones: FC = (): JSX.Element => {
  const { phones } = useAppSelector((state) => state.global.contacts);
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        {phones.map((phone, index) => (
          <Phone key={index} phone={phone} />
        ))}
      </div>
    </>
  );
};

export default Phones;
