import { FC } from "react";
import { useAppSelector } from "../../hooks";
import Crumb from "./Crumb/Crumb";

const Crumbs: FC = (): JSX.Element => {
  const { crumbs } = useAppSelector((state) => state.crumbs);
  return (
    <>
      <section className="hidden md:block">
        <div className="flex">
          {crumbs.map((crumb) => (
            <Crumb key={crumb.id} crumb={crumb} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Crumbs;
