import React, { useState } from 'react';

// Primary source: Local public asset (standard for Vite & Vercel deployments)
const PRIMARY_LOGO_SRC = '/logo.png';

// Fallback source: Direct GitHub raw image from the repository
const FALLBACK_LOGO_SRC = 'https://raw.githubusercontent.com/npgcmanpower-eng/NPGC-manpower/main/logo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'compact',
  showSubtitle = true,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const isWhite = variant === 'white';
  const isFull = variant === 'full';

  // Vector fallback emblem if network/image fails completely
  const renderFallbackEmblem = (sizeClass: string) => (
    <div className={`flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-700 to-[#0a2540] rounded-xl text-white shadow-xs ${sizeClass}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/4 h-3/4"
      >
        {/* Globe grid */}
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
        <ellipse cx="24" cy="24" rx="10" ry="20" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        {/* Medical Cross */}
        <path
          d="M21 14h6v7h7v6h-7v7h-6v-7h-7v-6h7v-7z"
          fill="#34d399"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Stethoscope Accent */}
        <path
          d="M12 28c0 7 5 12 12 12s12-5 12-12v-6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="36" cy="20" r="2.5" fill="#34d399" />
      </svg>
    </div>
  );

  if (isFull) {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="relative shrink-0 rounded-2xl bg-white p-2 border border-slate-200/90 shadow-md transition-transform group-hover:scale-105 mb-3">
          {!imgFailed ? (
            <img
              src={PRIMARY_LOGO_SRC}
              alt="New Path Global Career Manpower Pvt Ltd"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl"
              onError={(e) => {
                if (e.currentTarget.src !== FALLBACK_LOGO_SRC) {
                  e.currentTarget.src = FALLBACK_LOGO_SRC;
                } else {
                  setImgFailed(true);
                }
              }}
            />
          ) : (
            renderFallbackEmblem('w-20 h-20 sm:w-24 sm:h-24')
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`text-xl sm:text-2xl font-black tracking-tight ${
                isWhite ? 'text-white' : 'text-[#0a2540]'
              }`}
            >
              New Path <span className="text-emerald-600">Global</span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Medical
            </span>
          </div>
          <span
            className={`text-xs sm:text-sm font-bold tracking-tight mt-1 ${
              isWhite ? 'text-slate-200' : 'text-slate-600'
            }`}
          >
            Career Manpower Pvt. Ltd.
          </span>
          <div className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase mt-0.5">
            For Medical Department
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative shrink-0 rounded-xl bg-white p-1 border border-slate-200 shadow-xs transition-transform group-hover:scale-105">
        {!imgFailed ? (
          <img
            src={PRIMARY_LOGO_SRC}
            alt="New Path Global Career Manpower Pvt Ltd"
            className="h-11 sm:h-13 w-auto object-contain rounded-lg"
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_LOGO_SRC) {
                e.currentTarget.src = FALLBACK_LOGO_SRC;
              } else {
                setImgFailed(true);
              }
            }}
          />
        ) : (
          renderFallbackEmblem('w-12 h-12 sm:w-14 sm:h-14')
        )}
      </div>

      <div className="flex flex-col justify-center select-none">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`text-base sm:text-lg font-black tracking-tight ${
              isWhite ? 'text-white' : 'text-[#0a2540]'
            }`}
          >
            New Path <span className="text-emerald-600">Global</span>
          </span>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Medical
          </span>
        </div>

        {showSubtitle && (
          <>
            <span
              className={`text-[11px] font-bold tracking-tight mt-1 ${
                isWhite ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Career Manpower Pvt. Ltd.
            </span>
            <span className="text-[9px] font-semibold text-emerald-600 uppercase tracking-wider">
              For Medical Department
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
