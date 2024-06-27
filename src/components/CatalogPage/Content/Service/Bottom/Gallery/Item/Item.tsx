import { FC } from "react";
import { IGalleryItem } from "../../../../../../../types/types";

const Item: FC<{ item: IGalleryItem }> = ({ item }): JSX.Element => {
  return (
    <>
      <div className="flex w-full lg:w-[272px] xl:w-[502px] 2xl:w-[400px]">
        <img
          className="w-full"
          src={item.image}
          alt={`Gallery Item ${item.id}`}
        />
      </div>
    </>
  );
};

export default Item;
