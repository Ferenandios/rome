import { FC } from "react";
import Animation from "./Animation/Animation";
import Button from "./Button/Button";

const Message: FC = (): JSX.Element => {
  return (
    <>
      <div className="md:hidden animate-bounce fixed z-30 bottom-[15px] right-[15px]">
        <Animation />
        <Button />
      </div>
    </>
  );
};

export default Message;
