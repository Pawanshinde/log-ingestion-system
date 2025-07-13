import { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [message, setMessage] = useState('');
  const [level, setLevel] = useState('');
  const [resourceId, setResourceId] = useState('');
  const [timestampStart, setTimestampStart] = useState('');
  const [timestampEnd, setTimestampEnd] = useState('');

  const applyFilters = () => {
    onFilterChange({
      message,
      level,
      resourceId,
      timestamp_start: timestampStart,
      timestamp_end: timestampEnd,
    });
  };

  return (
    <div className="bg-white p-4 mb-6 rounded shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="p-2 border border-gray-300 rounded w-full"
          type="text"
          placeholder="Search Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="error">Error</option>
          <option value="warn">Warn</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>
        <input
          className="p-2 border border-gray-300 rounded w-full"
          type="text"
          placeholder="Resource ID"
          onChange={(e) => setResourceId(e.target.value)}
        />
        <input
          className="p-2 border border-gray-300 rounded w-full"
          type="datetime-local"
          onChange={(e) => setTimestampStart(e.target.value)}
        />
        <input
          className="p-2 border border-gray-300 rounded w-full"
          type="datetime-local"
          onChange={(e) => setTimestampEnd(e.target.value)}
        />
        <button
          onClick={applyFilters}
          className="bg-blue-600 text-white rounded p-2 w-full hover:bg-blue-700 transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
