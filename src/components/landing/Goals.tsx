import { Checks, Handshake, Timer } from "@phosphor-icons/react/dist/ssr";

const goals = [
  {
    icon: Checks,
    title: "Production-Ready Code",
    description:
      "Every line of code is written to production standards. Type-safe, tested, and documented. No prototypes that need to be rewritten.",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement",
    description:
      "Whether it's a one-off project, ongoing partnership, or team augmentation — we adapt to how you work, not the other way around.",
  },
  {
    icon: Timer,
    title: "On-Time Delivery",
    description:
      "We set realistic timelines and hit them. Regular check-ins, transparent progress updates, and no last-minute surprises.",
  },
];

export function Goals() {
  return (
    <section id="goals" className="py-20 sm:py-28 bg-black border-b-4 border-yellow-400">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400 border-4 border-yellow-400 text-black text-xs font-bold uppercase tracking-widest mb-6">
            What You Get
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            We Help You{" "}
            <span className="text-yellow-400">Ship Faster</span>
          </h2>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="brutal-card-dark brutal-hover"
              style={{ boxShadow: "4px 4px 0 0 #facc15" }}
            >
              <div className="w-14 h-14 bg-yellow-400 border-4 border-yellow-400 flex items-center justify-center mb-6">
                <goal.icon size={28} weight="bold" className="text-black" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-white">
                {goal.title}
              </h3>
              <p className="text-white/60 font-medium leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
