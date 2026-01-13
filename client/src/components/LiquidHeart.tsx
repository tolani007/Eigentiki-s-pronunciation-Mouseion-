import { cn } from "@/lib/utils";

export function LiquidHeart({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center perspective-1000", className)}>
      <div className="relative h-16 w-16 animate-[spin_6s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front face of the glass heart */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-full w-full text-purple-500/30 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            style={{
              filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
            }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 blur-sm" 
               style={{ clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')" }} 
          />
          
          {/* Shine/Reflection */}
          <div className="absolute top-2 left-2 h-4 w-4 rounded-full bg-white/60 blur-[2px]" />
        </div>
      </div>
    </div>
  );
}
