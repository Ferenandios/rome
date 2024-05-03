import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import styles from './Image.module.css'

const Image: FC<{ serivceId: number }> = ({ serivceId }): JSX.Element => {
  const { image } = useAppSelector((state) => state.global.services[serivceId]);
  return (
    <>
      <div className={styles.ansoc}>
        <img
          className={styles.img}
          src={image}
          alt="Service Image"
        />
      </div>
    </>
  );
};

export default Image;
