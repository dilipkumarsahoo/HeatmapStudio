import { useState } from "react";
import { Link } from "react-router-dom";
const tabs = ["QRise", "Piko", "TypeKaro", "Inkdrop", "Drdoc", "PennyPilot"];

const tabContent = {
  QRise: {
    title: "Generate stylish QR codes instantly.",
    desc: "Create QR codes for websites, contacts, Wi-Fi, social profiles, and more.",
    image: "/images/qrise-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://qrise.heatmapstudios.com/",
  },

  Piko: {
    title: "Stay Focused, Finish Faster.",
    desc: "Boost concentration using Pomodoro sessions, distraction blocking, and insightful productivity reports.",
    image: "/images/focus-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://piko.heatmapstudios.com/",
  },

  TypeKaro: {
    title: "Practice typing and improve your speed.",
    desc: "Boost your typing accuracy and WPM with real-time statistics and engaging practice sessions.",
    image: "/images/typekaro-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://typekaro.heatmapstudios.com/",
  },

  Inkdrop: {
    title: "Your brain's second home.",
    desc: "Capture thoughts, draft projects, and organize ideas as they happen.",
    image: "/images/inkdrop-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://inkdrop.heatmapstudios.com/",
  },

  Drdoc: {
    title: "Scan, Organize & Manage Documents.",
    desc: "Transform paper documents into searchable PDFs with built-in OCR.",
    image: "/images/drdoc-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://drdoc.heatmapstudios.com/",
  },

  PennyPilot: {
    title: "Track expenses and manage your budget.",
    desc: "Monitor income, expenses, savings, and spending habits with clear financial insights.",
    image: "/images/pennypilot-preview.png",
    buttonText: "Learn More",
    buttonLink: "https://pennypilot.heatmapstudios.com/",
  },
};

const FeatureHighlight = () => {
  const [activeTab, setActiveTab] = useState("QRise");

  return (
    <section className="bg-brand-pink/60 py-20">
      <div className="max-w-[1100px] mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          One toolkit for your
          <br />
          <span className="text-foreground/40 italic">
            entire digital life.
          </span>
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-xs font-medium px-4 py-2 rounded-full border transition shrink-0 ${
                activeTab === tab
                  ? "bg-foreground text-background"
                  : "bg-background/40 text-foreground/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 bg-background rounded-3xl p-6 md:p-10 grid md:grid-cols-[1fr_1fr] gap-8 items-center text-left shadow-sm">
          {/* Left (you can later swap visuals per tab) */}
          <div className="relative aspect-[4/5] max-w-[280px] mx-auto rounded-2xl bg-slate-50 border overflow-hidden">
            <img
              src={tabContent[activeTab].image}
              alt={activeTab}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Right dynamic text */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-foreground/60 text-sm mb-6 max-w-sm">
              {tabContent[activeTab].desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={tabContent[activeTab].buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full transition hover:opacity-90"
              >
                {tabContent[activeTab].buttonText}
              </a>
              {/* <button className="border border-foreground/20 text-foreground text-sm font-medium px-5 py-2.5 rounded-full">
                Get Started — For Free!
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
