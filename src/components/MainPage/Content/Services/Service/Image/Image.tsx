import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";

const Image: FC<{ serivceId: number }> = ({ serivceId }): JSX.Element => {
  const { image } = useAppSelector((state) => state.services[serivceId]);
  return (
    <>
      <div className="w-full h-[200px]">
        <img className="w-full h-full" src={image} alt="Service Image" />
      </div>
    </>
  );
};

export default Image;
