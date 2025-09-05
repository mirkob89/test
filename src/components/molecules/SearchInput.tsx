import React, { useState } from 'react';
import { ComponentProps } from '../../types';

/**
 * Props for the SearchInput component
 */
export interface SearchInputProps extends ComponentProps {
  /** Placeholder text for the input */
  placeholder?: string;
  /** Initial value of the search input */
  defaultValue?: string;
  /** Callback function called when search value changes */
  onSearch?: (value: string) => void;
  /** Callback function called when search is submitted */
  onSubmit?: (value: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
}

/**
 * A search input component with button, following atomic design principles
 * Combines input field with search button
 * 
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search..."
 *   onSearch={handleSearch}
 *   onSubmit={handleSubmit}
 * />
 * ```
 * 
 * @param props - SearchInput component props
 * @returns JSX element representing a search input with button
 */
export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  defaultValue = '',
  onSearch,
  onSubmit,
  disabled = false,
  className = '',
}) => {
  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(searchValue);
  };

  const handleButtonClick = () => {
    onSubmit?.(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={disabled}
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
};
