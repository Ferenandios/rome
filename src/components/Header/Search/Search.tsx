import { FC } from "react";
import Input from "./Input/Input";
import Shape from "./Shape/Shape";

const Search: FC = (): JSX.Element => {
  return (
    <>
      <div className="relative flex items-center justify-end w-full h-full md:w-[310px] lg:w-[320px] xl:w-[440px]">
        <Input />
        <Shape />
      </div>
    </>
  );
};

export default Search;
