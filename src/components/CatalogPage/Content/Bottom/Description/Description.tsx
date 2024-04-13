import { FC } from "react";
import { useAppSelector } from "../../../../../hooks";
import Title from "./Title/Title";
import ListItem from "./ListItem/ListItem";
import Paragraph from "./Paragraph/Paragraph";

const Description: FC = (): JSX.Element => {
  const { description } = useAppSelector(
    (state) => state.global.currentService
  );
  return (
    <>
      <div className="flex flex-col gap-[12px]">
        {description.map((block) => (
          <>
            {block.type === "title" && (
              <>
                {block.text.map((text) => (
                  <Title key={block.id} text={text} />
                ))}
              </>
            )}
            {block.type === "ul" && (
              <ul className="flex flex-col list-disc gap-[8px] pl-[20px]">
                {block.text.map((text) => (
                  <ListItem key={block.id} text={text} />
                ))}
              </ul>
            )}
            {block.type === "p" && (
              <>
                {block.text.map((text) => (
                  <Paragraph key={block.id} text={text} />
                ))}
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Description;
