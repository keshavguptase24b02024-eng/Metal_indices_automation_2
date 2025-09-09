import React, { useState } from 'react';

interface CustomIndicesProps {
  indices: string[];
  onAddIndex: (indexName: string) => void;
  onDeleteIndex: (indexName: string) => void;
}

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

const CustomIndices: React.FC<CustomIndicesProps> = ({ indices, onAddIndex, onDeleteIndex }) => {
  const [newIndexName, setNewIndexName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newIndexName.trim()) {
      onAddIndex(newIndexName.trim());
      setNewIndexName('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add a new custom index</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newIndexName}
            onChange={(e) => setNewIndexName(e.target.value)}
            placeholder="e.g., 'Requires Documentation'"
            className="flex-grow px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="New index name"
          />
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
            disabled={!newIndexName.trim()}
          >
            Add Index
          </button>
        </form>
      </div>
      
      <div className="border border-gray-200 rounded-lg">
          <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
             <h2 className="text-lg font-semibold text-gray-800">Your Custom Indices ({indices.length})</h2>
          </div>
         
          {indices.length > 0 ? (
            <ul className="divide-y divide-gray-200">
                {indices.map((indexName) => (
                <li key={indexName} className="p-4 flex justify-between items-center hover:bg-gray-50">
                    <span className="text-gray-700">{indexName}</span>
                    <button 
                        onClick={() => onDeleteIndex(indexName)}
                        className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-1"
                        aria-label={`Delete index ${indexName}`}
                    >
                        <TrashIcon />
                    </button>
                </li>
                ))}
            </ul>
          ) : (
             <div className="p-6 text-center text-gray-500 bg-white rounded-b-lg">
                You haven't added any custom indices yet.
             </div>
          )}
      </div>
    </div>
  );
};

export default CustomIndices;
