import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Item from "./Item/Item";

const Layout: FC = (): JSX.Element => {
  const { layout } = useAppSelector((state) => state.modal);
  return (
    <>
      <ol className="list-decimal flex flex-col gap-[8px] pl-[16px]">
        {layout.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </>
  );
};

export default Layout;
