import React from 'react';
import { Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 text-gray-900 dark:text-white text-2xl font-bold">
          <Zap className="h-7 w-7 text-blue-600" />
          <span>Site Éclair</span>
        </a>
        {/* Vous pouvez ajouter une navigation ici si nécessaire */}
      </div>
    </header>
  );
};