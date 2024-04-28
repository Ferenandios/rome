import { FC } from "react";
import { Link } from "react-router-dom";
import { IService } from "../../../../../types/types";
import styles from "./Service.module.css";

const Service: FC<{ service: IService }> = ({ service }): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Link to={`/rome/catalog/${service.id}`} className={styles.title}>
          {service.title}
        </Link>
      </div>
    </>
  );
};

export default Service;
