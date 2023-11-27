import React from 'react';
export interface ButtonProps {
    size?: 'large' | 'small';
    type?: 'light' | 'dark' | 'normal';
    custom?: string;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    children?: React.ReactNode;
    label?: string;
}
export declare const Button: React.FC<ButtonProps>;
