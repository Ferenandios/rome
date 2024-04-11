import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";

const Image: FC<{ serivceId: number }> = ({ serivceId }): JSX.Element => {
  const { image } = useAppSelector((state) => state.global.services[serivceId]);
  return (
    <>
      <div className="w-full h-[200px] bg-black bg-opacity-10 sm:h-[400px] md:h-[200px]">
        <img
          className="w-full h-full sm:object-cover"
          src={image}
          alt="Service Image"
        />
      </div>
    </>
  );
};

export default Image;
