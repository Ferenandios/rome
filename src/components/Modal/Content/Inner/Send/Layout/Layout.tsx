import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import Item from "./Item/Item";
import styles from "./Layout.module.css";

const Layout: FC = (): JSX.Element => {
  const { layout } = useAppSelector((state) => state.modal);
  return (
    <>
      <ol className={styles.inner}>
        {layout.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ol>
    </>
  );
};

export default Layout;
