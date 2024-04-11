import { FC } from "react";
import { useAppSelector } from "../../../hooks";

// position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     border: 1px solid #00aeef;
//     border-radius: 50%;

const Animation: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        style={{ borderColor: colorTheme }}
        className="z-10 animate-widgetPulse absolute top-0 left-0 bottom-0 right-0 border-[1px] rounded-[50%] cursor-pointer"
      ></div>
    </>
  );
};

export default Animation;
