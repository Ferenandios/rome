import { FC } from "react";
import { ITextarea } from "../../../../types/Form/types";
import { useAppSelector } from "../../../../hooks";

const Textarea: FC<{ textarea: ITextarea }> = ({ textarea }): JSX.Element => {
  const { colorTheme } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex flex-col w-full">
        <h2 className="font-bold">{textarea.title}</h2>
        <textarea
          style={{ borderColor: colorTheme }}
          className="font-bold w-full h-[300px] border-2 rounded-[7px] resize-none p-[4px]"
          placeholder={textarea.placeholder}
        >
          {textarea.text}
        </textarea>
      </div>
    </>
  );
};

export default Textarea;
