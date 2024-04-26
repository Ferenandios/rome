import { FC } from "react";
import Content from "./Content/Content";
import Shit from "./Shit/Shit";

const Modal: FC = (): JSX.Element => {
  return (
    <>
      <Shit />
      <Content />
    </>
  );
};

export default Modal;
