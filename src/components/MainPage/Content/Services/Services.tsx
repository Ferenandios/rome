import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Service from "./Service/Service";

const Services: FC = (): JSX.Element => {
  const { services } = useAppSelector((state) => state.global);
  const { emptyServicesTitle } = useAppSelector((state) => state.mainContent);
  return (
    <>
      <div className="flex flex-col items-center gap-[12px] md:flex-row md:flex-wrap md:justify-center lg:max-w-[1000px] lg:gap-[27px]">
        {services.length ? (
          <>
            {services.map((service) => (
              <Service key={service.id} serviceId={service.id} />
            ))}
          </>
        ) : (
          <>
            <h3 className="text-[16px] opacity-60 h-[450px]">
              {emptyServicesTitle}
            </h3>
          </>
        )}
      </div>
    </>
  );
};

export default Services;
