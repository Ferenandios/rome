import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Text from "./Text/Text";

const Layout: FC = (): JSX.Element => {
  const { layout } = useAppSelector((state) => state.global.currentService);
  return (
    <>
      <ol className="flex flex-col gap-[8px] list-decimal pt-[8px] px-[16px] md:w-[280px] md:pt-[20px]">
        {layout.map((text, index) => (
          <Text key={index} text={text} />
        ))}
      </ol>
    </>
  );
};

export default Layout;
