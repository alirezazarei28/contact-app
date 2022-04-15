import "../Sass/Contact.scss";

import { useRef } from "react";

import ContactPreview from "./ContactPreview";
import Modal from "./Modal/Modal";
import { ContactType, RefModalType } from "../Types/types";

const Contact = ({ contact }: { contact: ContactType }) => {
  const modal = useRef<RefModalType>(null);

  const openModal = () => {
    modal.current && modal.current.open();
  };

  return (
    <>
      <button tabIndex={0} className="contact__name" onClick={openModal}>
        {contact.name.first}, {contact.name.last.toUpperCase()}
      </button>
      <Modal ref={modal}>
        <ContactPreview {...contact} />
      </Modal>
    </>
  );
};

export default Contact;
