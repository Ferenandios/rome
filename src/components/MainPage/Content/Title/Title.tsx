import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import styles from './Title.module.css'

const Title: FC = (): JSX.Element => {
  const { title } = useAppSelector((state) => state.mainContent);
  return (
    <>
      <h2 className={styles.title}>
        {title}
      </h2>
    </>
  );
};

export default Title;
