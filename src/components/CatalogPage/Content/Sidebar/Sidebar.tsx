import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Group from "./Group/Group";
import styles from "./Sidebar.module.css";

const Sidebar: FC = (): JSX.Element => {
  const { services } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          {services.map((service) => (
            <Group key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
