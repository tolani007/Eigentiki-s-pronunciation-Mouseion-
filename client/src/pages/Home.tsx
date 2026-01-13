import { LibraryCard } from "@/components/LibraryCard";
import { LiquidHeart } from "@/components/LiquidHeart";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { libraryItems } from "@/lib/data";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'book' | 'paper'>('all');

  const filteredItems = libraryItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Header Section */}
      <header className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            My Digital Garden
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Eigentiki's library
            </h1>
            <LiquidHeart className="h-16 w-16 md:h-20 md:w-20" />
          </div>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl leading-relaxed">
            A curated collection of books, research papers, and essays that have significantly influenced my worldview. 
            Hover to explore the sources.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.linkedin.com/in/tolani-akinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/tolani007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/tolaniakinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/tolaniakinola/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-label="Email"
                    onClick={() => {
                      navigator.clipboard.writeText("tolaniakinola@gmail.com");
                    }}
                  >
                    <Mail className="h-5 w-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>tolaniakinola@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="rounded-full px-6 transition-all duration-300"
          >
            All Collection
          </Button>
          <Button
            variant={filter === 'book' ? 'default' : 'outline'}
            onClick={() => setFilter('book')}
            className="rounded-full px-6 transition-all duration-300"
          >
            Books
          </Button>
          <Button
            variant={filter === 'paper' ? 'default' : 'outline'}
            onClick={() => setFilter('paper')}
            className="rounded-full px-6 transition-all duration-300"
          >
            Papers
          </Button>
        </div>
      </header>

      {/* Grid Section */}
      <main className="container pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <LibraryCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No items found in this category.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} My Library. Cultivated with care.
          </p>

        </div>
      </footer>
    </div>
  );
}
