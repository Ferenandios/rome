import { FC } from "react";

const Copyright: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-[16px]">
        <span className="font-sans font-semibold text-[12px]">
          &copy; 2024 ООО «РЕМИКС»
        </span>
      </div>
    </>
  );
};

export default Copyright;
