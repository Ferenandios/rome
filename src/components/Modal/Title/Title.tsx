import { FC } from "react";
import { useAppSelector } from "../../../hooks";

const Title: FC = (): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  const { title } = useAppSelector((state) => state.modal);
  return (
    <>
      <div>
        <div
          style={{ borderColor: colorTheme }}
          className="w-full border-b pb-[12px] "
        >
          <h1 className="font-bold text-[24px]">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Title;
