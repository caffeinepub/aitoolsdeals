import { useState, useMemo, lazy, Suspense, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { CategoryFilters } from './components/CategoryFilters';
import { ToolsGrid } from './components/ToolsGrid';
import { useGetAllTools } from './hooks/useQueries';
import { Skeleton } from './components/ui/skeleton';
import { SeoJsonLd } from './components/SeoJsonLd';

// Lazy load below-the-fold sections for code splitting
const TrustSection = lazy(() => import('./components/TrustSection').then(m => ({ default: m.TrustSection })));
const WhyUseSection = lazy(() => import('./components/WhyUseSection').then(m => ({ default: m.WhyUseSection })));
const CTASection = lazy(() => import('./components/CTASection').then(m => ({ default: m.CTASection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  const { data: tools = [], isLoading, isFetched } = useGetAllTools();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Predefined categories for the landing page
  const categories = ['All', 'Chatbots', 'Research', 'Image AI', 'Video AI', 'Writing', 'Meetings', 'Dev Tools', 'Automation'];

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = searchTerm === '' || 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchTerm, selectedCategory]);

  // Preload below-the-fold sections after initial render (non-blocking)
  useEffect(() => {
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => {
        import('./components/TrustSection');
        import('./components/WhyUseSection');
        import('./components/CTASection');
        import('./components/FAQSection');
        import('./components/Footer');
      });
    } else {
      setTimeout(() => {
        import('./components/TrustSection');
        import('./components/WhyUseSection');
        import('./components/CTASection');
        import('./components/FAQSection');
        import('./components/Footer');
      }, 1);
    }
  }, []);

  // Show skeleton only when truly loading (not when data is cached/available)
  const showSkeleton = isLoading && !isFetched;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-chart-1/10">
      <SeoJsonLd tools={tools} />
      <TopBanner />
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-12 md:py-16">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
          />
          
          <CategoryFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {showSkeleton ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-12">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-32 w-full rounded-2xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <ToolsGrid tools={filteredTools} />
          )}
        </section>

        <Suspense fallback={<div className="h-64" />}>
          <TrustSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64" />}>
          <WhyUseSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64" />}>
          <CTASection />
        </Suspense>
        
        <Suspense fallback={<div className="h-64" />}>
          <FAQSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-32" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
