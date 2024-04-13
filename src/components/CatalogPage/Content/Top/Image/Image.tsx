import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";

const Image: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="w-full h-[234px]">
        <img
          className="w-full h-full"
          src={currentService.image}
          alt="Service Image"
        />
      </div>
    </>
  );
};

export default Image;
