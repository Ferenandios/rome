import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";

const Title: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="lg:order-1">
        <h1 className="font-bold text-[24px] leading-[28px]">
          {currentService.title}
        </h1>
      </div>
    </>
  );
};

export default Title;
