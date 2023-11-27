import React from 'react';
export interface BottomModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
    height?: string;
}
export declare const BottomModal: ({ show, onClose, children, height }: BottomModalProps) => import("react/jsx-runtime").JSX.Element;
