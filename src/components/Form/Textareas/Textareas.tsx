import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Textarea from "./Textarea/Textarea";

const Textareas: FC = (): JSX.Element => {
  const { textareaList } = useAppSelector((state) => state.form);
  return (
    <>
      <div className="flex flex-col">
        {textareaList.map((textarea) => (
          <Textarea key={textarea.id} textarea={textarea} />
        ))}
      </div>
    </>
  );
};

export default Textareas;
