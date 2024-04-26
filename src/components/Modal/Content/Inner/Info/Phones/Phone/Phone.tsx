import { FC } from "react";
import styles from "./Phone.module.css";

const Phone: FC<{ phone: string }> = ({ phone }): JSX.Element => {
  // Update phone number to +X (XXX) XXX-XX-XX
  const modifyString = (input: string): string => {
    // Check if the input string has a length of 12 characters
    if (input.length === 12) {
      // Check if the first character is not '+'
      if (input[0] !== "+") throw new Error("String must start with +");
      // Format the string as a 12-digit phone number
      return `+${input.slice(1, 2)} (${input.slice(2, 5)}) ${input.slice(
        5,
        8
      )}-${input.slice(8, 10)}-${input.slice(10)}`;
    } else if (input.length === 6) {
      // Check if the first character is '+'
      if (input[0] === "+") throw new Error("String must not start with +");
      // Format the string as a 6-digit phone number
      return `${input.slice(0, 2)}-${input.slice(2, 4)}-${input.slice(4)}`;
    } else {
      // Throw an error if the input string is not 6 or 12 characters long
      throw new Error("String must be 6 or 12 characters long");
    }
  };
  return (
    <>
      <h1 className={styles.phone}>{modifyString(phone)}</h1>
    </>
  );
};

export default Phone;
