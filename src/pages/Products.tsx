import Header from "@/components/landing/Header";
import FeatureCards from "@/components/landing/FeatureCards";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/5 blur-[120px] rounded-full" />
      </div>

      <div className="pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-6 font-bold">
            The Full Suite
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium text-foreground tracking-tight max-w-4xl mx-auto leading-[0.95] mb-8">
            Precision tools for <br />
            <span className="text-foreground/30 italic">exceptional results.</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Our ecosystem is designed to remove friction from your workflow, allowing you to focus on what truly matters: your growth.
          </p>
        </div>
        
        <div className="animate-in fade-in duration-1000 delay-300">
          <FeatureCards showTitle={false} />
        </div>
      </div>

      {/* Quick Stats or CTA Section can go here if needed */}
      <section className="bg-foreground py-20 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-white font-display text-3xl md:text-5xl font-medium mb-12">Join 10k+ professionals using HeatMap Studio</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "Active Users", value: "10,000+" },
              { label: "Productivity Boost", value: "32%" },
              { label: "Tools Integrated", value: "24/7" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-brand-green font-display text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
