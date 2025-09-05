import type { Meta, StoryObj } from '@storybook/react';
import { PageLayout } from './PageLayout';
import { Button } from '../atoms/Button';

const meta: Meta<typeof PageLayout> = {
  title: 'Templates/PageLayout',
  component: PageLayout,
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
    children: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to the Page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the main content area of the page.
        </p>
        <div className="space-x-4">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
        </div>
      </div>
    ),
  },
};

export const WithSearch: Story = {
  args: {
    title: 'Search Page',
    showSearch: true,
    children: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Search Results
        </h1>
        <p className="text-lg text-gray-600">
          Use the search bar in the header to find content.
        </p>
      </div>
    ),
  },
};

export const LoggedIn: Story = {
  args: {
    title: 'Dashboard',
    showSearch: true,
    isLoggedIn: true,
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 1</h3>
          <p className="text-gray-600">Content for card 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 2</h3>
          <p className="text-gray-600">Content for card 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Card 3</h3>
          <p className="text-gray-600">Content for card 3</p>
        </div>
      </div>
    ),
  },
};
