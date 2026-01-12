import { LibraryItem } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface LibraryCardProps {
  item: LibraryItem;
}

export function LibraryCard({ item }: LibraryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full w-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-full flex-col transition-all duration-500 ease-out group-hover:-translate-y-2">
        {/* Book Cover Container */}
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md bg-muted shadow-sm transition-all duration-500 group-hover:shadow-xl">
          <img
            src={item.cover}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Overlay on Hover */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-lg transition-transform duration-300 group-hover:scale-100 scale-90">
              <span>View Source</span>
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="font-serif text-lg font-medium leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground font-sans">{item.author}</p>
          
          {/* Metadata Tags */}
          <div className="mt-2 flex flex-wrap gap-2">
            {item.type === 'paper' && (
              <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                Paper
              </span>
            )}
            {item.year && (
              <span className="text-xs text-muted-foreground/70 font-mono">
                {item.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
