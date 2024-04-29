import { FC } from "react";
import Crumb from "./Crumb/Crumb";
import styles from "./Crumbs.module.css";
import { useAppSelector } from "../../../../../../hooks";

const Crumbs: FC = (): JSX.Element => {
  const { crumbs } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.inner}>
        {crumbs.map((crumb) => (
          <Crumb key={crumb.id} crumb={crumb} />
        ))}
      </div>
    </>
  );
};

export default Crumbs;
