import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, TrendingUp, TrendingDown } from "lucide-react";

const ProsConsSection = () => {
  const pros = [
    {
      title: "Lepsza infrastruktura",
      description: "Dostęp do lepszej infrastruktury miejskiej, dróg i chodników",
      impact: "Wysoki"
    },
    {
      title: "Usługi publiczne",
      description: "Szerszy zakres usług publicznych dostępnych dla mieszkańców",
      impact: "Wysoki"
    },
    {
      title: "Komunikacja miejska",
      description: "Regularne połączenia autobusowe i lepszy dostęp do transportu",
      impact: "Średni"
    },
    {
      title: "Inwestycje",
      description: "Większy budżet na lokalne inwestycje i rozwój",
      impact: "Wysoki"
    },
    {
      title: "Bezpieczeństwo",
      description: "Lepsza ochrona i straż miejska na większym obszarze",
      impact: "Średni"
    }
  ];

  const cons = [
    {
      title: "Wyższe podatki",
      description: "Możliwe zwiększenie obciążeń podatkowych mieszkańców",
      impact: "Średni"
    },
    {
      title: "Utrata autonomii",
      description: "Mniejszy wpływ na decyzje dotyczące lokalnych spraw",
      impact: "Średni"
    },
    {
      title: "Biurokracja",
      description: "Bardziej złożone procedury administracyjne",
      impact: "Niski"
    },
    {
      title: "Tożsamość lokalna",
      description: "Możliwa utrata unikalnego charakteru miejscowości",
      impact: "Niski"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Wysoki": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Średni": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Niski": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="pros-cons" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Argumenty za i przeciw
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poznaj wszystkie aspekty przejścia do miasta Reda. Przedstawiamy 
              obiektywną analizę korzyści i potencjalnych wyzwań.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pros Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Argumenty ZA</h3>
                  <p className="text-muted-foreground">Korzyści z przejścia</p>
                </div>
              </div>

              <div className="space-y-4">
                {pros.map((pro, index) => (
                  <Card key={index} className="p-6 shadow-card border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <h4 className="font-semibold text-foreground">{pro.title}</h4>
                      </div>
                      <Badge className={getImpactColor(pro.impact)}>
                        {pro.impact}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                      {pro.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cons Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Argumenty PRZECIW</h3>
                  <p className="text-muted-foreground">Potencjalne wyzwania</p>
                </div>
              </div>

              <div className="space-y-4">
                {cons.map((con, index) => (
                  <Card key={index} className="p-6 shadow-card border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                        <h4 className="font-semibold text-foreground">{con.title}</h4>
                      </div>
                      <Badge className={getImpactColor(con.impact)}>
                        {con.impact}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed ml-8">
                      {con.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <Card className="mt-16 p-8 shadow-card bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Podsumowanie analizy
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Przejście do miasta Reda niesie ze sobą zarówno znaczące korzyści, jak i pewne wyzwania. 
                Najważniejsze to poprawa infrastruktury i dostępu do usług publicznych, przy jednoczesnej 
                potrzebie dostosowania się do miejskich struktur administracyjnych.
              </p>
              <div className="flex justify-center space-x-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{pros.length}</div>
                  <div className="text-sm text-muted-foreground">Argumenty ZA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{cons.length}</div>
                  <div className="text-sm text-muted-foreground">Argumenty PRZECIW</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;