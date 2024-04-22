import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Form from "../../../../../Form/Form";
import styles from "./Image.module.css";

const Image: FC = (): JSX.Element => {
  const { currentService } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.inner}>
        <img
          className={styles.img}
          src={currentService.image}
          alt="Service Image"
        />
        <div className={styles.ansoc}>
          <div className="flex xl:hidden">
            <Form layout="hidden" />
          </div>
          <div className="hidden xl:flex">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
