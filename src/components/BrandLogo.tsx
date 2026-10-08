import React from 'react';

// Link directly to the official logo.png hosted in your GitHub repository
// Delivered via ultra-fast global CDN with zero 404 risk on Vercel or local preview
const LOGO_URL = 'https://cdn.jsdelivr.net/gh/npgcmanpower-eng/NPGC-manpower@main/logo.png';
const FALLBACK_LOGO_URL = 'https://raw.githubusercontent.com/npgcmanpower-eng/NPGC-manpower/main/logo.png';

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
  const isWhite = variant === 'white';
  const isFull = variant === 'full';

  if (isFull) {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <div className="relative shrink-0 rounded-2xl bg-white p-2 border border-slate-200/90 shadow-md transition-transform group-hover:scale-105 mb-3">
          <img
            src={LOGO_URL}
            alt="New Path Global Career Manpower Pvt Ltd - Official Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl"
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_LOGO_URL) {
                e.currentTarget.src = FALLBACK_LOGO_URL;
              } else {
                e.currentTarget.src = '/logo.png';
              }
            }}
          />
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
        <img
          src={LOGO_URL}
          alt="New Path Global Career Manpower Pvt Ltd"
          className="h-11 sm:h-13 w-auto object-contain rounded-lg"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_LOGO_URL) {
              e.currentTarget.src = FALLBACK_LOGO_URL;
            } else {
              e.currentTarget.src = '/logo.png';
            }
          }}
        />
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
