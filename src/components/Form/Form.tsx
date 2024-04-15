import { FC } from "react";
import Button from "./Button/Button";
import Inputs from "./Inputs/Inputs";
import Layout from "./Layout/Layout";
import Textareas from "./Textareas/Textareas";

const Form: FC<{ layout?: "hidden" }> = ({ layout }): JSX.Element => {
  return (
    <>
      <div className="md:flex justify-between lg:justify-normal lg:gap-[16px]">
        <form className="flex flex-col gap-[8px] md:w-[440px] lg:w-[358px]">
          <Inputs />
          <Textareas />
          <Button />
        </form>
        {layout !== "hidden" && <Layout />}
      </div>
    </>
  );
};

export default Form;
