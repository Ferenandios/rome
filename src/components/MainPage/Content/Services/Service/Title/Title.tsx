import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";

const Title: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  const { title } = useAppSelector((state) => state.global.services[serviceId]);
  return (
    <>
      <div className="flex justify-center items-center w-full h-[60px] bg-white overflow-hidden">
        <h3 className="font-bold text-[14px] text-center max-h-full leading-[16px]">
          {title}
        </h3>
      </div>
    </>
  );
};

export default Title;
