import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Users, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Inicjatywa": [
      { name: "O nas", href: "#about" },
      { name: "Za i przeciw", href: "#pros-cons" },
      { name: "FAQ", href: "#faq" },
      { name: "Głosowanie", href: "#vote" }
    ],
    "Informacje": [
      { name: "Aktualności", href: "#news" },
      { name: "Propozycje", href: "#proposals" },
      { name: "Dokumenty", href: "#documents" },
      { name: "Kontakt", href: "#contact" }
    ],
    "Prawne": [
      { name: "Polityka prywatności", href: "#privacy" },
      { name: "Regulamin", href: "#terms" },
      { name: "RODO", href: "#gdpr" },
      { name: "Cookies", href: "#cookies" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg"></div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Ręków Górny → Reda
                </h3>
                <p className="text-sm text-muted-foreground">
                  Inicjatywa mieszkańców
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Wspólnie budujemy przyszłość naszej społeczności. Dołącz do inicjatywy 
              i weź udział w kształtowaniu zmian.
            </p>

            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium text-foreground">247 mieszkańców</div>
                  <div className="text-xs text-muted-foreground">już nas popiera</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-12 p-8 shadow-card border-primary/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <h5 className="font-medium text-foreground mb-1">Adres</h5>
                <p className="text-sm text-muted-foreground">
                  Urząd Gminy Kosakowo<br />
                  ul. Grunwaldzka 78<br />
                  84-240 Reda
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <h5 className="font-medium text-foreground mb-1">E-mail</h5>
                <p className="text-sm text-muted-foreground">
                  info@rekowgorny-reda.pl<br />
                  kontakt@rekowgorny-reda.pl
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <h5 className="font-medium text-foreground mb-1">Telefon</h5>
                <p className="text-sm text-muted-foreground">
                  +48 123 456 789<br />
                  Pon-Pt: 8:00-16:00
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Inicjatywa Mieszkańców Rękowa Górnego. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Ostatnia aktualizacja: 15 marca 2024</span>
              <span>•</span>
              <span>Wersja 1.2</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;