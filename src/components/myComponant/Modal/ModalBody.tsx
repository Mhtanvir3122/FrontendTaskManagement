import React, { ReactNode } from 'react'

type ModalBodyProps = {
  children:ReactNode | ReactNode[] | string
}

const ModalBody = ({children}: ModalBodyProps) => {
  return <div className='modal-body'>{children}</div>
}

export default ModalBody
