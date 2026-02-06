import { Input } from './ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search tools by name or description…"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-14 h-16 text-base rounded-2xl border-2 shadow-lg focus-visible:ring-2 focus-visible:ring-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-shadow"
        />
      </div>
    </div>
  );
}
