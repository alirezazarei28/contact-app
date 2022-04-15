import "../Sass/Contact.scss";

import Contact from "./Contact";
import { ContactType } from "../Types/types";

const ContactsList = (contacts: ContactType[]) => {
  return (
    <>
      <article className="contacts-list">
        {Object.values(contacts).map((contact) => {
          return <Contact key={contact.id.value} contact={contact} />;
        })}
      </article>
    </>
  );
};

export default ContactsList;
