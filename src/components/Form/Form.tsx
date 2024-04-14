import { FC } from "react";
import Inputs from "./Inputs/Inputs";
import Textareas from "./Textareas/Textareas";
import Button from "./Button/Button";
import Layout from "./Layout/Layout";
import { useAppSelector } from "../../hooks";

const Form: FC<{ width?: string }> = ({ width }): JSX.Element => {
  const { layout } = useAppSelector((state) => state.global.currentService);
  return (
    <>
      <div
        style={{ justifyContent: !layout.length ? "center" : "space-between" }}
        className="md:flex"
      >
        <div
          style={{
            width: width !== undefined ? width : "",
          }}
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
