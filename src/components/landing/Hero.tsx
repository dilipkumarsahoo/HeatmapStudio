// import { Play, Send, ShoppingBag } from "lucide-react";
import heroImg from "@/assets/hero-livestream.jpg";
import { useEffect, useState } from "react";
import {
  Play,
  Send,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/images/focus-preview.png",
    "/images/typekaro-preview.png",
    "/images/qrise-preview.png",
    "/images/drdoc-preview.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-surface pt-24 md:pt-32">
      <div className="max-w-[1200px] mx-auto px-6 pb-20 text-center">
        <span className="inline-block text-[11px] tracking-wider uppercase border border-foreground/20 rounded-full px-4 py-1.5 text-foreground/70 mb-8 font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
          Unified Productivity Suite
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] font-medium text-foreground max-w-4xl mx-auto tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Your entire digital workflow,{" "}
          <span className="text-foreground/40 italic">unified.</span>
        </h1>
        <p className="text-foreground/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          A cohesive ecosystem of essential productivity tools designed to help
          you build, organize, and manage your life with precision—all in one
          place.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <button className="w-full sm:w-auto bg-foreground text-background text-sm font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform">
            Get Started For Free
          </button>
          <button className="w-full sm:w-auto bg-background border border-foreground/15 text-foreground text-sm font-bold px-8 py-4 rounded-full hover:bg-foreground/5 transition-colors">
            See All Tools
          </button>
        </div> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Link
            to="/products"
            className="w-full sm:w-auto bg-foreground text-background text-sm font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-center"
          >
            Get Started For Free
          </Link>

          <a
            href="#products"
            className="w-full sm:w-auto bg-background border border-foreground/15 text-foreground text-sm font-bold px-8 py-4 rounded-full hover:bg-foreground/5 transition-colors text-center"
          >
            See All Tools
          </a>
        </div>

        {/* Mock player */}
        <div className="relative mt-16 max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="relative rounded-2xl overflow-hidden bg-foreground shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-foreground border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-[11px] text-white/70">
                <span>HeatMap Studios</span>
                <span className="bg-brand-green text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                  ACTIVE
                </span>
                <span>v2.4</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs">
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="uppercase">Workspace</span>
              </div>
            </div>
            <div className="grid grid-cols-1  bg-foreground">
              <div className="relative aspect-video md:aspect-[16/10] overflow-hidden">
                <img
                  src={images[currentImage]}
                  alt="Live shopping stream"
                  className="w-full h-full object-cover transition-all duration-500"
                  width={1024}
                  height={768}
                />

                {/* Previous */}
                <button
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1,
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentImage((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`transition-all rounded-full ${
                        currentImage === index
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* <div className="relative aspect-video md:aspect-[16/10]">
                <img
                  src={heroImg}
                  alt="Live shopping stream"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={768}
                />
              </div> */}
              {/* <div className="bg-[#1a1a1a] flex flex-col border-t md:border-t-0 md:border-l border-white/10">
                <div className="p-4 border-b border-white/10">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider mb-3">
                    Live Feed
                  </p>
                  <div className="grid grid-cols-4 md:grid-cols-2 gap-2">
                    <div className="aspect-square rounded-md bg-brand-pink/20 border border-brand-pink/30" />
                    <div className="aspect-square rounded-md bg-brand-yellow/20 border border-brand-yellow/30" />
                    <div className="aspect-square rounded-md bg-brand-purple/20 border border-brand-purple/30" />
                    <div className="aspect-square rounded-md bg-brand-green/20 border border-brand-green/30" />
                  </div>
                </div>
                <div className="p-4 flex-1 hidden md:block">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider mb-3">
                    Community
                  </p>
                  <div className="space-y-3">
                    {[
                      "Amazing product! 😍",
                      "How much is shipping?",
                      "Just bought 2! ❤️",
                    ].map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                        <p className="text-white/70 text-[10px] leading-tight">
                          {m}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 border-t border-white/10 flex items-center gap-2">
                  <div className="flex-1 bg-white/5 rounded-full px-3 py-2 text-[10px] text-white/40">
                    Type a message...
                  </div>
                  <Send className="w-3.5 h-3.5 text-white/40" />
                </div>
              </div> */}
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -left-2 top-12 sm:-left-4 sm:top-24 md:-left-12 md:top-32 bg-brand-yellow rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg rotate-[-6deg] z-20">
            <p className="text-[8px] sm:text-[9px] font-medium text-foreground/70">
              UP TO
            </p>
            <p className="font-display text-xl sm:text-2xl font-bold text-foreground leading-none">
              32%
            </p>
            <p className="text-[9px] sm:text-[10px] font-medium text-foreground/70 mt-1">
              Uplift
            </p>
          </div>
          <div className="absolute -right-2 bottom-12 sm:-right-4 sm:bottom-24 md:-right-10 bg-background rounded-full p-3 sm:p-4 shadow-lg z-20">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-foreground fill-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
