import { FC } from "react";
import Description from "./Description/Description";
import Form from "../../../Form/Form";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <Description />
        <Form />
      </div>
    </>
  );
};

export default Bottom;
