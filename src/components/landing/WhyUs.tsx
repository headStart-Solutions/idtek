import { UsersFour, Robot, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const reasons = [
  {
    icon: UsersFour,
    title: "Senior Engineers Only",
    description:
      "No juniors learning on your dime. Every team member has 5+ years of production experience across startups and enterprises.",
  },
  {
    icon: Robot,
    title: "AI-Native Development",
    description:
      "We integrate AI into our own workflow and yours. From copilot-enhanced development to building AI-powered product features.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description:
      "Clear communication, weekly demos, and no disappearing acts. We treat your project like our own product.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400 border-4 border-black text-xs font-bold uppercase tracking-widest mb-6">
            Why IdTek
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Why Teams{" "}
            <span className="relative inline-block">
              Choose Us
              <span className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 bg-yellow-400 -z-10" />
            </span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="brutal-card brutal-hover group"
            >
              <div className="w-14 h-14 bg-yellow-400 border-4 border-black flex items-center justify-center mb-6 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                <reason.icon size={28} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
                {reason.title}
              </h3>
              <p className="text-black/60 font-medium leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
