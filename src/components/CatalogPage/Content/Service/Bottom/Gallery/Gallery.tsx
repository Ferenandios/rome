import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { IGalleryItem } from "../../../../../../types/types";
import Item from "./Item/Item";

const Gallery: FC = (): JSX.Element => {
  const { galleryItems } = useAppSelector(
    (state) => state.global.currentService
  );
  // Creating function for a 2 columns gallery
  const galleryItemsToColumns = (): IGalleryItem[][] => {
    const firstColumn: IGalleryItem[] = galleryItems.filter(
      (item) => item.id % 2 === 0
    );
    const secondColumn: IGalleryItem[] = galleryItems.filter(
      (item) => item.id % 2 !== 0
    );
    return [firstColumn, secondColumn];
  };
  return (
    <>
      {/* One column */}
      <div className="flex 2xl:hidden flex-col gap-[4px]">
        {galleryItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      {/* Two columns */}
      <div className="hidden 2xl:flex gap-[4px]">
        {galleryItemsToColumns().map((column, index) => (
          <>
            <div key={index} className="flex flex-col gap-[4px]">
              {column.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Gallery;
