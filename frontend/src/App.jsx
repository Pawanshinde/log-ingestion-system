import { useEffect, useState } from 'react';
import { getLogs } from './services/api';
import FilterBar from './components/FilterBar';
import LogList from './components/LogList';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getLogs(filters).then(setLogs);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 md:px-10">
     
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Log Viewer
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        <FilterBar onFilterChange={setFilters} />
        <LogList logs={logs} />
      </div>
    </div>
  );
};

export default App;
