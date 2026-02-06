import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, CheckCircle2 } from 'lucide-react';
import type { Tool } from '../backend';

interface ToolCardProps {
  tool: Tool;
  logoUrl?: string;
  onCardClick: (tool: Tool) => void;
  promotionalBadge?: string;
}

export function ToolCard({ tool, logoUrl, onCardClick, promotionalBadge }: ToolCardProps) {
  return (
    <Card className="card group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50 rounded-2xl overflow-hidden relative flex flex-col">
      {/* Verified Badge - Top Right */}
      {tool.verified && (
        <div className="absolute top-3 right-3 z-10">
          <CheckCircle2 className="h-5 w-5 text-green-500 drop-shadow-md" />
        </div>
      )}

      <CardHeader className="space-y-3 pb-3">
        {/* Promotional Badge */}
        {promotionalBadge && (
          <div className="flex justify-center">
            <Badge className="bg-gradient-to-r from-accent to-chart-1 text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold shadow-md">
              {promotionalBadge}
            </Badge>
          </div>
        )}

        {/* Logo */}
        {logoUrl && (
          <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 overflow-hidden">
            <img 
              src={logoUrl} 
              alt={`${tool.name} logo`}
              className="w-12 h-12 object-contain"
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        
        {/* Tool Name */}
        <CardTitle className="text-base font-bold leading-tight text-center line-clamp-2">
          {tool.name}
        </CardTitle>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < tool.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-muted text-muted'
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1 font-medium">
            {tool.rating}.0
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-1 flex flex-col">
        {/* Description */}
        <CardDescription className="text-xs line-clamp-2 leading-relaxed text-center">
          {tool.description}
        </CardDescription>

        {/* Bonus Perks Text */}
        <p className="text-xs text-primary/80 text-center font-medium">
          👉 Check current trial offers & bonus perks
        </p>
        
        {/* Tags */}
        {tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-center">
            {tool.tags.slice(0, 2).map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-full bg-accent/50 border-border/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Deal */}
        {tool.deal && (
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs font-semibold text-primary text-center">
              🎉 {tool.deal}
            </p>
          </div>
        )}

        {/* Pro Version Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg px-3 py-2 border border-primary/20">
          <p className="text-xs font-semibold text-center text-foreground">
            🔓 Pro version free
          </p>
        </div>

        {/* Get Deal Button */}
        <div className="mt-auto pt-3">
          <Button
            onClick={() => onCardClick(tool)}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl shadow-md hover:shadow-glow transition-all duration-300"
          >
            Get Deal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
