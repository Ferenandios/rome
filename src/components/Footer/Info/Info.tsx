import { FC } from "react";
import Links from "./Links/Links";
import { type IFooterLinksList } from "../../../types/types";

const Info: FC = (): JSX.Element => {
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
      text: [
        { text: "+7 (346) 667-16-91" },
        { text: "21-48-48" },
        { text: "21-48-40" },
        { text: "remiksnv@yandex.ru" },
      ],
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
