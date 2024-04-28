import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Service from "./Service/Service";
import styles from "./Services.module.css";

const Services: FC = (): JSX.Element => {
  const { services, search } = useAppSelector((state) => state.global);
  return (
    <>
      {search !== "" && (
        <div className={styles.inner}>
          {services
            .filter((service) => service.title.toLowerCase().includes(search))
            .map((service) => (
              <Service key={service.id} service={service} />
            ))}
        </div>
      )}
    </>
  );
};

export default Services;
