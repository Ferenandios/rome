import { FC } from "react";
import { titleType } from "../../../types/Footer/types";
import Links from "./Links/Links";
import { useAppSelector } from "../../../hooks";
import Title from "./Title/Title";
import { Fragment } from "react";

const Info: FC = (): JSX.Element => {
  const { categories, contacts } = useAppSelector((state) => state.footer);
  const titles: titleType[] = ["Категории", "Контакты"];
  return (
    <>
      <div className="flex justify-between md:flex-col md:gap-[12px] lg:flex-row lg:gap-[16px]">
        {titles.map((title, index) => (
          <Fragment key={index}>
            {/* NONE */}
            <div
              className={`md:hidden ${
                title === "Контакты" && "text-right"
              } flex flex-col gap-[4px]`}
              key={index}
            >
              <Title title={title} />
              <div>
                {title === "Категории" && (
                  <>
                    {categories.map((category) => (
                      <Links key={category.id} element={category} />
                    ))}
                  </>
                )}
                {title === "Контакты" && (
                  <>
                    {contacts.map((contact) => (
                      <Links key={contact.id} element={contact} />
                    ))}
                  </>
                )}
              </div>
            </div>
            {/* MD */}
            <div className="hidden md:flex flex-col gap-[4px]" key={index}>
              <Title title={title} />
              <div>
                {title === "Категории" && (
                  <>
                    {categories.map((category) => (
                      <Links key={category.id} element={category} />
                    ))}
                  </>
                )}
                {title === "Контакты" && (
                  <>
                    {contacts.map((contact) => (
                      <Links key={contact.id} element={contact} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Info;
