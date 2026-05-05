import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustLogos from "@/components/landing/TrustLogos";
import FeatureCards from "@/components/landing/FeatureCards";
import Metrics from "@/components/landing/Metrics";
import FeatureHighlight from "@/components/landing/FeatureHighlight";

import Blogs from "@/components/landing/Blogs";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <TrustLogos />
      <FeatureCards />
      <Metrics />
      <FeatureHighlight />
      <Blogs />
      <Footer />
    </main>
  );
};

export default Index;
