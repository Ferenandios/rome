import { FC } from "react";
import Text from "./Text/Text";
import Phones from "./Phones/Phones";
import styles from "./Info.module.css";

const Info: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Text />
        <Phones />
      </div>
    </>
  );
};

export default Info;
