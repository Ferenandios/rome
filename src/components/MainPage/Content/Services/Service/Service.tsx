import { FC } from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";

const Service: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  return (
    <>
      <a className="w-[200px] drop-shadow-md" href="#">
        <Image serivceId={serviceId} />
        <Title serviceId={serviceId} />
      </a>
    </>
  );
};

export default Service;