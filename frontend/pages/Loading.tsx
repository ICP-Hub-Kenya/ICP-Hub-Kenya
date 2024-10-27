import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="animate-bounce mb-8">
        <img 
          src="/images/favicon.svg" 
          alt="Loading..." 
          className="w-24 h-24"
        />
      </div>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full animate-progress"
          style={{
            animation: 'progress 5s linear'
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;