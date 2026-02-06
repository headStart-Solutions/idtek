const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
  "Prisma",
  "Redis",
  "OpenAI",
  "Vercel",
  "GitHub Actions",
];

export function TechStack() {
  return (
    <section className="py-16 sm:py-20 bg-yellow-400 border-b-4 border-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-10">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-center">
          Technologies We Use
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center mx-3 px-6 py-3 bg-black text-yellow-400 border-4 border-black text-sm sm:text-base font-bold uppercase tracking-wider brutal-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
