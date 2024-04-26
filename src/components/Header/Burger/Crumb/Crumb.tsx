import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { titleType } from "../../../../types/Header/types";
import Text from "./Text/Text";
import Title from "./Title/Title";
import styles from "./Crumb.module.css";

const Crumb: FC<{ title: titleType }> = ({ title }): JSX.Element => {
  const { contacts, navigation } = useAppSelector((state) => state.header);
  return (
    <>
      <div className={styles.inner}>
        <Title title={title} />
        <div className={styles.list}>
          {title === "Контакты" &&
            contacts.map((contact) => <Text key={contact.id} el={contact} />)}
          {title === "Навигация" &&
            navigation.map((element) => <Text key={element.id} el={element} />)}
        </div>
      </div>
    </>
  );
};

export default Crumb;
