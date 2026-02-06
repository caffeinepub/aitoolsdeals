export function TrustSection() {
  const companyLogos = [
    '/assets/generated/company-logo-1.dim_80x40.png',
    '/assets/generated/company-logo-2.dim_80x40.png',
    '/assets/generated/company-logo-3.dim_80x40.png',
    '/assets/generated/company-logo-4.dim_80x40.png',
    '/assets/generated/company-logo-5.dim_80x40.png',
    '/assets/generated/company-logo-6.dim_80x40.png',
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="text-center space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground/90">
          Trusted by creators, marketers, developers & businesses worldwide
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Company logo ${index + 1}`}
                className="h-8 md:h-10 w-auto object-contain"
                width="80"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
