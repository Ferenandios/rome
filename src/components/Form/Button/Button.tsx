import axios from "axios";
import { FC } from "react";
import { toggleIsShowModal } from "../../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isShowModal } = useAppSelector((state) => state.global);
  const { text, email, tel, message } = useAppSelector(
    (state) => state.global.submit
  );
  const { colorTheme } = useAppSelector((state) => state.global);
  const { buttonText } = useAppSelector((state) => state.form);
  const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;
  // Notify client that mail has been sent
  const closeModal = () => {
    alert("Сообщение отправлено!");
    if (isShowModal) {
      dispatch(toggleIsShowModal());
    }
  };

  const handleClick = async () => {
    const subject: string = `Письмо от ${text}`;
    const mailMessage: string = `
    Имя: ${text}
    Почта: ${email}
    Телефон: ${tel}
    Комментарий: 
    ${message}
    `;
    const dataSend = {
      subject: subject,
      message: mailMessage,
    };
    closeModal();
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
        <button onClick={handleClick} className={styles.button} type="button">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Button;
