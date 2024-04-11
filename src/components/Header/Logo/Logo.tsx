import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import { Link } from "react-router-dom";

const Logo: FC = (): JSX.Element => {
  const { companyLogo } = useAppSelector((state) => state.global);
  return (
    <>
      <Link className="hidden md:flex items-center h-full" to={"/rome"}>
        <img className="h-[30px] lg:h-[50px]" src={companyLogo} alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
