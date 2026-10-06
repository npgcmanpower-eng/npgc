import React from 'react';
import logoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'compact',
  showSubtitle = true
}) => {
  const isWhite = variant === 'white';

  if (variant === 'full') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <img
          src={logoImg}
          alt="New Path Global Career Manpower Pvt Ltd"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-white p-1 border border-slate-200/80 shadow-xs shrink-0"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`text-xl font-extrabold tracking-tight ${isWhite ? 'text-white' : 'text-[#0a2540]'}`}>
              New Path <span className="text-emerald-600">Global</span>
            </span>
          </div>
          <span className={`text-xs font-bold tracking-tight ${isWhite ? 'text-slate-300' : 'text-slate-700'}`}>
            Career Manpower Pvt. Ltd.
          </span>
          <div className="flex items-center gap-1.5 mt-0.5 text-[10px] uppercase font-bold tracking-wider text-emerald-600">
            <span>For Medical Department</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 font-medium">Global Talent | Healthier Tomorrow</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Emblem Logo Image */}
      <img
        src={logoImg}
        alt="New Path Global Logo"
        className="w-11 h-11 sm:w-12 sm:h-12 object-contain rounded-xl bg-white p-0.5 border border-slate-200 shadow-xs shrink-0 transition-transform group-hover:scale-105"
      />

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${isWhite ? 'text-white' : 'text-[#0a2540]'}`}>
            New Path <span className="text-emerald-600">Global</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Medical
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[11px] font-semibold tracking-tight mt-1 ${isWhite ? 'text-slate-300' : 'text-slate-600'}`}>
            Career Manpower Pvt. Ltd.
          </span>
        )}
      </div>
    </div>
  );
};

