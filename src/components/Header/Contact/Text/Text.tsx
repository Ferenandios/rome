import { FC } from "react";
import { useAppSelector } from "../../../../hooks";
import Link from "./Link/Link";

const Text: FC = (): JSX.Element => {
  const { contacts } = useAppSelector((state) => state.header);
  return (
    <>
      <div className="hidden lg:flex items-center h-full">
        <div className="flex flex-col justify-between items-end h-[50px]">
          {contacts.map((contact) => (
            <Link key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Text;
