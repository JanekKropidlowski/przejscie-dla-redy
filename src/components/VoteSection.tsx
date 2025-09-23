import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vote, Mail, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VoteSection = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleVoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedOption || !email) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: "Proszę wybrać opcję głosowania i podać adres e-mail.",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Głos zapisany!",
        description: "Na Twój adres e-mail zostanie wysłany link weryfikacyjny.",
      });
      setIsSubmitting(false);
      setSelectedOption(null);
      setEmail("");
    }, 2000);
  };

  const voteOptions = [
    {
      id: "za",
      label: "TAK - Popieram przejście",
      description: "Jestem za włączeniem Rękowa Górnego do miasta Reda",
      color: "border-green-300 bg-green-50 dark:bg-green-950 dark:border-green-700",
      selectedColor: "border-green-500 bg-green-100 dark:bg-green-900"
    },
    {
      id: "przeciw",
      label: "NIE - Jestem przeciwny",
      description: "Nie popieram przejścia do miasta Reda",
      color: "border-red-300 bg-red-50 dark:bg-red-950 dark:border-red-700",
      selectedColor: "border-red-500 bg-red-100 dark:bg-red-900"
    },
    {
      id: "niezdecydowany",
      label: "NIEZDECYDOWANY",
      description: "Potrzebuję więcej informacji przed podjęciem decyzji",
      color: "border-yellow-300 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-700",
      selectedColor: "border-yellow-500 bg-yellow-100 dark:bg-yellow-900"
    }
  ];

  return (
    <section id="vote" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
              <Vote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Wyraź swoją opinię
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Twój głos ma znaczenie! Weź udział w głosowaniu i pomoż nam zrozumieć 
              stanowisko mieszkańców Rękowa Górnego.
            </p>
          </div>

          {/* Voting Form */}
          <Card className="p-8 shadow-card border-primary/20">
            <form onSubmit={handleVoteSubmit} className="space-y-8">
              {/* Vote Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Czy popierasz przejście Rękowa Górnego do miasta Reda?
                </h3>
                
                {voteOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      selectedOption === option.id 
                        ? option.selectedColor 
                        : option.color
                    } ${selectedOption === option.id ? 'shadow-lg' : 'hover:shadow-md'}`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-6 h-6 mt-0.5">
                        {selectedOption === option.id ? (
                          <CheckCircle className="w-6 h-6 text-primary" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-muted-foreground rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">
                          {option.label}
                        </h4>
                        <p className="text-muted-foreground mt-1">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Email Input */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Adres e-mail do weryfikacji
                </h3>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj.email@example.com"
                    className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <p className="text-sm text-muted-foreground flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Na podany adres e-mail zostanie wysłany link weryfikacyjny. 
                    Głos zostanie zaliczony dopiero po kliknięciu w link.
                  </span>
                </p>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting || !selectedOption || !email}
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Zapisywanie głosu...
                    </>
                  ) : (
                    <>
                      <Vote className="w-5 h-5 mr-2" />
                      Oddaj głos
                    </>
                  )}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Głosowanie jest anonimowe. Adres e-mail służy tylko do weryfikacji i nie będzie udostępniany.
                </p>
              </div>
            </form>
          </Card>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 shadow-card bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <div className="space-y-3">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Informacja
                </Badge>
                <h4 className="font-semibold text-foreground">
                  To nie jest oficjalne referendum
                </h4>
                <p className="text-sm text-muted-foreground">
                  To głosowanie ma charakter sondażowy i służy do zbadania opinii mieszkańców. 
                  Oficjalne referendum odbędzie się w późniejszym terminie.
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
              <div className="space-y-3">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Bezpieczeństwo
                </Badge>
                <h4 className="font-semibold text-foreground">
                  Ochrona danych osobowych
                </h4>
                <p className="text-sm text-muted-foreground">
                  Wszystkie dane są szyfrowane i chronione zgodnie z RODO. 
                  Adres e-mail nie będzie wykorzystywany do innych celów.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoteSection;