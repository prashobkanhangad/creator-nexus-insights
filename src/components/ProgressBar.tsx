
import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  className = "", 
  label,
  showPercentage = false
}) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showPercentage && <span className="text-sm font-medium text-gray-700">{percentage}%</span>}
        </div>
      )}
      <div className="progress-bar">
        <div 
          className="progress-value" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {!label && showPercentage && (
        <div className="mt-1 text-xs text-gray-500 text-right">{value} of {max}</div>
      )}
    </div>
  );
};

export default ProgressBar;
