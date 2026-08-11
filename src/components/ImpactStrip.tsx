import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { label: "Graduates since 2023", value: 150, suffix: "+", display: null },
  { label: "Curriculum standard", value: null, suffix: "", display: "NITA" },
  { label: "Counties served", value: 2, suffix: "", display: null },
  { label: "Year registered", value: 2023, suffix: "", display: null },
];

export function ImpactStrip() {
  return (
    <section className="border-y-4 border-thm-gold bg-thm-purple py-14 text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-poppins text-3xl font-bold text-thm-gold sm:text-4xl">
                {stat.display ?? (
                  <AnimatedCounter to={stat.value!} suffix={stat.suffix} />
                )}
              </p>
              <p className="mt-1.5 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
