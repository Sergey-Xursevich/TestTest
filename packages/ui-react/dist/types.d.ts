import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { RefObject } from 'react';

interface BottomModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    height?: string;
}
declare const BottomModal: ({ show, onClose, children, height }: BottomModalProps) => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    size?: 'large' | 'small';
    type?: 'light' | 'dark' | 'normal';
    custom?: string;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    children?: React.ReactNode;
    label?: string;
}
declare const Button: React.FC<ButtonProps>;

declare const useOutsideClick: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void) => void;

declare const useOutScrollLock: (isOpen: boolean) => void;

export { BottomModal, Button, useOutScrollLock, useOutsideClick };
