/**
 * Global TypeScript type definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type Theme = 'light' | 'dark';

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
