import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Are these tools really free?',
      answer: 'We share official free trials and promotional offers.',
    },
    {
      question: 'Do I need a credit card?',
      answer: 'Some trials may require a card, depending on the tool.',
    },
    {
      question: 'Are these deals safe?',
      answer: 'Yes, we only list legitimate and verified sources.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-chart-1 to-chart-5 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        
        <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
