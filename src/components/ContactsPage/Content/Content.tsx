import { FC } from "react";
import Info from "./Info/Info";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className="min-h-[500px]">
        <Info />
      </section>
    </>
  );
};

export default Content;
