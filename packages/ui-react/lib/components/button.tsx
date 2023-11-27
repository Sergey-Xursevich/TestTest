import React, { useMemo } from 'react'

export interface ButtonProps {
  size?: 'large' | 'small'
  type?: 'light' | 'dark' | 'normal'
  custom?: string
  disabled: boolean
  onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  children?: React.ReactNode
  label?: string
}

export const Button: React.FC<ButtonProps> = ({
  size = 'small',
  type = 'normal',
  custom,
  disabled,
  onClick,
  children,
  label = '',
}) => {
  const height = useMemo(
    () =>
      ({
        large: 'h-12',
        small: 'h-11',
      }[size]),
    [size],
  )

  const background = useMemo(
    () =>
      ({
        light: 'bg-white',
        dark: 'bg-neutral-900',
        normal: 'bg-cyan-600',
      }[type]),
    [type],
  )

  return (
    <button
      className={`flex items-center justify-center w-full ${height} text-white text-2xl font-semibold ${background} rounded-md disabled:${background}/30 ${custom}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || label}
    </button>
  )
}
