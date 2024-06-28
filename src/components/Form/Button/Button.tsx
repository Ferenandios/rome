import { FC } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";
import axios from "axios";

const Button: FC = (): JSX.Element => {
  const { text, email, tel, message } = useAppSelector(
    (state) => state.global.submit
  );
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.form);
  const baseUrl = "http://31.128.41.148:8000";
  const handleClick = async () => {
    const subject: string = `Письмо от ${text}`;
    const mailMessage: string = `
    Имя: ${text}
    Почта: ${email}
    Телефон: ${tel}
    Комментарий: ${message}
    `;
    const dataSend = {
      subject: subject,
      message: mailMessage,
    };

    await axios
      .post(`${baseUrl}/email/sendEmail`, dataSend)
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
  return (
    <>
      <div style={{ backgroundColor: colorTheme }} className={styles.inner}>
        <button onClick={handleClick} className={styles.button} type="submit">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
