import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Service from "./Service/Service";

const Services: FC = (): JSX.Element => {
  const { services } = useAppSelector((state) => state.global);
  return (
    <>
      <div className="flex flex-col items-center gap-[12px]">
        {services.map((service) => (
          <Service key={service.id} serviceId={service.id} />
        ))}
      </div>
    </>
  );
};

export default Services;
