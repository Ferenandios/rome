import { FC } from "react";
import Service from "./Service/Service";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="container p-[16px] mx-auto">
          <Service />
        </div>
      </section>
    </>
  );
};

export default Content;
