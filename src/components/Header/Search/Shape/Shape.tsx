import { FC } from "react";
import shapeAsset from "/src/assets/Header/Shape.svg";

const Shape: FC = (): JSX.Element => {
  return (
    <>
      <div className="absolute right-[8px]">
        <img className="w-[12px] h-[12px]" src={shapeAsset} alt="Shape" />
      </div>
    </>
  );
};

export default Shape;
