import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";

const Text: FC = (): JSX.Element => {
  const { infoText } = useAppSelector((state) => state.modal);
  return (
    <>
      <h1>{infoText}</h1>
    </>
  );
};

export default Text;
