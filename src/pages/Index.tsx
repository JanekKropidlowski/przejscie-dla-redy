import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProsConsSection from "@/components/ProsConsSection";
import FAQSection from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";
import VoteSection from "@/components/VoteSection";
import ProposalsSection from "@/components/ProposalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProsConsSection />
      <FAQSection />
      <NewsSection />
      <VoteSection />
      <ProposalsSection />
      <Footer />
    </main>
  );
};

export default Index;
