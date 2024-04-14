import { FC, Fragment } from "react";
import { useAppSelector } from "../../../../../hooks";
import ListItem from "./ListItem/ListItem";
import Paragraph from "./Paragraph/Paragraph";
import Title from "./Title/Title";

const Description: FC = (): JSX.Element => {
  const { description } = useAppSelector(
    (state) => state.global.currentService
  );
  return (
    <>
      <div className="flex flex-col gap-[12px]">
        {description.map((block, index) => (
          <Fragment key={index}>
            {block.type === "title" && (
              <>
                {block.text.map((text, i) => (
                  <Title key={i} text={text} />
                ))}
              </>
            )}
            {block.type === "ul" && (
              <ul className="flex flex-col list-disc gap-[8px] pl-[20px]">
                {block.text.map((text, i) => (
                  <ListItem key={i} text={text} />
                ))}
              </ul>
            )}
            {block.type === "p" && (
              <>
                {block.text.map((text, i) => (
                  <Paragraph key={i} text={text} />
                ))}
              </>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Description;
