import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useEffect } from "react";
import { Users, Target, Rocket, Award } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-pink/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-6 font-bold animate-in fade-in slide-in-from-bottom-4 duration-700">
            Our Story
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium text-foreground tracking-tight max-w-4xl mx-auto leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Building the future of <br />
            <span className="text-foreground/30 italic">digital productivity.</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            HeatMap Studio was founded with a simple mission: to create a unified ecosystem of tools that empower individuals to reach their full potential without the clutter.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Years of Innovation", value: "5+" },
            { label: "Global Users", value: "500k" },
            { label: "Tools Built", value: "12" },
            { label: "Team Members", value: "45" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-sm text-foreground/50 uppercase tracking-widest font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Values that drive us</h2>
            <p className="text-foreground/60 max-w-xl mx-auto">We believe in quality over quantity, precision over speed, and user experience above all else.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centric Design",
                desc: "Every pixel we place and every line of code we write starts with the user's needs in mind.",
                icon: <Users className="w-6 h-6" />,
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                title: "Uncompromising Quality",
                desc: "We don't ship until it's perfect. Our tools are built to last and perform under pressure.",
                icon: <Award className="w-6 h-6" />,
                color: "bg-brand-purple/10 text-brand-purple"
              },
              {
                title: "Relentless Innovation",
                desc: "The digital landscape is always changing, and we're always one step ahead.",
                icon: <Rocket className="w-6 h-6" />,
                color: "bg-brand-pink/10 text-brand-pink"
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[32px] border border-foreground/5 hover:border-foreground/10 transition-all hover:shadow-xl group">
                <div className={`w-12 h-12 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
