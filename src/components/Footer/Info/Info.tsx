import { FC } from "react";
import Links from "./Links/Links";
import { type IFooterLinksList } from "../../../types/types";
import { useAppSelector } from "../../../hooks";
import { titleType } from "../../../types/Footer/types";
import Items from "./Links/Items/Items";

const Info: FC = (): JSX.Element => {
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  // ! DO UI FOR FOOTER IN FOOTER.SLICE.TS
  const { categories, contacts } = useAppSelector((state) => state.footer);
  const titles: titleType[] = ["Категории", "Контакты"];
  return (
    <>
      <div className="flex justify-between">
        {titles.map((title) => (<Items  />))}
      </div>
    </>
  );
};

export default Info;
