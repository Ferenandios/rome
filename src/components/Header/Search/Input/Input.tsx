import { FC, useEffect } from "react";
import {
  setSearch,
  setSearchPlaceholder,
} from "../../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const Input: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { placeholder, search } = useAppSelector((state) => state.global);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };
  useEffect(() => {
    dispatch(setSearchPlaceholder());
  }, []);
  return (
    <>
      <input
        className="text-[12px] w-[90%] min-w-[28px] h-[28px] bg-white rounded-full pl-[8px] pr-[27px] drop-shadow-md text-ellipsis"
        onChange={handleChange}
        value={search}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
};

export default Input;
