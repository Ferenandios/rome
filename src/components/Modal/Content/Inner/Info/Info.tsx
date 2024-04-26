import { FC } from "react";
import Text from "./Text/Text";
import Phones from "./Phones/Phones";

const Info: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-[12px]">
        <Text />
        <Phones />
      </div>
    </>
  );
};

export default Info;
