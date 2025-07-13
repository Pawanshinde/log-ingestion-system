import React from 'react';
import LogCard from './LogCard';

const LogList = ({ logs }) => {
  if (!logs.length) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No logs found for selected filters.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {logs.map((log, index) => (
        <LogCard key={index} log={log} />
      ))}
    </div>
  );
};

export default LogList;
