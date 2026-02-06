export function WhyUseSection() {
  const features = [
    {
      icon: '/assets/generated/verified-deals-icon.dim_64x64.png',
      title: 'Verified Deals Only',
      description: 'We list only official trials and legitimate discounts.',
    },
    {
      icon: '/assets/generated/daily-updates-icon.dim_64x64.png',
      title: 'Daily Updated Offers',
      description: 'New AI tools and coupons added every day.',
    },
    {
      icon: '/assets/generated/save-money-icon.dim_64x64.png',
      title: 'Save Money on Premium AI',
      description: 'Access powerful AI tools without paying full price.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
