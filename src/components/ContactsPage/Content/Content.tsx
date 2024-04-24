import { FC } from "react";
import Info from "./Info/Info";
import Form from "../../Form/Form";
import Map from "./Map/Map";
import styles from "./Content.module.css";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.containerr}>
          <div className={styles.inner}>
            <Info />
            <Map />
            <Form layout="hidden" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
