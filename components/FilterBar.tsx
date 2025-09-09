
import React from 'react';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  allLanguages: string[];
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  allLanguages,
  selectedLanguage,
  onLanguageChange
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-4 md:space-y-0 pb-4 border-b border-gray-200">
      <input
        type="text"
        placeholder="Find a repository..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full md:flex-1 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex space-x-2">
        <select
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 bg-gray-50 rounded-md text-sm hover:bg-gray-100 focus:outline-none w-full md:w-auto"
        >
          <option value="">All Languages</option>
          {allLanguages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
        </select>
        {/* Other filters like Type, Sort could be added here */}
      </div>
      <button className="flex items-center justify-center bg-green-600 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-green-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        New
      </button>
    </div>
  );
};

export default FilterBar;
