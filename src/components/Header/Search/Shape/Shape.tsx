import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Shape: FC = (): JSX.Element => {
  const { searchIcon } = useAppSelector((state) => state.header);
  return (
    <>
      <div className="absolute right-[8px] md:right-[12px]">
        <img
          className="w-[12px] h-[12px] md:w-[16px] md:h-[16px]"
          src={searchIcon}
          alt="Shape"
        />
      </div>
    </>
  );
};

export default Shape;
