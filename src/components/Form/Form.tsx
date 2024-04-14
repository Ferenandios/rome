import { FC } from "react";
import Inputs from "./Inputs/Inputs";
import Textareas from "./Textareas/Textareas";
import Button from "./Button/Button";
import Layout from "./Layout/Layout";

const Form: FC<{ width?: string }> = ({ width }): JSX.Element => {
  return (
    <>
      <div
        style={{ width: width !== undefined ? width : "" }}
        className="flex flex-col gap-[8px]"
      >
        <Inputs />
        <Textareas />
        <Button />
        <Layout />
      </div>
    </>
  );
};

export default Form;
