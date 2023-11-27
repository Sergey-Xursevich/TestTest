import React, { useRef } from 'react'

import { useOutScrollLock, useOutsideClick } from '../hooks'

export interface BottomModalProps {
  show: boolean
  onClose: () => void
  children: React.ReactNode
  height?: string
}

export const BottomModal = ({ show, onClose, children, height }: BottomModalProps) => {
  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef, onClose)
  useOutScrollLock(show)

  return (
    <div
      className={`w-full h-screen bg-slate-900 bg-opacity-50 fixed inset-0 top-0 z-50 overflow-hidden opacity-100 ${
        show ? 'translate-y-0' : 'translate-y-full delay-500'
      }`}
    >
      <div
        ref={wrapperRef}
        className={`bg-white rounded-t-2xl ${
          height || 'h-96'
        } absolute bottom-0 left-0 right-0 opacity-100 transition duration-500 ease-in-out ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
