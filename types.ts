
export interface User {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  url: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  isPrivate: boolean;
  topics: string[];
}
