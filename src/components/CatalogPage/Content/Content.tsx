import { FC } from "react";
import Service from "./Service/Service";
import Sidebar from "./Sidebar/Sidebar";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="container p-[16px] mx-auto lg:pl-0 lg:mx-0">
          <div className="flex justify-between">
            <Sidebar />
            <Service />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
