import "../Sass/Contact.scss";
import { ContactType } from "../Types/types";

import ContactInfoRow from "./ContactInfoRow";

const ContactPreview = ({
  picture,
  name,
  email,
  phone,
  location,
  login,
}: ContactType) => {
  return (
    <article className="contact-preview">
      <img
        className="contact-preview__img"
        src={picture.large}
        alt={"contact"}
      />
      <section className="contact-preview__info">
        <h2 className="contact-preview__name">
          {name.first}
          {", "}
          {name.last}
        </h2>
        <ContactInfoRow title={"email"} value={email} />
        <ContactInfoRow title={"phone"} value={phone} />
        <ContactInfoRow title={"street"} value={location.street.name} />
        <ContactInfoRow title={"city"} value={location.city} />
        <ContactInfoRow title={"state"} value={location.state} />
        <ContactInfoRow title={"postcode"} value={location.postcode} />
      </section>
      <p className="contact-preview__username">
        <strong>{login.username}</strong>
      </p>
    </article>
  );
};

export default ContactPreview;
