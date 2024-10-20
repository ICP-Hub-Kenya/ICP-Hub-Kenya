import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface TechJourneyStatsProps {
  title: string;
  stats: Stat[];
  isDarkMode?: boolean;
}

const TechJourneyStats: React.FC<TechJourneyStatsProps> = ({ title, stats, isDarkMode = false }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const statValueColor = isDarkMode ? 'text-[#e2b134]' : 'text-[#571E1E]';

  return (
    <div className={`p-8 font-gordita max-w-2xl mx-auto ${textColor}`}>
      
      <h1 className="text-5xl text-center sm:text-start sm:text-5xl lg:text-5xl font-bold mb-6 sm:mb-7 tracking-[-0.08em]">
        <span className="font-gordita">{title}</span>
      </h1>
      
      <div className="flex mt-8 sm:items-end sm:ml-0">
        {stats.map((stat, index) => (
          <div key={index} className="text-center m-2 items-center">
            <p className={`font-bold text-[60px] sm:text-[30px] ${statValueColor} tracking-[-0.11em]`}>{stat.value}</p>
            <p className="text-sm mt-2 uppercase tracking-[-0.11em]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechJourneyStats;