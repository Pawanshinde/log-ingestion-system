const getLevelStyles = (level) => {
  switch (level) {
    case 'error': return 'border-red-500 bg-red-50 text-red-800';
    case 'warn': return 'border-yellow-500 bg-yellow-50 text-yellow-800';
    case 'info': return 'border-blue-500 bg-blue-50 text-blue-800';
    case 'debug': return 'border-gray-400 bg-gray-50 text-gray-700';
    default: return 'border-gray-300 bg-white text-gray-700';
  }
};

const LogCard = ({ log }) => {
  const level = log.level?.toLowerCase();
  const levelStyle = getLevelStyles(level);

  return (
    <div className={`p-4 border-l-4 rounded-md shadow-sm ${levelStyle}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-bold uppercase">{log.level || 'UNKNOWN'}</span>
        <span className="text-xs text-gray-500">{log.timestamp}</span>
      </div>
      <p className="text-sm">{log.message}</p>
      <p className="text-xs text-gray-600 mt-1">Resource ID: {log.resourceId}</p>
    </div>
  );
};

export default LogCard;
