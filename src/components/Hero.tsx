import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MapPin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [supportCount, setSupportCount] = useState(247);

  // Simulate real-time counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setSupportCount(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-soft-gradient pt-20 lg:pt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Inicjatywa lokalna</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Ręków Górny
                <span className="block text-primary">do miasta Reda</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Dołącz do inicjatywy mieszkańców Rękowa Górnego dotyczącej przejścia 
                do miasta Reda. Twój głos ma znaczenie dla przyszłości naszej społeczności.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-all duration-300 shadow-soft text-lg px-8 py-6"
              >
                Zagłosuj teraz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                Dowiedz się więcej
              </Button>
            </div>
          </div>

          {/* Right Column - Counter Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 lg:p-12 shadow-card bg-card/50 backdrop-blur-sm border-primary/20 max-w-md w-full">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Aktualny stan poparcia
                  </h3>
                  <p className="text-muted-foreground">
                    Liczba osób popierających inicjatywę
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-5xl lg:text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                    {supportCount.toLocaleString()}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    mieszkańców wyraziło poparcie
                  </div>

                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-hero-gradient transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min((supportCount / 500) * 100, 100)}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Cel: 500 głosów poparcia
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;