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
       <div className="flex flex-col gap-1">
  <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
    Start Date & Time
  </label>
  <input
    id="startDate"
    type="datetime-local"
    onChange={(e) => setTimestampStart(e.target.value)}
    className="p-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full shadow-sm"
  />
</div>
<div className="flex flex-col gap-1">
  <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
    End Date & Time
  </label>
  <input
    id="endDate"
    type="datetime-local"
    onChange={(e) => setTimestampEnd(e.target.value)}
    className="p-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full shadow-sm"
  />
</div>
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
