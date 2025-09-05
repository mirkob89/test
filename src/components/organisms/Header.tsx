import React from 'react';
import { ComponentProps } from '../../types';
import { Button } from '../atoms/Button';
import { SearchInput } from '../molecules/SearchInput';

/**
 * Props for the Header component
 */
export interface HeaderProps extends ComponentProps {
  /** Application title */
  title?: string;
  /** Whether to show search functionality */
  showSearch?: boolean;
  /** Callback when search is performed */
  onSearch?: (query: string) => void;
  /** Callback when login button is clicked */
  onLogin?: () => void;
  /** Callback when logout button is clicked */
  onLogout?: () => void;
  /** Whether user is logged in */
  isLoggedIn?: boolean;
}

/**
 * Application header component with navigation and search
 * 
 * @example
 * ```tsx
 * <Header
 *   title="My App"
 *   showSearch={true}
 *   onSearch={handleSearch}
 *   isLoggedIn={true}
 *   onLogout={handleLogout}
 * />
 * ```
 * 
 * @param props - Header component props
 * @returns JSX element representing the application header
 */
export const Header: React.FC<HeaderProps> = ({
  title = 'React App',
  showSearch = false,
  onSearch,
  onLogin,
  onLogout,
  isLoggedIn = false,
  className = '',
}) => {
  return (
    <header className={`bg-white shadow-md border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          </div>

          {/* Search */}
          {showSearch && (
            <div className="flex-1 max-w-lg mx-8">
              <SearchInput
                placeholder="Search..."
                onSearch={onSearch}
                onSubmit={onSearch}
              />
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Button variant="secondary" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={onLogin}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
