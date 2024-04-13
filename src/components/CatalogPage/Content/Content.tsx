import { FC } from "react";
import Image from "./Image/Image";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section>
        <div className="container p-[16px] mx-auto">
          <Image />
        </div>
      </section>
    </>
  );
};

export default Content;
