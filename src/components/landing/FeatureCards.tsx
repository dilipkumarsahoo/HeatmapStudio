import { Play, ShoppingBag, Instagram, Youtube, Facebook, ChevronDown } from "lucide-react";
import featureChat from "@/assets/feature-chat.jpg";

interface FeatureCardsProps {
  showTitle?: boolean;
}

const FeatureCards = ({ showTitle = true }: FeatureCardsProps) => {
  return (
    <section className="bg-background py-20">
      {showTitle && (
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-20">
          <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-5 font-bold">
            High-Fidelity Tools
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-medium text-foreground tracking-tight max-w-3xl mx-auto leading-[0.95]">
            A powerful suite for every<br /><span className="text-foreground/30 italic">professional need.</span>
          </h2>
        </div>
      )}

      <div className="max-w-[1200px] mx-auto px-6 mb-5 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="bg-[#58A37C] rounded-[40px] px-10 py-16 md:p-20 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
          {/* Visual column */}
          <div className="relative">
            <div className="bg-white rounded-[32px] p-6 shadow-2xl relative z-10">
              {/* Browser top */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-black/10" />
                <div className="w-2 h-2 rounded-full bg-black/10" />
                <div className="w-2 h-2 rounded-full bg-black/10" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] rounded-2xl bg-slate-50 border border-slate-100 flex flex-col p-4">
                  <div className="w-8 h-1 bg-slate-200 rounded mb-2" />
                  <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                  <div className="w-full h-2 bg-slate-100 rounded mb-1" />
                  <div className="w-2/3 h-2 bg-slate-100 rounded mb-4" />
                  <div className="w-full h-24 bg-slate-200/50 rounded" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl bg-foreground overflow-hidden p-4 shadow-inner">
                  <p className="text-[10px] text-white/40 mb-2 uppercase tracking-tight">Preview Mode</p>
                  <div className="h-full w-full bg-white/5 rounded-lg" />
                </div>
              </div>

              {/* Popup card */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl w-48 sm:w-56 z-20 border border-foreground/5 scale-90 sm:scale-100 origin-bottom-right">
                <h4 className="text-sm font-bold text-[#111] mb-1">ATS Check</h4>
                <p className="text-[10px] text-black/50 leading-relaxed mb-4">98% compatibility with modern HR software.</p>
                <button className="w-full bg-[#EFFF94] text-black text-[10px] font-bold py-2.5 rounded-xl hover:bg-[#deff4d] transition-colors flex items-center justify-center gap-1">
                  DOWNLOAD PDF
                </button>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="text-white">
            <span className="inline-block text-[10px] uppercase font-bold tracking-widest border border-white/20 rounded-full px-4 py-1.5 mb-6">
              PRO RESUME BUILDER
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-medium leading-[1.1] mb-6 tracking-tight">
              Land your dream role <br /> with precision.
            </h3>
            <p className="text-lg text-white/70 max-w-sm leading-relaxed">
              Craft professional, ATS-ready resumes in minutes. Focus on your achievements while we handle the design to make you stand out.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto  px-6 space-y-6">
        {/* Yellow card */}
        <div className="bg-brand-yellow rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div>
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Inkdrop</p>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight">
              Your brain's second<br />home.
            </h3>
            <p className="text-foreground/70 text-sm max-w-md">
              Capture thoughts, draft projects, and organize ideas as they happen. A minimalist interface that removes the noise, allowing you to focus on what matters most.
            </p>
          </div>
          <div className="relative">
            <div className="bg-background rounded-2xl shadow-xl overflow-hidden aspect-[4/3] max-w-[320px] ml-auto relative p-6">
              <div className="space-y-3">
                <div className="h-2 bg-slate-100 rounded w-full" />
                <div className="h-2 bg-slate-100 rounded w-full" />
                <div className="h-2 bg-slate-100 rounded w-2/3" />
                <div className="h-10" />
                <div className="h-2 bg-slate-50 rounded w-full" />
                <div className="h-2 bg-slate-50 rounded w-5/6" />
              </div>
            </div>
            <div className="absolute -left-4 top-8 bg-foreground rounded-2xl p-4 w-48 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                <span className="text-white/60 text-[10px] uppercase tracking-wide">AUTOSAVE ACTIVE</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-white/20 rounded w-full" />
                <div className="h-1 bg-white/10 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Purple card */}
        <div className="bg-brand-purple rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="bg-background rounded-2xl p-6 shadow-xl max-w-sm">
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <p className="font-bold text-foreground mb-1 text-sm tracking-tight">QR Studio</p>
            <p className="text-foreground/50 text-xs mb-6">Customize your high-res dynamic QR</p>

            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-foreground rounded-xl p-2 flex flex-wrap gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`w-[22px] h-[22px] rounded-sm ${i % 3 === 0 ? 'bg-white/10' : 'bg-transparent'}`} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg" /> */}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Foreground", color: "bg-black" },
                { label: "Background", color: "bg-white border" },
                { label: "Scan Mode", color: "bg-brand-green" },
              ].map((p) => (
                <div key={p.label} className="flex items-center justify-between border border-foreground/10 rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2 text-foreground text-[10px] font-bold uppercase tracking-wider">
                    <div className={`w-3 h-3 rounded-full ${p.color}`} />
                    <span>{p.label}</span>
                  </div>
                  <ChevronDown className="w-3 h-3 opacity-30" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">QRise</p>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4 leading-tight">
              Connect physical and<br />digital worlds.
            </h3>
            <p className="text-foreground/70 text-sm max-w-md leading-relaxed">
              Create custom, high-resolution QR codes for websites, contacts, or Wi-Fi. Personalize styles to match your brand while ensuring lightning-fast scans.
            </p>
            <div className="mt-8">
              <button className="bg-foreground text-background text-xs font-bold px-6 py-3 rounded-full">
                Generate Yours Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
