import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Line: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <hr style={{ borderColor: colorTheme }} />
    </>
  );
};

export default Line;
