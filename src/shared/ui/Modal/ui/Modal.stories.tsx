import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: 'shared/Modal',
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Modal isOpen>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, placeat.
        </Modal>
    ),
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Modal isOpen>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, placeat.
        </Modal>
    ),
};
