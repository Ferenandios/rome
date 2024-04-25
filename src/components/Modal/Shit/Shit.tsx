import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Shit: FC = (): JSX.Element => {
  const { isShowModal } = useAppSelector((state) => state.global);
  return (
    <>
      {isShowModal && (
        <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
      )}
    </>
  );
};

export default Shit;
