import { FC } from "react";
import Button from "./Button/Button";
import Inputs from "./Inputs/Inputs";
import Layout from "./Layout/Layout";
import Textareas from "./Textareas/Textareas";
import styles from "./Form.module.css";

const Form: FC<{ layout?: "hidden" }> = ({ layout }): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <form className={styles.form}>
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
