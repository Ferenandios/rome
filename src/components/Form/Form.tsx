import { FC } from "react";
import Inputs from "./Inputs/Inputs";
import Textareas from "./Textareas/Textareas";
import Button from "./Button/Button";
import Layout from "./Layout/Layout";

const Form: FC<{ width?: string }> = ({ width }): JSX.Element => {
  return (
    <>
      <div className="md:flex md:justify-between">
        <div
          style={{ width: width !== undefined ? width : "" }}
          className="flex flex-col gap-[8px] md:w-[440px]"
        >
          <Inputs />
          <Textareas />
          <Button />
        </div>
        <Layout />
      </div>
    </>
  );
};

export default Form;
