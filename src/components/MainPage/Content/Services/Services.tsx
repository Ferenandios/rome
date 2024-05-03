import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Service from "./Service/Service";
import styles from './Services.module.css'

const Services: FC = (): JSX.Element => {
  const { services } = useAppSelector((state) => state.global);
  const { emptyServicesTitle } = useAppSelector((state) => state.mainContent);
  return (
    <>
      <div className={styles.inner}>
        {services.length ? (
          <>
            {services.map((service) => (
              <Service key={service.id} serviceId={service.id} />
            ))}
          </>
        ) : (
          <>
            <h3 className={styles.title}>
              {emptyServicesTitle}
            </h3>
          </>
        )}
      </div>
    </>
  );
};

export default Services;
