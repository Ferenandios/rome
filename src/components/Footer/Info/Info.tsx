import { FC, Fragment } from "react";
import { useAppSelector } from "../../../hooks";
import { type titleType } from "../../../types/Footer/types";
import Links from "./Links/Links";
import Title from "./Title/Title";
import styles from "./Info.module.css";

const Info: FC = (): JSX.Element => {
  const { categories, contacts } = useAppSelector((state) => state.footer);
  const titles: titleType[] = ["Категории", "Контакты"];
  return (
    <>
      <div className={styles.inner}>
        {titles.map((title, index) => (
          <Fragment key={index}>
            {/* NONE */}
            <div
              className={`md:hidden ${
                title === "Контакты" && "text-right"
              } flex flex-col gap-[4px]`}
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
