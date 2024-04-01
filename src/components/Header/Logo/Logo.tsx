import { FC } from "react";

const Logo: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center h-full">
        <img className="h-[60px]" src="/logo.jpg" alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
