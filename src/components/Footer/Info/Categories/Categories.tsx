import { FC } from "react";
import Crumbs from "./Crumbs/Crumbs";
import Title from "./Title/Title";

const Categories: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-[4px]">
        <Title />
        <Crumbs />
      </div>
    </>
  );
};

export default Categories;
