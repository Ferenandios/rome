import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import Form from "../../../../Form/Form";

const Image: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex w-full h-[234px] gap-[16px] sm:h-[300px] md:h-[500px] lg:h-[578px] lg:order-2">
        <img
          className="w-full h-full object-cover lg:w-[440px]"
          src={currentService.image}
          alt="Service Image"
        />
        <div className="hidden lg:flex">
          <Form layout="hidden" />
        </div>
      </div>
    </>
  );
};

export default Image;
