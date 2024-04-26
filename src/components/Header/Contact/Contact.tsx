import { FC } from "react";
import Button from "./Button/Button";
import Text from "./Text/Text";
import styles from './Contact.module.css'

const Contact: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Text />
        <Button />
      </div>
    </>
  );
};

export default Contact;
