import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Users, FileText } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      label: "Mieszkańców",
      value: "1,240",
      description: "w Rękowie Górnym"
    },
    {
      icon: Calendar,
      label: "Dni",
      value: "45",
      description: "od rozpoczęcia inicjatywy"
    },
    {
      icon: FileText,
      label: "Dokumentów",
      value: "12",
      description: "przygotowanych"
    },
    {
      icon: MapPin,
      label: "Km",
      value: "3.2",
      description: "do centrum Redy"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              O naszej inicjatywie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poznaj szczegóły dotyczące procesu przejścia Rękowa Górnego do miasta Reda 
              oraz dlaczego ta zmiana jest ważna dla naszej społeczności.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center shadow-card border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-8 shadow-card border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Dlaczego Reda?
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Lepszy dostęp do usług publicznych i komunikacji miejskiej</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Zwiększone możliwości rozwoju infrastruktury</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Większe środki na inwestycje lokalne</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Zachowanie tożsamości lokalnej przy lepszym zarządzaniu</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-8 shadow-card border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Proces przejścia
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Zbieranie poparcia</div>
                      <div className="text-sm text-muted-foreground">Minimum 500 podpisów mieszkańców</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Konsultacje prawne</div>
                      <div className="text-sm text-muted-foreground">Przygotowanie dokumentacji</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Referendum lokalne</div>
                      <div className="text-sm text-muted-foreground">Głosowanie wszystkich mieszkańców</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;