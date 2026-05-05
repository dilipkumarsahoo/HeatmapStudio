import { TrendingUp, Clock, Zap, BarChart3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "45%", label: "Faster task completion", color: "bg-brand-pink/40" },
  { icon: Clock, value: "120 hrs", label: "Average time saved per year", color: "bg-brand-yellow/50" },
  { icon: Zap, value: "15X", label: "Workflow acceleration", color: "bg-brand-purple/50" },
  { icon: BarChart3, value: "98%", label: "User satisfaction rate", color: "bg-brand-green/40" },
];

const Metrics = () => (
  <section className="bg-background py-20">
    <div className="max-w-[1100px] mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
      <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-5 font-bold">
        The Industry Standard
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
        Achieving Superior<br /><span className="text-foreground/30 italic">Efficiency Marks</span>
      </h2>
      <div className="mt-5 inline-flex flex-col sm:flex-row items-center gap-2 bg-foreground text-background text-[10px] sm:text-xs px-4 py-2 rounded-2xl sm:rounded-full max-w-full">
        <div className="flex items-center gap-2">
          <span className="bg-brand-yellow text-foreground text-[9px] font-bold px-1.5 py-0.5 rounded">★</span>
          <span>HeatMap Studio is ranked <strong>#1</strong> personal toolkit</span>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.value} className="border border-foreground/10 rounded-2xl p-6 text-left bg-background">
            <div className={`w-9 h-9 rounded-lg ${s.color} flex items-center justify-center mb-3`}>
              <s.icon className="w-4 h-4 text-foreground" />
            </div>
            <p className="font-display text-3xl font-semibold text-foreground">{s.value}</p>
            <p className="text-foreground/60 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
