import { Award, Users, MapPin, Calendar } from "lucide-react";

export function ImpactStrip() {
  const stats = [
    {
      label: "Graduates Trained",
      value: "150+",
      sub: "Active in healthcare & homecare",
      icon: Users,
    },
    {
      label: "Curriculum Standard",
      value: "NITA",
      sub: "National Industrial Training Authority",
      icon: Award,
    },
    {
      label: "Counties of Operation",
      value: "2",
      sub: "Nairobi & Kisumu Counties",
      icon: MapPin,
    },
    {
      label: "Established",
      value: "2023",
      sub: "Growing rapidly across East Africa",
      icon: Calendar,
    },
  ];

  return (
    <section className="bg-thm-purple py-12 border-y-4 border-thm-gold">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComp = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-5 p-4 rounded-2xl bg-thm-purple-dark border border-thm-purple/60"
              >
                <div className="h-14 w-14 rounded-xl bg-thm-gold text-thm-ink flex items-center justify-center shrink-0">
                  <IconComp className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-poppins text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-thm-gold">
                    {stat.label}
                  </p>
                  <p className="text-xs text-thm-cream/70 mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
