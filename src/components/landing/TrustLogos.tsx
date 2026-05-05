const logos = [
  "TechNova",
  "CodeSphere",
  "InfiSoft",
  "ByteForge",
  "CloudNexa",
  "DevMatrix",
  "NextGen Labs",
  "PixelStack",
  "DataPulse",
  "CyberNest",
  "AlgoWorks",
  "FusionSoft",
  "CoreLogic Systems",
  "ZenCode",
  "QuantumApps",
  "SkyNetix",
  "LogicLoop",
  "HexaTech",
  "BlueGrid",
  "Vertex Systems"
]

const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
const secondRow = logos.slice(Math.ceil(logos.length / 2));

const TrustLogos = () => (
  <section className="bg-background py-14 overflow-hidden animate-in fade-in duration-1000">
    <div className="max-w-[1100px] mx-auto px-6 space-y-6">

      {/* Row 1 → LEFT */}
      <div className="flex w-max animate-scroll-left gap-10 opacity-60">
        {[...firstRow, ...firstRow].map((l, i) => (
          <span key={i} className="whitespace-nowrap font-display text-lg md:text-xl font-semibold text-foreground/50 tracking-wide">
            {l}
          </span>
        ))}
      </div>

      {/* Row 2 → RIGHT */}
      <div className="flex w-max animate-scroll-right gap-10 opacity-60">
        {[...secondRow, ...secondRow].map((l, i) => (
          <span key={i} className="whitespace-nowrap font-display text-lg md:text-xl font-semibold text-foreground/50 tracking-wide">
            {l}
          </span>
        ))}
      </div>

    </div>
  </section>
);

export default TrustLogos;
