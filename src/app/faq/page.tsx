import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free standard shipping on all orders within the United States. Expedited shipping is available for an additional fee. International shipping rates vary by country."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase for a full refund. Items must be in new, unworn condition with original packaging. To initiate a return, please visit our returns portal."
  },
  {
    question: "How do I know what size to order?",
    answer: "Our shoes generally run true to size. We recommend ordering your usual shoe size. If you are between sizes, we suggest sizing up. You can also refer to our size chart for more detailed measurements."
  },
  {
    question: "Are your shoes vegan?",
    answer: "We offer a selection of vegan-friendly shoes made from high-quality synthetic materials. Look for the 'Vegan' badge on the product page to identify these styles."
  },
  {
    question: "How do I care for my shoes?",
    answer: "Care instructions vary by material. For leather shoes, we recommend using a leather cleaner and conditioner. For canvas and synthetic materials, a gentle soap and water solution can be used. Always allow shoes to air dry."
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-primary sm:text-6xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              Find answers to common questions about our products and policies.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
