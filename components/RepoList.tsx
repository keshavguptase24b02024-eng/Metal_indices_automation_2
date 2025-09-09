
import React, { useState, useMemo } from 'react';
import type { Repository } from '../types';
import RepoCard from './RepoCard';
import FilterBar from './FilterBar';

interface RepoListProps {
  repos: Repository[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const allLanguages = useMemo(() => {
    const langSet = new Set<string>();
    repos.forEach(repo => {
      if (repo.language) {
        langSet.add(repo.language);
      }
    });
    return Array.from(langSet).sort();
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLanguage = selectedLanguage ? repo.language === selectedLanguage : true;
      return matchesSearch && matchesLanguage;
    });
  }, [repos, searchTerm, selectedLanguage]);

  return (
    <div>
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        allLanguages={allLanguages}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      <div>
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
