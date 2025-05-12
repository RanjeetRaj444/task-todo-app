import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 md:py-6 sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CheckSquare size={28} className="text-blue-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
          </div>
          <div className="text-sm text-gray-500">
            Stay Organized
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;