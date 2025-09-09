
import React from 'react';
import type { Repository } from '../types';
import StarIcon from './icons/StarIcon';
import RepoForkedIcon from './icons/RepoForkedIcon';

interface RepoCardProps {
  repo: Repository;
}

const LANGUAGE_COLORS: { [key: string]: string } = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-500',
  Python: 'bg-green-500',
  Shell: 'bg-indigo-500',
  Astro: 'bg-orange-500',
  Go: 'bg-cyan-500',
  Rust: 'bg-red-500',
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] || 'bg-gray-500' : 'bg-gray-500';

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center mb-2">
            <a href="#" className="text-xl font-semibold text-blue-600 hover:underline">
              {repo.name}
            </a>
            {repo.isPrivate && (
              <span className="ml-3 text-xs font-semibold border border-gray-300 rounded-full px-2 py-0.5 text-gray-600">
                Private
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-4">{repo.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.map((topic) => (
              <span key={topic} className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {topic}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            {repo.language && (
              <div className="flex items-center">
                <span className={`w-3 h-3 rounded-full mr-1.5 ${langColor}`}></span>
                <span>{repo.language}</span>
              </div>
            )}
            {repo.stars > 0 && (
              <a href="#" className="flex items-center hover:text-blue-600">
                <StarIcon className="mr-1" />
                <span>{repo.stars}</span>
              </a>
            )}
            {repo.forks > 0 && (
              <a href="#" className="flex items-center hover:text-blue-600">
                <RepoForkedIcon className="mr-1" />
                <span>{repo.forks}</span>
              </a>
            )}
            <span>Updated {repo.updatedAt}</span>
          </div>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          {/* Star button can be added here */}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
