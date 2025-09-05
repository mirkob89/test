import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showSearch: {
      control: { type: 'boolean' },
    },
    isLoggedIn: {
      control: { type: 'boolean' },
    },
    onSearch: { action: 'search' },
    onLogin: { action: 'login' },
    onLogout: { action: 'logout' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My Application',
  },
};

export const WithSearch: Story = {
  args: {
    title: 'My Application',
    showSearch: true,
  },
};

export const LoggedIn: Story = {
  args: {
    title: 'My Application',
    showSearch: true,
    isLoggedIn: true,
  },
};

export const LoggedOut: Story = {
  args: {
    title: 'My Application',
    showSearch: true,
    isLoggedIn: false,
  },
};
