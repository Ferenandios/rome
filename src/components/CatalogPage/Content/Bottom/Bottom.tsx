import { FC } from "react";
import Description from "./Description/Description";
import Form from "../../../Form/Form";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <div>
        <Description />
        <Form />
      </div>
    </>
  );
};

export default Bottom;
