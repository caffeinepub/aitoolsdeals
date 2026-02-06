import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFiltersProps) {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "px-6 py-3 text-sm font-medium cursor-pointer transition-all hover:scale-105 rounded-full",
              selectedCategory === category 
                ? "bg-gradient-to-r from-primary to-chart-1 shadow-lg hover:shadow-glow border-0" 
                : "bg-card/60 backdrop-blur-sm hover:bg-card border-border/50 shadow-sm hover:shadow-md"
            )}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
