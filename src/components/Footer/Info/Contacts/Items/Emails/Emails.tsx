import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Email from "./Email/Email";
import styles from "./Emails.module.css";

const Emails: FC = (): JSX.Element => {
  const { emails } = useAppSelector((state) => state.global.contacts);
  return (
    <>
      <div className={styles.inner}>
        {emails.map((email, index) => (
          <Email key={index} email={email} />
        ))}
      </div>
    </>
  );
};

export default Emails;
