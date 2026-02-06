import { useMemo } from 'react';
import type { Tool } from '../backend';

interface SeoJsonLdProps {
  tools: Tool[];
}

export function SeoJsonLd({ tools }: SeoJsonLdProps) {
  const jsonLd = useMemo(() => {
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI Tools Deals',
      url: 'https://aitoolsdeals.com/',
      description: 'Access FREE Pro Tools with official free trials and exclusive discounts. Verified AI tool deals, coupons, and bonus perks.',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://aitoolsdeals.com/?search={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    };

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Tools Deals',
      url: 'https://aitoolsdeals.com/',
      description: 'Verified AI tool deals, trials, and coupons. No hacks or illegal methods.',
      sameAs: []
    };

    const itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AI Tools and Deals',
      description: 'Curated list of premium AI tools with free trials and exclusive discounts',
      numberOfItems: tools.length,
      itemListElement: tools.slice(0, 40).map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          description: tool.description,
          applicationCategory: tool.category,
          offers: tool.deal ? {
            '@type': 'Offer',
            description: tool.deal,
            availability: 'https://schema.org/InStock'
          } : undefined,
          aggregateRating: tool.rating > 0 ? {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            bestRating: 5,
            worstRating: 1
          } : undefined
        }
      }))
    };

    return [websiteSchema, organizationSchema, itemListSchema];
  }, [tools]);

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
