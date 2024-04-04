import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { titleType } from "../../../../types/Header/types";
import Text from "./Text/Text";
import Title from "./Title/Title";

const Crumb: FC<{ title: titleType }> = ({ title }): JSX.Element => {
  const { contacts, navigation } = useAppSelector((state) => state.header);
  return (
    <>
      <div className="flex flex-col pl-[30px] first:pt-[40px]">
        <Title title={title} />
        <div className="flex flex-col">
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
