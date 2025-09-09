
import React from 'react';
import type { User } from '../types';

interface UserProfileSidebarProps {
  user: User;
}

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
);
const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" /></svg>
);

const UserProfileSidebar: React.FC<UserProfileSidebarProps> = ({ user }) => {
  return (
    <div className="flex flex-col space-y-4">
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="rounded-full w-48 h-48 md:w-full md:h-auto border-2 border-gray-200"
      />
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
        <p className="text-xl text-gray-500 font-light">{user.username}</p>
      </div>
      <p className="text-gray-700">{user.bio}</p>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <UserIcon className="inline-block" />
        <span className="font-semibold">{user.followers}</span> followers
        <span>·</span>
        <span className="font-semibold">{user.following}</span> following
      </div>
      <div className="flex flex-col space-y-2 text-gray-700">
          <div className="flex items-center space-x-2">
            <MapPinIcon />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon />
            <a href={`https://${user.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {user.url}
            </a>
          </div>
      </div>
    </div>
  );
};

export default UserProfileSidebar;
