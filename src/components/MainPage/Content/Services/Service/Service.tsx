import { FC } from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";

const Service: FC<{ serviceId: number }> = ({ serviceId }): JSX.Element => {
  return (
    <>
      <Link className={styles.inner} to={`/catalog/${serviceId}`}>
        <Image serivceId={serviceId} />
        <Title serviceId={serviceId} />
      </Link>
    </>
  );
};

export default Service;
