import { useState } from 'react';
import { ToolCard } from './ToolCard';
import { ToolModal } from './ToolModal';
import type { Tool } from '../backend';
import { Package } from 'lucide-react';

interface ToolsGridProps {
  tools: Tool[];
}

// Static tool data with AI-generated logos and official website links
const STATIC_TOOLS: Tool[] = [
  {
    name: 'ChatGPT',
    description: 'Advanced conversational AI for writing, coding, and problem-solving.',
    category: 'Chatbots',
    rating: 5,
    verified: true,
    tags: ['Chatbot', 'Writing'],
    deal: 'Free trial available',
    website: 'https://chat.openai.com',
  },
  {
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for thoughtful, nuanced conversations.',
    category: 'Chatbots',
    rating: 5,
    verified: true,
    tags: ['Chatbot', 'Research'],
    deal: '20% off Pro plan',
    website: 'https://claude.ai',
  },
  {
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI for text, images, and code generation.',
    category: 'Chatbots',
    rating: 5,
    verified: true,
    tags: ['Chatbot', 'Research'],
    deal: 'Free tier included',
    website: 'https://gemini.google.com',
  },
  {
    name: 'Microsoft Copilot',
    description: 'AI-powered assistant integrated across Microsoft 365 apps.',
    category: 'Automation',
    rating: 5,
    verified: true,
    tags: ['Automation', 'Writing'],
    deal: '30-day free trial',
    website: 'https://copilot.microsoft.com',
  },
  {
    name: 'Perplexity',
    description: 'AI-powered search engine with real-time answers and citations.',
    category: 'Research',
    rating: 5,
    verified: true,
    tags: ['Research', 'Chatbot'],
    deal: 'Pro plan 50% off',
    website: 'https://www.perplexity.ai',
  },
  {
    name: 'Midjourney',
    description: 'Create stunning AI-generated artwork from text prompts.',
    category: 'Image AI',
    rating: 5,
    verified: true,
    tags: ['Image AI', 'Design'],
    deal: 'First month 40% off',
    website: 'https://www.midjourney.com',
  },
  {
    name: 'Canva AI',
    description: 'Design platform with AI-powered image generation and editing.',
    category: 'Image AI',
    rating: 5,
    verified: true,
    tags: ['Design', 'Image AI'],
    deal: 'Free Pro trial',
    website: 'https://www.canva.com',
  },
  {
    name: 'Adobe Firefly',
    description: 'Adobe\'s generative AI for creative image and text effects.',
    category: 'Image AI',
    rating: 5,
    verified: true,
    tags: ['Image AI', 'Design'],
    deal: '25 free credits',
    website: 'https://firefly.adobe.com',
  },
  {
    name: 'Runway',
    description: 'AI video editing and generation platform for creators.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Design'],
    deal: 'Free tier available',
    website: 'https://runwayml.com',
  },
  {
    name: 'Synthesia',
    description: 'Create professional AI videos with virtual avatars and voices.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Automation'],
    deal: 'Free demo video',
    website: 'https://www.synthesia.io',
  },
  {
    name: 'ElevenLabs',
    description: 'Realistic AI voice generation and text-to-speech platform.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Writing'],
    deal: '10,000 free characters',
    website: 'https://elevenlabs.io',
  },
  {
    name: 'Descript',
    description: 'All-in-one audio and video editing with AI transcription.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Meetings'],
    deal: 'Free plan included',
    website: 'https://www.descript.com',
  },
  {
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, tone, and clarity improvements.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: '20% off Premium',
    website: 'https://www.grammarly.com',
  },
  {
    name: 'Jasper',
    description: 'AI content creation platform for marketing and copywriting.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: '7-day free trial',
    website: 'https://www.jasper.ai',
  },
  {
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: 'Free AI responses',
    website: 'https://www.notion.so/product/ai',
  },
  {
    name: 'Fathom',
    description: 'AI meeting assistant that records and summarizes conversations.',
    category: 'Meetings',
    rating: 5,
    verified: true,
    tags: ['Meetings', 'Automation'],
    deal: 'Free forever plan',
    website: 'https://fathom.video',
  },
  {
    name: 'Otter.ai',
    description: 'Real-time transcription and meeting notes powered by AI.',
    category: 'Meetings',
    rating: 5,
    verified: true,
    tags: ['Meetings', 'Writing'],
    deal: '600 free minutes',
    website: 'https://otter.ai',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code as you type.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Automation'],
    deal: '30-day free trial',
    website: 'https://github.com/features/copilot',
  },
  {
    name: 'Replit',
    description: 'Collaborative coding platform with AI-powered assistance.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Automation'],
    deal: 'Free tier available',
    website: 'https://replit.com',
  },
  {
    name: 'Zapier',
    description: 'Automate workflows between apps with AI-powered integrations.',
    category: 'Automation',
    rating: 5,
    verified: true,
    tags: ['Automation', 'Dev Tools'],
    deal: '14-day free trial',
    website: 'https://zapier.com',
  },
  {
    name: 'Pika Labs',
    description: 'AI video generator that creates stunning videos from text prompts.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Design'],
    deal: 'Free trial available',
    website: 'https://pika.art',
  },
  {
    name: 'Sora (by OpenAI)',
    description: 'Advanced AI video generation tool for creating realistic video content.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Design'],
    deal: 'Pro version free',
    website: 'https://openai.com/sora',
  },
  {
    name: 'Mistral AI',
    description: 'Open-weight LLM for developers building AI applications.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Chatbot'],
    deal: 'Free API credits',
    website: 'https://mistral.ai',
  },
  {
    name: 'DeepSeek AI',
    description: 'Powerful AI reasoning and coding assistant for complex problem-solving.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Chatbot'],
    deal: 'Free trial available',
    website: 'https://www.deepseek.com',
  },
  {
    name: 'Cursor AI',
    description: 'AI-powered code editor that helps you write code faster.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Automation'],
    deal: 'Pro version free',
    website: 'https://cursor.sh',
  },
  {
    name: 'Codeium',
    description: 'Free AI coding assistant with autocomplete and chat features.',
    category: 'Dev Tools',
    rating: 5,
    verified: true,
    tags: ['Dev Tools', 'Automation'],
    deal: 'Free forever plan',
    website: 'https://codeium.com',
  },
  {
    name: 'Writesonic',
    description: 'AI writing tool for marketing automation and content creation.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: 'Free trial available',
    website: 'https://writesonic.com',
  },
  {
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing teams and content creators.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: '7-day free trial',
    website: 'https://www.copy.ai',
  },
  {
    name: 'Framer AI',
    description: 'AI website builder that creates stunning sites in seconds.',
    category: 'Design',
    rating: 5,
    verified: true,
    tags: ['Design', 'Automation'],
    deal: 'Free trial available',
    website: 'https://www.framer.com',
  },
  {
    name: 'Durable AI',
    description: 'Instant AI business website generator with built-in tools.',
    category: 'Design',
    rating: 5,
    verified: true,
    tags: ['Design', 'Automation'],
    deal: 'Free trial available',
    website: 'https://durable.co',
  },
  {
    name: 'Leonardo AI',
    description: 'AI image generation tool for designers and creative professionals.',
    category: 'Image AI',
    rating: 5,
    verified: true,
    tags: ['Image AI', 'Design'],
    deal: 'Free credits included',
    website: 'https://leonardo.ai',
  },
  {
    name: 'Remove.bg',
    description: 'AI background remover that instantly removes image backgrounds.',
    category: 'Image AI',
    rating: 5,
    verified: true,
    tags: ['Image AI', 'Design'],
    deal: 'Free trial available',
    website: 'https://www.remove.bg',
  },
  {
    name: 'Opus Clip',
    description: 'AI short-form video clipping tool for content creators.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Automation'],
    deal: 'Free trial available',
    website: 'https://www.opus.pro',
  },
  {
    name: 'Luma AI',
    description: 'AI 3D and video generation platform for immersive content.',
    category: 'Video AI',
    rating: 5,
    verified: true,
    tags: ['Video AI', 'Design'],
    deal: 'Free tier available',
    website: 'https://lumalabs.ai',
  },
  {
    name: 'Tome AI',
    description: 'AI presentation creator that generates beautiful slides instantly.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Design'],
    deal: 'Free trial available',
    website: 'https://tome.app',
  },
  {
    name: 'Gamma AI',
    description: 'AI slides and documents generator for presentations and reports.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Design'],
    deal: 'Free trial available',
    website: 'https://gamma.app',
  },
  {
    name: 'Taskade AI',
    description: 'AI productivity and task management tool for teams.',
    category: 'Automation',
    rating: 5,
    verified: true,
    tags: ['Automation', 'Writing'],
    deal: 'Free plan included',
    website: 'https://www.taskade.com',
  },
  {
    name: 'ClickUp AI',
    description: 'AI-powered project management platform for productivity.',
    category: 'Automation',
    rating: 5,
    verified: true,
    tags: ['Automation', 'Writing'],
    deal: 'Free trial available',
    website: 'https://clickup.com',
  },
  {
    name: 'Krisp AI',
    description: 'AI noise cancellation tool for crystal-clear calls and meetings.',
    category: 'Meetings',
    rating: 5,
    verified: true,
    tags: ['Meetings', 'Automation'],
    deal: 'Free trial available',
    website: 'https://krisp.ai',
  },
  {
    name: 'Speechify',
    description: 'AI text-to-speech tool that reads any text aloud naturally.',
    category: 'Writing',
    rating: 5,
    verified: true,
    tags: ['Writing', 'Automation'],
    deal: 'Free trial available',
    website: 'https://speechify.com',
  },
];

