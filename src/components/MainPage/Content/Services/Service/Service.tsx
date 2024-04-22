import { FC } from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import { Link } from "react-router-dom";

const Service: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  return (
    <>
      <Link
        className="w-[200px] drop-shadow-md sm:w-[calc(100%-60px)] md:w-[200px]"
        to={`/rome/catalog/${serviceId}`}
      >
        <Image serivceId={serviceId} />
        <Title serviceId={serviceId} />
      </Link>
    </>
  );
};

export default Service;
