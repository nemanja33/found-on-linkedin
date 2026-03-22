"use client"
import { HTMLAttributes, ReactNode, useRef } from "react"
import { Button } from "../button/Button"

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  openText: string;
  closeText: string;
  modalContent: ReactNode | null;
}

const Modal = ({
  openText,
  closeText,
  modalContent
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (!dialogRef?.current) return;
    dialogRef.current.showModal();
  }

  const closeDialog = () => {
    if (!dialogRef?.current) return ;
    dialogRef.current.close();
  }

  return (
    <div>
      <Button onClick={openDialog}>{openText}</Button>
      <dialog className="w-1/2 h-1/2 m-auto shadow-[4px_4px_0px_0px_#000]" ref={dialogRef}>
        <div className="flex justify-center items-center w-full h-full relative">
          <Button className="absolute top-2 right-2" aria-label={closeText} onClick={closeDialog}>X</Button>
          <div className="px-4">
            {modalContent}
          </div>
        </div>
      </dialog>
    </div>
  )
}

export { Modal }