import { FC } from "react";
import { ICrumb } from "../../../../types/types";
import Title from "./Title/Title";
import Text from "./Text/Text";

const Crumb: FC<{ crumb: ICrumb }> = ({ crumb }): JSX.Element => {
  return (
    <>
      <div className="flex flex-col">
        <Title title={crumb.title} />
        <div className="flex flex-col">
          {crumb.text.map((text, index) => (
            <Text key={index} text={text.text} active={text.active} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Crumb;
