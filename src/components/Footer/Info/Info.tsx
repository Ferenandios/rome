import { FC } from "react";
import Links from "./Links/Links";
import { type IFooterLinksList } from "../../../types/types";
import { useAppSelector } from "../../../hooks";

const Info: FC = (): JSX.Element => {
  const { contacts } = useAppSelector((state) => state.global);
  const generateLinksListText = (): { text: string }[] =>
    contacts.phones.concat(contacts.emails).map((e) => ({ text: e }));
  const linksList: IFooterLinksList[] = [
    {
      title: "Категории",
      text: [
        { text: "Главная" },
        { text: "Каталог оборудования" },
        { text: "Обратная связь" },
      ],
      styles: { text: "left" },
    },
    {
      title: "Контакты",
      text: generateLinksListText(),
      styles: { text: "right" },
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        {linksList.map((links, index) => (
          <Links
            key={index}
            title={links.title}
            text={links.text}
            styles={links.styles}
          />
        ))}
      </div>
    </>
  );
};

export default Info;
