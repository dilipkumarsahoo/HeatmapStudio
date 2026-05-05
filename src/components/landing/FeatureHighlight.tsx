import { useState } from "react";

const tabs = [
  "Resumes",
  "QRise",
  "Pdfllo",
  "Expense Tracking",
  "Cloud Sync",
  "Privacy",
];

const tabContent = {
  "Resumes": {
    title: "Create professional resumes in minutes.",
    desc: "Build ATS-friendly resumes with modern templates.",
  },
  "QRise": {
    title: "Generate smart QRise instantly.",
    desc: "Share links, contact info, and more with ease.",
  },
  "Pdfllo": {
    title: "Visualize your ideas clearly.",
    desc: "Organize thoughts with intuitive mind maps.",
  },
  "Expense Tracking": {
    title: "Track your spending effortlessly.",
    desc: "Stay on top of your finances with smart insights.",
  },
  "Cloud Sync": {
    title: "Everything is synced across devices.",
    desc: "Access your data anytime, anywhere securely.",
  },
  "Privacy": {
    title: "Your data stays yours.",
    desc: "We use end-to-end encryption for full privacy.",
  },
};

const FeatureHighlight = () => {
  const [activeTab, setActiveTab] = useState("Resumes");

  return (
    <section className="bg-brand-pink/60 py-20">
      <div className="max-w-[1100px] mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          One toolkit for your<br />
          <span className="text-foreground/40 italic">entire digital life.</span>
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap text-xs font-medium px-4 py-2 rounded-full border transition shrink-0 ${activeTab === tab
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
          <div className="relative aspect-[4/5] max-w-[280px] mx-auto rounded-2xl bg-slate-50 border p-6 flex flex-col justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin" />
            </div>
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
              <button className="bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full">
                View Live Demo
              </button>
              <button className="border border-foreground/20 text-foreground text-sm font-medium px-5 py-2.5 rounded-full">
                Get Started — For Free!
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;