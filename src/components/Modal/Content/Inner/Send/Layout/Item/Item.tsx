import { FC } from "react";

const Item: FC<{ item: string }> = ({ item }): JSX.Element => {
  return (
    <>
      <li className="font-bold">{item}</li>
    </>
  );
};

export default Item;
