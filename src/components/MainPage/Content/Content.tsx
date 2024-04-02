import { FC } from "react";
import Title from "./Title/Title";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className="pt-[12px]">
        <div className="container px-[8px]">
          <div>
            <Title />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
