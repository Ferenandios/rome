import { FC } from "react";
import Service from "./Service/Service";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Content.module.css";

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.containerr}>
          <div className={styles.inner}>
            <Sidebar />
            <Service />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
