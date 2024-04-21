import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import Text from "./Text/Text";
import styles from "./Layout.module.css";

const Layout: FC = (): JSX.Element => {
  const { layout } = useAppSelector((state) => state.global.currentService);
  return (
    <>
      {layout.length > 0 && (
        <>
          <ol className={styles.list}>
            {layout.map((text, index) => (
              <Text key={index} text={text} />
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default Layout;
