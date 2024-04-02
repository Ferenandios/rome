import { FC } from "react";
import Title from "./Title/Title";
import Services from "./Services/Services";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className="pt-[12px] pb-[18px]">
        <div className="container px-[8px]">
          <div className="flex flex-col gap-[28px]">
            <Title />
            <Services />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
