"use client";

import { FadeUp, Stagger, StaggerItem } from "./Motion";

const signs = [
  { name: "Body temperature", note: "Core heat regulation" },
  { name: "Pulse", note: "Heart rate" },
  { name: "Respiratory rate", note: "Breathing" },
  { name: "Blood pressure", note: "Circulation" },
  { name: "Oxygen saturation", note: "Blood oxygen" },
];

export function VitalSignsSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="max-w-2xl">
          <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
            Vital signs
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-thm-muted sm:text-base">
            Vital signs are critical measurements of the body’s most basic
            functions. The core vital signs monitored in healthcare include
            body temperature, pulse (heart rate), respiratory rate, blood
            pressure, and oxygen saturation. THM trains caregivers thoroughly
            in taking vital signs.
          </p>
        </FadeUp>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {signs.map((s) => (
            <StaggerItem key={s.name}>
              <div className="h-full border-l-4 border-thm-gold bg-thm-cream px-4 py-4 sm:px-5">
                <h3 className="font-poppins text-[15px] font-bold text-thm-ink">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-thm-muted">{s.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
