import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Link from "./Link/Link";
import styles from './Text.module.css'

const Text: FC = (): JSX.Element => {
  const { contacts } = useAppSelector((state) => state.header);
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          {contacts.map((contact) => (
            <Link key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Text;
