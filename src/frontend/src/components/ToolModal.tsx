import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { ExternalLink, Gift } from 'lucide-react';
import type { Tool } from '../backend';

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

const PARTNER_URL = 'https://2cm.es/1nFLi';

export function ToolModal({ tool, isOpen, onClose }: ToolModalProps) {
  if (!tool) return null;

  const handlePartnerClick = () => {
    window.open(PARTNER_URL, '_blank', 'noopener,noreferrer');
  };

  const handleOfficialClick = () => {
    window.open(tool.website, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-border/50 rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Unlock AI Deals & Bonus Perks
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80 pt-2">
            Choose how you want to continue — official trial options and partner discounts may be available.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Selected Tool */}
          <div className="bg-accent/20 rounded-xl p-4 border border-border/30">
            <p className="text-sm font-semibold text-foreground">
              You selected: <span className="text-primary">{tool.name}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Primary Button - Official Site */}
            <Button
              onClick={handleOfficialClick}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl shadow-md hover:shadow-glow transition-all duration-300 h-12"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Continue to Official Site
            </Button>

            {/* Secondary Button - Partner Deals */}
            <Button
              onClick={handlePartnerClick}
              variant="outline"
              className="w-full border-2 border-primary/50 hover:bg-primary/10 font-semibold rounded-xl h-12 transition-all duration-300"
            >
              <Gift className="h-5 w-5 mr-2" />
              Unlock Bonus Deals 🎁
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center pt-2 border-t border-border/30">
            Bonus offers are optional. You can always access the official tool directly.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
