import { FC } from "react";
import Layout from "./Layout/Layout";
import Form from "../../../../Form/Form";
import styles from "./Send.module.css";

const Send: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Layout />
        <div className="w-full">
          <Form layout="hidden" />
        </div>
      </div>
    </>
  );
};

export default Send;
