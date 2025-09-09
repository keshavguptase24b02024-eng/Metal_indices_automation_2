import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';
import RepoIcon from './icons/RepoIcon';
import StarIcon from './icons/StarIcon';
import TagIcon from './icons/TagIcon';

interface HeaderTabsProps {
    repoCount: number;
    activeTab: string;
    onTabChange: (tabName: string) => void;
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ repoCount, activeTab, onTabChange }) => {
  const tabs = [
    { name: 'Overview', icon: BookOpenIcon, count: null },
    { name: 'Repositories', icon: RepoIcon, count: repoCount },
    { name: 'Indices', icon: TagIcon, count: null },
    { name: 'Projects', icon: null, count: null },
    { name: 'Packages', icon: null, count: null },
    { name: 'Stars', icon: StarIcon, count: 128 },
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = tab.name === activeTab;
          return (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.name)}
              className={`
                ${isActive
                  ? 'border-orange-500 text-gray-900 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                }
                group inline-flex items-center py-4 px-1 border-b-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 rounded-t-sm
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              {tab.icon && <tab.icon className="mr-2"/>}
              <span>{tab.name}</span>
              {tab.count !== null && (
                  <span className={`ml-2 py-0.5 px-2 rounded-full text-xs font-medium ${isActive ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600'}`}>
                      {tab.count}
                  </span>
              )}
            </button>
        )})}
      </nav>
    </div>
  );
};

export default HeaderTabs;
