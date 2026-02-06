import { Code, Brain, Lightning, Stack } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    icon: Code,
    title: "TypeScript & React Development",
    description:
      "Full-stack applications built with TypeScript, React, Next.js, and Node.js. Clean, type-safe code from the ground up.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Custom AI integrations, LLM-powered features, intelligent automation, and data pipeline development.",
  },
  {
    icon: Lightning,
    title: "Automation & DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, workflow automation, and cloud deployment strategies.",
  },
  {
    icon: Stack,
    title: "Full-Stack Development",
    description:
      "End-to-end product development from database design to API architecture to polished frontends.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-400 border-4 border-black text-xs font-bold uppercase tracking-widest mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            Services Built for{" "}
            <span className="relative inline-block">
              Modern Teams
              <span className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 bg-yellow-400 -z-10" />
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="brutal-card brutal-hover group"
            >
              <div className="w-14 h-14 bg-yellow-400 border-4 border-black flex items-center justify-center mb-6 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform">
                <service.icon size={28} weight="bold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-black/60 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
