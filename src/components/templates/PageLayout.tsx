import React from 'react';
import { ComponentProps } from '../../types';
import { Header } from '../organisms/Header';

/**
 * Props for the PageLayout component
 */
export interface PageLayoutProps extends ComponentProps {
  /** Page title */
  title?: string;
  /** Whether to show search in header */
  showSearch?: boolean;
  /** Callback when search is performed */
  onSearch?: (query: string) => void;
  /** Callback when login button is clicked */
  onLogin?: () => void;
  /** Callback when logout button is clicked */
  onLogout?: () => void;
  /** Whether user is logged in */
  isLoggedIn?: boolean;
  /** Main content area */
  children: React.ReactNode;
}

/**
 * Main page layout template with header and content area
 * 
 * @example
 * ```tsx
 * <PageLayout
 *   title="Dashboard"
 *   showSearch={true}
 *   onSearch={handleSearch}
 *   isLoggedIn={true}
 *   onLogout={handleLogout}
 * >
 *   <div>Page content goes here</div>
 * </PageLayout>
 * ```
 * 
 * @param props - PageLayout component props
 * @returns JSX element representing the page layout
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  title = 'React App',
  showSearch = false,
  onSearch,
  onLogin,
  onLogout,
  isLoggedIn = false,
  children,
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Header
        title={title}
        showSearch={showSearch}
        onSearch={onSearch}
        isLoggedIn={isLoggedIn}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};
