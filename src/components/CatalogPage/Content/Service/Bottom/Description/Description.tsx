import { FC, Fragment } from "react";
import { useAppSelector } from "../../../../../../hooks";
import ListItem from "./ListItem/ListItem";
import Paragraph from "./Paragraph/Paragraph";
import Title from "./Title/Title";
import styles from "./Description.module.css";

const Description: FC = (): JSX.Element => {
  const { description } = useAppSelector(
    (state) => state.global.currentService
  );
  return (
    <>
      {description.length ? (
        <>
          <div className={styles.inner}>
            {description.map((block, index) => (
              <Fragment key={index}>
                {block.type === "title" && (
                  <>
                    {block.text.map((text, i) => (
                      <Title key={i} text={text} />
                    ))}
                  </>
                )}
                {block.type === "ul" && (
                  <ul className={styles.list}>
                    {block.text.map((text, i) => (
                      <ListItem key={i} text={text} />
                    ))}
                  </ul>
                )}
                {block.type === "p" && (
                  <>
                    {block.text.map((text, i) => (
                      <Paragraph key={i} text={text} />
                    ))}
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Описание отсутствует.</h1>
        </>
      )}
    </>
  );
};

export default Description;
