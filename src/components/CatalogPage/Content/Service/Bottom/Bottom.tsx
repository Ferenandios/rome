import { FC } from "react";
import Description from "./Description/Description";
import Form from "../../../../Form/Form";
import styles from "./Bottom.module.css";
import { useAppSelector } from "../../../../../hooks";

const Bottom: FC = (): JSX.Element => {
  const { description } = useAppSelector(
    (state) => state.global.currentService
  );
  return (
    <>
      <div className={styles.inner}>
        <Description />
        <div style={{ display: description.length > 0 ? "flex" : "none" }}>
          <Form />
        </div>

        {description.length === 0 && (
          <div className="flex lg:hidden">
            <Form />
          </div>
        )}
      </div>
    </>
  );
};

export default Bottom;
