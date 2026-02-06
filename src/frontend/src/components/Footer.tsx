import { Heart } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { label: 'Top Deals', href: '#' },
    { label: 'Categories', href: '#' },
    { label: 'Submit a Deal', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Verified AI tool deals, trials, and coupons. No hacks or illegal methods.
          </p>
          
          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm">
            {footerLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-2">
                <a 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-muted-foreground/50">|</span>
                )}
              </span>
            ))}
          </nav>
          
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            © 2025. Built with <Heart className="h-3 w-3 text-destructive fill-destructive" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
