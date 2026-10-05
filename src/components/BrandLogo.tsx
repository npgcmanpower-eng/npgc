import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'compact',
  showSubtitle = false
}) => {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Icon embodying the Globe, Cross, Stethoscope and Human figures */}
      <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0c3773] to-[#0f539e] shadow-sm overflow-hidden p-1.5 text-white">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Globe grid */}
          <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="42" ry="20" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
          <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
          
          {/* Green Pathway Arc */}
          <path d="M18 70 C 35 90, 65 90, 84 62" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Stylized N & Stethoscope Loop */}
          <path d="M26 66 L 26 34 L 44 60 L 44 34" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Medical Cross in Emerald */}
          <rect x="52" y="40" width="16" height="4.5" rx="1.5" fill="#22c55e" />
          <rect x="57.75" y="34.25" width="4.5" height="16" rx="1.5" fill="#22c55e" />

          {/* Stethoscope Earpieces loop & bell */}
          <path d="M72 45 C 80 50, 80 62, 70 70 C 65 74, 58 74, 55 72" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="54" cy="72" r="3.5" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-lg font-bold tracking-tight ${isWhite ? 'text-white' : 'text-[#0a2540]'}`}>
            New Path Global
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Medical
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[11px] font-medium tracking-tight mt-0.5 ${isWhite ? 'text-slate-300' : 'text-slate-500'}`}>
            Career Manpower Pvt. Ltd.
          </span>
        )}
      </div>
    </div>
  );
};