// Logo mapping for static tools
const LOGO_MAP: Record<string, string> = {
  'ChatGPT': '/assets/generated/chatgpt-logo.dim_64x64.png',
  'Claude': '/assets/generated/claude-logo.dim_64x64.png',
  'Google Gemini': '/assets/generated/gemini-logo.dim_64x64.png',
  'Microsoft Copilot': '/assets/generated/copilot-logo.dim_64x64.png',
  'Perplexity': '/assets/generated/perplexity-logo.dim_64x64.png',
  'Midjourney': '/assets/generated/midjourney-logo.dim_64x64.png',
  'Canva AI': '/assets/generated/canva-ai-logo.dim_64x64.png',
  'Adobe Firefly': '/assets/generated/firefly-logo.dim_64x64.png',
  'Runway': '/assets/generated/runway-logo.dim_64x64.png',
  'Synthesia': '/assets/generated/synthesia-logo.dim_64x64.png',
  'ElevenLabs': '/assets/generated/elevenlabs-logo.dim_64x64.png',
  'Descript': '/assets/generated/descript-logo.dim_64x64.png',
  'Grammarly': '/assets/generated/grammarly-logo.dim_64x64.png',
  'Jasper': '/assets/generated/jasper-logo.dim_64x64.png',
  'Notion AI': '/assets/generated/notion-ai-logo.dim_64x64.png',
  'Pika Labs': '/assets/generated/pika-labs-logo.dim_64x64.png',
  'Sora (by OpenAI)': '/assets/generated/sora-logo.dim_64x64.png',
  'Mistral AI': '/assets/generated/mistral-ai-logo.dim_64x64.png',
  'DeepSeek AI': '/assets/generated/deepseek-ai-logo.dim_64x64.png',
  'Cursor AI': '/assets/generated/cursor-ai-logo.dim_64x64.png',
  'Codeium': '/assets/generated/codeium-logo.dim_64x64.png',
  'Writesonic': '/assets/generated/writesonic-logo.dim_64x64.png',
  'Copy.ai': '/assets/generated/copy-ai-logo.dim_64x64.png',
  'Framer AI': '/assets/generated/framer-ai-logo.dim_64x64.png',
  'Durable AI': '/assets/generated/durable-ai-logo.dim_64x64.png',
  'Leonardo AI': '/assets/generated/leonardo-ai-logo.dim_64x64.png',
  'Remove.bg': '/assets/generated/remove-bg-logo.dim_64x64.png',
  'Opus Clip': '/assets/generated/opus-clip-logo.dim_64x64.png',
  'Luma AI': '/assets/generated/luma-ai-logo.dim_64x64.png',
  'Tome AI': '/assets/generated/tome-ai-logo.dim_64x64.png',
  'Gamma AI': '/assets/generated/gamma-ai-logo.dim_64x64.png',
  'Taskade AI': '/assets/generated/taskade-ai-logo.dim_64x64.png',
  'ClickUp AI': '/assets/generated/clickup-ai-logo.dim_64x64.png',
  'Krisp AI': '/assets/generated/krisp-ai-logo.dim_64x64.png',
  'Speechify': '/assets/generated/speechify-logo.dim_64x64.png',
};

