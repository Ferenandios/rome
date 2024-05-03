import { FC } from "react";
import Title from "./Title/Title";
import Services from "./Services/Services";
import styles from './Content.module.css'

const Content: FC = (): JSX.Element => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.containerr}>
          <div className={styles.inner}>
            <Title />
            <Services />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
