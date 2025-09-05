import { useState } from 'react';
import { Header } from './components/organisms/Header';
import { Button } from './components/atoms/Button';
import { SearchInput } from './components/molecules/SearchInput';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

/**
 * Main App component demonstrating the atomic design structure
 */
function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Search query:', query);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="React TypeScript App"
        showSearch={true}
        onSearch={handleSearch}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to React + TypeScript + Vite
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Counter Example
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button 
                variant="primary" 
                onClick={() => setCount((count) => count + 1)}
              >
                Count is {count}
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => setCount(0)}
              >
                Reset
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Search Example
            </h2>
            <div className="max-w-md mx-auto">
              <SearchInput
                placeholder="Search for something..."
                onSearch={handleSearch}
                onSubmit={handleSearch}
              />
              {searchQuery && (
                <p className="mt-4 text-gray-600">
                  Current search: <strong>{searchQuery}</strong>
                </p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Available Scripts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Development</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><code>npm run dev</code> - Vite Dev Server</li>
                  <li><code>npm run storybook</code> - Storybook</li>
                  <li><code>npm run webpack:dev</code> - Webpack Dev</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Testing</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><code>npm run test</code> - Run Tests</li>
                  <li><code>npm run test:ui</code> - Test UI</li>
                  <li><code>npm run test:coverage</code> - Coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Documentation</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><code>npm run docs</code> - Generate Docs</li>
                  <li><code>npm run docs:serve</code> - Serve Docs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