// Promotional badges to randomly assign
const PROMOTIONAL_BADGES = [
  '🎁 Pro version free',
  '⚡ Limited-Time Discount',
  '💎 Bonus Credits Included',
];

// Function to get a consistent random badge for each tool
function getPromotionalBadge(toolName: string): string {
  // Use tool name to generate a consistent index
  const hash = toolName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return PROMOTIONAL_BADGES[hash % PROMOTIONAL_BADGES.length];
}

export function ToolsGrid({ tools }: ToolsGridProps) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use static tools if backend returns empty array
  const displayTools = tools.length > 0 ? tools : STATIC_TOOLS;

  const handleCardClick = (tool: Tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTool(null), 300); // Clear after animation
  };

  if (displayTools.length === 0) {
    return (
      <div className="mt-12">
        {/* Empty Grid Layout - App Store Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {[...Array(10)].map((_, index) => (
            <div 
              key={index}
              className="aspect-square rounded-2xl bg-card/40 backdrop-blur-sm border-2 border-dashed border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <Package className="h-8 w-8 text-muted-foreground/30" />
            </div>
          ))}
        </div>
        
        {/* Empty State Message */}
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No tools available yet</h3>
          <p className="text-muted-foreground">
            Check back soon for amazing AI tool deals and discounts
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-12">
        {displayTools.map((tool, index) => (
          <ToolCard 
            key={`${tool.name}-${index}`} 
            tool={tool}
            logoUrl={LOGO_MAP[tool.name]}
            onCardClick={handleCardClick}
            promotionalBadge={getPromotionalBadge(tool.name)}
          />
        ))}
      </div>

      <ToolModal 
        tool={selectedTool}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
