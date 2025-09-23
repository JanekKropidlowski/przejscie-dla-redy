import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Users, TrendingUp, MessageSquare, ThumbsUp, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProposalsSection = () => {
  const [newProposal, setNewProposal] = useState("");
  const [authorName, setAuthorName] = useState("");
  const { toast } = useToast();

  const proposals = [
    {
      id: 1,
      title: "Etapowe przejście z okresobem próbnym",
      description: "Zamiast natychmiastowego przejścia, wprowadzenie 2-letniego okresu próbnego, po którym mieszkańcy ponownie głosują.",
      author: "Anna Kowalczyk",
      date: "14 marca 2024",
      likes: 23,
      category: "Procedura",
      status: "W dyskusji"
    },
    {
      id: 2,
      title: "Zachowanie lokalnych tradycji i nazwy",
      description: "Gwarancja prawna zachowania nazwy 'Ręków Górny' jako oficjalnej nazwy dzielnicy oraz kontynuacji lokalnych wydarzeń kulturalnych.",
      author: "Mieczysław Nowak",
      date: "12 marca 2024",
      likes: 41,
      category: "Kultura",
      status: "Rozważana"
    },
    {
      id: 3,
      title: "Utworzenie rady mieszkańców",
      description: "Powołanie specjalnej rady mieszkańców Rękowa Górnego z prawem głosu doradczego w sprawach dotyczących naszej dzielnicy.",
      author: "Katarzyna Wójcik",
      date: "10 marca 2024",
      likes: 35,
      category: "Samorząd",
      status: "Pozytywna opinia"
    },
    {
      id: 4,
      title: "Program wsparcia dla seniorów",
      description: "Specjalny program pomocy i wsparcia dla osób starszych podczas procesu adaptacji do nowych struktur miejskich.",
      author: "Jan Kowalski",
      date: "8 marca 2024",
      likes: 28,
      category: "Społeczne",
      status: "W dyskusji"
    },
    {
      id: 5,
      title: "Poprawa komunikacji publicznej",
      description: "Wprowadzenie nowych linii autobusowych łączących Ręków Górny z centrum Redy oraz zwiększenie częstotliwości kursów.",
      author: "Maria Zielińska",
      date: "6 marca 2024",
      likes: 52,
      category: "Transport",
      status: "Przyjęta"
    },
    {
      id: 6,
      title: "Zachowanie autonomii w planowaniu przestrzennym",
      description: "Możliwość współdecydowania o planach zagospodarowania przestrzennego dla obszaru Rękowa Górnego.",
      author: "Piotr Wiśniewski",
      date: "4 marca 2024",
      likes: 19,
      category: "Planowanie",
      status: "W dyskusji"
    }
  ];

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProposal.trim() && authorName.trim()) {
      toast({
        title: "Propozycja wysłana!",
        description: "Twoja propozycja zostanie rozpatrzona przez komitet organizacyjny.",
      });
      setNewProposal("");
      setAuthorName("");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Procedura": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Kultura": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Samorząd": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Społeczne": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Transport": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      "Planowanie": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Przyjęta": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Pozytywna opinia": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "W dyskusji": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Rozważana": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    };
    return colors[status as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Dodatkowe propozycje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mieszkańcy proponują dodatkowe rozwiązania i modyfikacje procesu przejścia.
              Podziel się swoją propozycją lub wesprzyj istniejące pomysły.
            </p>
          </div>

          {/* Add New Proposal Form */}
          <Card className="p-8 shadow-card border-primary/20 mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2 text-primary" />
              Dodaj swoją propozycję
            </h3>
            
            <form onSubmit={handleSubmitProposal} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Twoje imię i nazwisko
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="np. Jan Kowalski"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Opisz swoją propozycję
                </label>
                <textarea
                  value={newProposal}
                  onChange={(e) => setNewProposal(e.target.value)}
                  placeholder="Opisz szczegółowo swoją propozycję dotyczącą procesu przejścia lub dodatkowych rozwiązań..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="bg-hero-gradient hover:opacity-90 transition-opacity"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Wyślij propozycję
              </Button>
            </form>
          </Card>

          {/* Existing Proposals */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center">
              <Users className="w-6 h-6 mr-2 text-primary" />
              Propozycje mieszkańców
            </h3>
            
            <div className="grid gap-6">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="p-6 shadow-card border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header with badges */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(proposal.category)}>
                          {proposal.category}
                        </Badge>
                        <Badge className={getStatusColor(proposal.status)}>
                          {proposal.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{proposal.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{proposal.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {proposal.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {proposal.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground">
                        Autor: <span className="font-medium">{proposal.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Popieram ({proposal.likes})</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Komentuj
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-16 p-8 shadow-card bg-primary/5 border-primary/20">
            <div className="text-center space-y-6">
              <TrendingUp className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Masz pomysł na ulepszenie procesu?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Każda propozycja jest analizowana przez komitet organizacyjny.
                  Najlepsze pomysły są włączane do oficjalnych planów przejścia.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-hero-gradient hover:opacity-90 transition-opacity">
                  Dodaj propozycję
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Zobacz wszystkie propozycje
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProposalsSection;
