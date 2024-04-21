import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Input from "./Input/Input";
import styles from "./Inputs.module.css";

const Inputs: FC = (): JSX.Element => {
  const { inputList } = useAppSelector((state) => state.form);
  return (
    <>
      <div className={styles.inner}>
        {inputList.map((input) => (
          <Input key={input.id} input={input} />
        ))}
      </div>
    </>
  );
};

export default Inputs;
