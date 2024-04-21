import { FC } from "react";
import Description from "./Description/Description";
import Form from "../../../../Form/Form";
import styles from "./Bottom.module.css";

const Bottom: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Description />
        <Form />
      </div>
    </>
  );
};

export default Bottom;
