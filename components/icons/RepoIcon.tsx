import React from 'react';

const RepoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 .7-.3 1.5-.8 2L18 13c-.4.4-.8.8-1.2 1.2-.4.4-.8.8-1.2 1.2l-1.2 1.2c-.5.5-1.3.8-2 .8h-4c-1.1 0-2-.9-2-2v-4c0-.7.3-1.5.8-2L7 11c.4-.4.8-.8 1.2-1.2.4-.4.8-.8 1.2-1.2l1.2-1.2c.5-.5 1.3-.8 2-.8h4c1.1 0 2 .9 2 2v4Z" />
    <path d="M4 20v-4c0-1.1.9-2 2-2h4" />
    <path d="M4 10V6c0-1.1.9-2 2-2h4" />
  </svg>
);

// FIX: Add missing default export.
export default RepoIcon;