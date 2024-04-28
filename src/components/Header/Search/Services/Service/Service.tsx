import { FC } from "react";
import { Link } from "react-router-dom";
import { IService } from "../../../../../types/types";
import styles from "./Service.module.css";
import { useAppDispatch } from "../../../../../hooks";
import { setSearch } from "../../../../../features/global.slice";

const Service: FC<{ service: IService }> = ({ service }): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setSearch(""));
  };
  return (
    <>
      <div className={styles.inner}>
        <Link
          onClick={handleClick}
          to={`/rome/catalog/${service.id}`}
          className={styles.title}
        >
          {service.title}
        </Link>
      </div>
    </>
  );
};

export default Service;
