import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ show, onClose, children, height }: import("../bottom-modal").BottomModalProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
