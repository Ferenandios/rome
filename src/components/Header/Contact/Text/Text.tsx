import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import { type IElement } from "../../../../types/Header/types";
import Link from "./Link/Link";
import styles from "./Text.module.css";

const Text: FC = (): JSX.Element => {
  const { phones, emails } = useAppSelector((state) => state.global.contacts);
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
  // Creating properties for contacts array
  const phone: IElement = {
    id: 0,
    link: `tel:${phones[0]}`,
    text: modifyString(phones[0]),
  };
  const email: IElement = {
    id: 1,
    link: `mailto:${emails[0]}`,
    text: emails[0],
  };
  // Add this properties in contacts
  const contacts: IElement[] = [phone, email];
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          {contacts.map((contact) => (
            <Link key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Text;
