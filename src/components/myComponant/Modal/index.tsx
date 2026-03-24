import clsx from "clsx";
import { Modal as RBModal } from "react-bootstrap";
import ReactDOM from "react-dom";
import ModalHeader from "./ModalHeader";
import { ReactNode } from "react";

type IModal = {
  title?: string;
  noHeader?: boolean;
  children: string | ReactNode | any;
  isOpen?: boolean;
  handleClose?: () => void;
  size?: "lg" | "sm" | "xl";
  width?: number;
  fullscreen?: true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
  holdOn?: boolean;
  verticalCenter?: boolean;
  scrollBody?: boolean;
  className?: string;
  dialogClassName?: string;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const Modal = ({
  title,
  noHeader,
  children,
  holdOn,
  isOpen,
  handleClose,
  size,
  width,
  fullscreen,
  verticalCenter = true,
  scrollBody,
  className,
  dialogClassName
}: IModal) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <RBModal
      dialogClassName={clsx(className + " modal-dialog", {
        "modal-dialog-scrollable": scrollBody,
        "modal-dialog-centered": verticalCenter,
        [`modal-${width}w`]: width,
      }, dialogClassName)}
      contentClassName="shadow"
      size={size}
      fullscreen={fullscreen}
      show={isOpen}
      onHide={handleClose}
      backdrop={holdOn ? "static" : true}
    >
      {!noHeader && <ModalHeader title={title} handleClose={handleClose} />}
      {children}
    </RBModal>,
    modalsRoot
  );
};

export default Modal;
