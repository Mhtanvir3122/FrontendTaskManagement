import React, { ReactNode } from 'react'

type ModalFooterProps = {
  children: ReactNode | ReactNode[] | string
  className?: string
}

const ModalFooter = ({children, className}: ModalFooterProps) => {
  return <div className={`modal-footer px-3 ${className || ""}`}>{children}</div>;
}

export default ModalFooter
