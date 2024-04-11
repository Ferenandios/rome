import { FC } from "react";
import { useAppSelector } from "../../../../hooks";

const Title: FC = (): JSX.Element => {
  const { title } = useAppSelector((state) => state.mainContent);
  return (
    <>
      <h2 className="font-bold text-[18px] text-center flex justify-center min-h-[24px] sm:text-[24px]">
        {title}
      </h2>
    </>
  );
};

export default Title;
