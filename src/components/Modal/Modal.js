import "../../Sass/Modal.scss";
import { IoIosClose } from "react-icons/io";

import {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal-root");

const Modal = ({ children, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflowY = "unset";
    document.body.style.overflowX = "hidden";
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflowY = "hidden";
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [close, open]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
      if (event.keyCode === 9) event.preventDefault();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <aside className={`modal`} role="dialog" aria-modal="true">
        <div className="modal__overlay" onClick={close} />

        <section className="modal__body">
          <span
            role="button"
            className="modal__close"
            aria-label="close"
            onClick={close}
          >
            <IoIosClose />
          </span>
          {children}
        </section>
      </aside>
    ) : null,
    modalElement
  );
};

export default forwardRef(Modal);
