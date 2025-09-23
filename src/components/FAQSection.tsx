import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Jak będzie przebiegał proces przejścia do miasta Reda?",
      answer: "Proces składa się z kilku etapów: zbieranie podpisów poparcia (minimum 500), przygotowanie dokumentacji prawnej, konsultacje społeczne, referendum lokalne i w końcu formalne procedury administracyjne. Cały proces może potrwać od 12 do 18 miesięcy."
    },
    {
      question: "Czy przejście oznacza wyższe podatki?",
      answer: "Stawki podatków będą dostosowane do stawek obowiązujących w mieście Reda. W większości przypadków różnice są minimalne, a korzyści z lepszej infrastruktury i usług przeważają nad ewentualnymi wzrostami opłat."
    },
    {
      question: "Co stanie się z naszą tożsamością lokalną?",
      answer: "Ręków Górny zachowa swoją unikalną tożsamość jako dzielnica miasta Reda. Lokalne tradycje, wydarzenia kulturalne i społeczne będą kontynuowane. Miasto zobowiązuje się do zachowania charakteru naszej społeczności."
    },
    {
      question: "Jakie będą korzyści dla mieszkańców?",
      answer: "Mieszkańcy zyskają dostęp do miejskiej komunikacji publicznej, lepszej infrastruktury, szerszego zakresu usług publicznych, większych inwestycji w rozwój lokalny oraz lepszego bezpieczeństwa dzięki miejskiej straży."
    },
    {
      question: "Kto może głosować w referendum?",
      answer: "W referendum mogą uczestniczyć wszyscy mieszkańcy Rękowa Górnego posiadający prawa wyborcze, czyli osoby pełnoletnie wpisane do rejestru wyborców w naszej miejscowości."
    },
    {
      question: "Kiedy planowane jest referendum?",
      answer: "Referendum planowane jest na wiosnę 2024 roku, po zebraniu wymaganej liczby podpisów i zakończeniu przygotowań prawnych. Dokładna data zostanie ogłoszona co najmniej 3 miesiące przed głosowaniem."
    },
    {
      question: "Czy będzie możliwość cofnięcia decyzji?",
      answer: "Teoretycznie istnieje możliwość prawna, ale jest to proces bardzo skomplikowany i kosztowny. Dlatego tak ważne jest dokładne przemyślenie wszystkich aspektów przed referendum."
    },
    {
      question: "Jak mogę się zaangażować w inicjatywę?",
      answer: "Możesz wyrazić swoje poparcie poprzez formularz na tej stronie, uczestniczyć w spotkaniach informacyjnych, dzielić się informacjami z sąsiadami lub zgłosić się na wolontariusza do komitetu organizacyjnego."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Znajdź odpowiedzi na najważniejsze pytania dotyczące inicjatywy 
              przejścia Rękowa Górnego do miasta Reda.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="p-8 shadow-card border-primary/10">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Contact Info */}
          <Card className="mt-12 p-8 shadow-card bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Nie znalazłeś odpowiedzi na swoje pytanie?
              </h3>
              <p className="text-muted-foreground">
                Skontaktuj się z nami bezpośrednio. Chętnie odpowiemy na wszystkie 
                pytania dotyczące inicjatywy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <div className="text-sm">
                  <strong>Email:</strong> info@rekowgorny-reda.pl
                </div>
                <div className="text-sm">
                  <strong>Telefon:</strong> +48 123 456 789
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;