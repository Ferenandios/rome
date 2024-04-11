import { FC } from "react";
import Copyright from "./Copyright/Copyright";
import Address from "./Address/Address";

const Locate: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-end gap
      -[8px]">
        <Copyright />
        <Address />
      </div>
    </>
  );
};

export default Locate;
