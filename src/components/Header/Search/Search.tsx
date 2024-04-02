import { FC } from "react";
import Input from "./Input/Input";
import Shape from "./Shape/Shape";

const Search: FC = (): JSX.Element => {
  return (
    <>
      <div className="relative flex items-center justify-end w-full h-full">
        <Input />
        <Shape />
      </div>
    </>
  );
};

export default Search;
