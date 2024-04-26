import { FC } from "react";
import Layout from "./Layout/Layout";
import Form from "../../../../Form/Form";

const Send: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center gap-[12px]">
        <Layout />
        <Form layout="hidden" />
      </div>
    </>
  );
};

export default Send;
