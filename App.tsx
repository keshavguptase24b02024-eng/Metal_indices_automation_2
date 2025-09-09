import React, { useState } from 'react';
import UserProfileSidebar from './components/UserProfileSidebar';
import RepoList from './components/RepoList';
import HeaderTabs from './components/HeaderTabs';
import CustomIndices from './components/CustomIndices';
import { mockUser, mockRepos } from './data/mockData';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Repositories');
  const [customIndices, setCustomIndices] = useState<string[]>(['High Priority', 'Needs Review', 'Archived']);

  const handleAddIndex = (indexName: string) => {
    const trimmedName = indexName.trim();
    if (trimmedName && !customIndices.find(i => i.toLowerCase() === trimmedName.toLowerCase())) {
      setCustomIndices(prev => [...prev, trimmedName].sort());
    }
  };

  const handleDeleteIndex = (indexNameToDelete: string) => {
    setCustomIndices(prev => prev.filter(name => name !== indexNameToDelete));
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto p-4 md:p-8">
        <div className="md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <UserProfileSidebar user={mockUser} />
          </div>
          <div className="md:col-span-3">
            <HeaderTabs
              repoCount={mockRepos.length}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            {activeTab === 'Repositories' && <RepoList repos={mockRepos} />}
            {activeTab === 'Indices' && (
              <CustomIndices
                indices={customIndices}
                onAddIndex={handleAddIndex}
                onDeleteIndex={handleDeleteIndex}
              />
            )}
            {(activeTab !== 'Repositories' && activeTab !== 'Indices') && (
                <div className="p-8 text-center text-gray-500 bg-white rounded-lg border border-gray-200">
                    Content for {activeTab} is not yet implemented.
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
