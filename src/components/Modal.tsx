import React, { useRef } from 'react'

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<any>(null)
  
  const handleClose = () => {
    modalRef.current?.close()
    onClose()
  }
  
  return isOpen ? <div ref={modalRef}>Modal Content</div> : null
}
