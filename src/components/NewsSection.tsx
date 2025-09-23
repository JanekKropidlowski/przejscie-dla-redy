import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: "Spotkanie informacyjne dla mieszkańców - podsumowanie",
      excerpt: "W ostatni piątek odbyło się pierwsze spotkanie informacyjne dotyczące inicjatywy przejścia do miasta Reda. Uczestniczyło w nim ponad 80 mieszkańców.",
      author: "Komitet Organizacyjny",
      date: "15 marca 2024",
      category: "Spotkania",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Analiza prawna procesu przejścia - raport ekspertów",
      excerpt: "Zespół prawników przygotował szczegółową analizę wszystkich aspektów prawnych przejścia Rękowa Górnego do miasta Reda. Raport dostępny do pobrania.",
      author: "Kancelaria Prawna XYZ",
      date: "12 marca 2024",
      category: "Dokumenty",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Mieszkańcy pytają - odpowiadamy na wasze wątpliwości",
      excerpt: "Zebraliśmy najczęściej zadawane pytania z ostatnich tygodni i przygotowaliśmy szczegółowe odpowiedzi. Sprawdź, czy znajdziesz rozwiązanie swoich wątpliwości.",
      author: "Zespół ds. Komunikacji",
      date: "8 marca 2024",
      category: "FAQ",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Konsultacje społeczne - twój głos ma znaczenie",
      excerpt: "Rozpoczynamy szerokie konsultacje społeczne. Każdy mieszkaniec może wyrazić swoją opinię i zadać pytania dotyczące planowanego przejścia.",
      author: "Komitet Organizacyjny",
      date: "5 marca 2024",
      category: "Konsultacje",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Porównanie budżetów - Ręków Górny vs miasto Reda",
      excerpt: "Szczegółowe porównanie budżetów i wydatków na mieszkańca. Analiza pokazuje potencjalne korzyści finansowe z przejścia do miasta.",
      author: "Ekspert ds. Finansów",
      date: "1 marca 2024",
      category: "Analizy",
      readTime: "6 min"
    },
    {
      id: 6,
      title: "Historia podobnych przejść w Polsce",
      excerpt: "Przegląd innych miejscowości w Polsce, które przeszły proces włączenia do większych miast. Lekcje wyciągnięte z ich doświadczeń.",
      author: "Dr Jan Kowalski",
      date: "25 lutego 2024",
      category: "Historia",
      readTime: "7 min"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Spotkania": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Dokumenty": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "FAQ": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Konsultacje": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Analizy": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Historia": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="news" className="py-24 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Aktualności i wiadomości
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bądź na bieżąco z najnowszymi informacjami dotyczącymi inicjatywy. 
              Sprawdzaj regularne aktualizacje i raporty z postępów.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {articles.map((article) => (
              <Card key={article.id} className="p-6 shadow-card border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                <div className="space-y-4">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      Czytaj więcej
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8 shadow-card bg-primary/5 border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Bądź na bieżąco
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zapisz się do naszego newslettera, aby otrzymywać najnowsze informacje 
                o inicjatywie bezpośrednio na swoją skrzynkę e-mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Twój adres e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-hero-gradient hover:opacity-90 transition-opacity px-8">
                  Zapisz się
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Wysyłamy maksymalnie 2-3 wiadomości miesięcznie. Możesz zrezygnować w każdej chwili.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;