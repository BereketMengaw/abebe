import React, { useRef } from 'react'

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<any>(null)
  
  // BUG: modalRef.current is null
  const handleClose = () => {
    modalRef.current.close() // ERROR: Cannot read property 'close' of null
  }
  
  return isOpen ? <div ref={modalRef}>Modal Content</div> : null
}

