import { FC } from "react";
import Button from "./Button/Button";
import Text from "./Text/Text";

const Contact: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex gap-[16px]">
        <Text />
        <Button />
      </div>
    </>
  );
};

export default Contact;
