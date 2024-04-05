import { FC } from "react";
import { useAppSelector } from "../../hooks";

const Message: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { logoIcon } = useAppSelector((state) => state.message);
  return (
    <>
      <div
        className={`md:hidden fixed z-20 bottom-[15px] right-[15px] flex justify-center items-center w-[50px] h-[50px] bg-[${colorTheme}] rounded-full`}
      >
        <img className="w-[47%]" src={logoIcon} alt="Write" />
      </div>
    </>
  );
};

export default Message;
