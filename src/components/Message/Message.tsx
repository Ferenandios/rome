import { FC } from "react";
import Animation from "./Animation/Animation";
import Button from "./Button/Button";
import { useAppSelector } from "../../hooks";

// position: absolute;
//     top: -8px;
//     left: -8px;
//     height: 82px;
//     min-width: 66px;
//     -webkit-width: calc(100% + 16px);
//     width: calc(100% + 16px);
//     border-radius: 100px;
//     background: #00aeef;
//     opacity: .2;

const Message: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div
        style={{ background: colorTheme + "33" }}
        className="md:hidden fixed z-30 bottom-[35px] right-[35px] flex justify-center items-center bg-opacity-20 w-[69px] h-[69px] rounded-full"
      >
        <div className="relative w-[56px] h-[56px]">
          <Animation />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Message;
