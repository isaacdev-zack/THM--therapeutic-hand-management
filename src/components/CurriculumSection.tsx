"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Stethoscope, HeartHandshake, ShieldAlert, Sparkles, Laptop } from "lucide-react";

type Category = "clinical" | "hygiene" | "equipment" | "monitoring" | "ict";

interface SkillGroup {
  id: Category;
  name: string;
  icon: typeof Stethoscope;
  skills: { name: string; detail: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "clinical",
    name: "Clinical Procedures & Care",
    icon: Stethoscope,
    skills: [
      { name: "Vital Signs Measurement", detail: "Taking blood pressure, temperature, pulse rate & respiration." },
      { name: "Catheter & Perineum Care", detail: "Sterile maintenance and daily hygiene for catheterized patients." },
      { name: "Tube Feeding (Gavage/NGT)", detail: "Safe enteral nutrition administration under nursing supervision." },
      { name: "Bedpan Administration", detail: "Assisting bedridden patients with elimination and comfort care." },
      { name: "Hot & Cold Therapy", detail: "Applying therapeutic heat compresses and cold ice packs safely." },
    ],
  },
  {
    id: "ict",
    name: "ICT & Digital Health Literacy",
    icon: Laptop,
    skills: [
      { name: "Electronic Health Records (EHR)", detail: "Digital patient vitals logging, medical charts, and record management." },
      { name: "Tele-Care & Remote Monitoring", detail: "Operating digital pulse oximeters, smart monitors, and video consultations." },
      { name: "Basic Computer & Productivity", detail: "Word processing, spreadsheet scheduling, and professional email dispatch." },
      { name: "Medication App Reminders", detail: "Setting digital alarm schedules and dosage tracking software." },
    ],
  },
  {
    id: "hygiene",
    name: "Patient Support & Personal Hygiene",
    icon: HeartHandshake,
    skills: [
      { name: "Bed Bath & Personal Grooming", detail: "Comprehensive patient bathing, nail care, hair washing, and oral hygiene." },
      { name: "Bed Making & Linen Change", detail: "Occupied and unoccupied bed technique maintaining sterile ergonomics." },
      { name: "Back Care & Pressure Massage", detail: "Preventing bedsores/decubitus ulcers through back rubs and positioning." },
      { name: "Positioning & Body Mechanics", detail: "Fowler's, lateral, and prone positioning for optimal patient recovery." },
      { name: "Wheelchair Transfer", detail: "Safe ergonomic patient transfer from bed to wheelchair and stretcher." },
    ],
  },
  {
    id: "equipment",
    name: "Safety & Equipment Management",
    icon: ShieldAlert,
    skills: [
      { name: "Hand Hygiene & Proper Gloving", detail: "Surgical and aseptic hand washing protocol to prevent cross-contamination." },
      { name: "Disinfection & Decontamination", detail: "Cleaning medical instruments and surface sanitation protocols." },
      { name: "Use of Assistive Devices & Comfort", detail: "Operating walkers, canes, crutches, egg-crate mattresses, and pillows." },
      { name: "Standard & Transmission Precautions", detail: "PPE usage (masks, gowns, shields) for airborne and contact isolation." },
      { name: "Proper Waste Management", detail: "Color-coded biomedical segregation of sharp, hazardous, and general waste." },
    ],
  },
  {
    id: "monitoring",
    name: "Diagnostic & Advanced Monitoring",
    icon: Sparkles,
    skills: [
      { name: "Blood Sugar Level Monitoring", detail: "Glucometer testing, recording capillary glucose readings, and reporting." },
      { name: "Oxygen Administration Support", detail: "Monitoring nasal cannulas, oxygen flowmeters, and pulse oximeter saturation." },
      { name: "Post-Stroke Recovery Support", detail: "Specialized rehabilitation assistance for paralyzed or post-surgery patients." },
      { name: "Child & Elderly Safeguarding", detail: "Specialized pediatric and geriatric safety, nutrition, and emotional care." },
    ],
  },
];

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<Category>("clinical");

  const currentGroup = skillGroups.find((g) => g.id === activeTab) || skillGroups[0];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-white text-thm-ink">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-[650px]">
            <span className="text-sm font-bold uppercase tracking-widest text-thm-purple">
              NITA Curriculum & Practical Labs
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-thm-ink mt-2">
              Master 20+ Practical Caregiving & ICT Skills
            </h2>
            <p className="mt-4 text-lg text-thm-muted">
              Our holistic curriculum combines classroom theory with mandatory ICT computer literacy and hospital clinical rotations under Registered Nurses.
            </p>
          </div>
          <div className="bg-thm-cream p-4 rounded-2xl border border-slate-200 shrink-0 shadow-sm">
            <p className="text-sm font-semibold text-thm-purple">Certificate in Caregiver II</p>
            <p className="text-xs text-thm-muted">Clinical & Digital Health Training</p>
          </div>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-slate-200 pb-4">
          {skillGroups.map((group) => {
            const IconComp = group.icon;
            const isActive = group.id === activeTab;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full font-poppins text-sm font-bold transition-all ${
                  isActive
                    ? "bg-thm-purple text-white shadow-md"
                    : "bg-thm-cream text-thm-ink hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <IconComp className={`h-4 w-4 ${isActive ? "text-thm-gold" : "text-thm-purple"}`} />
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentGroup.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-thm-cream border-2 border-slate-200 flex flex-col justify-between hover:border-thm-purple transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-thm-gold shrink-0" />
                  <h3 className="font-poppins text-lg font-bold text-thm-ink">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-sm text-thm-muted leading-relaxed">
                  {skill.detail}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-thm-purple flex items-center justify-between">
                <span>Practical Skill Unit</span>
                <span className="text-thm-gold font-bold">100% Certified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Practical ICT & Nursing Lab Visual Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-lg border-2 border-thm-purple/20 group">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
              alt="Students in practical ICT computer lab"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/90 via-thm-purple-deep/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-thm-gold px-3 py-1 text-xs font-bold text-thm-ink mb-1">
                Practical ICT Computer Lab
              </span>
              <p className="font-poppins text-xl font-bold text-white">
                Digital Record Keeping & Health Literacy
              </p>
            </div>
          </div>

          <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-lg border-2 border-thm-purple/20 group">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop"
              alt="Students practicing clinical nursing procedures"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/90 via-thm-purple-deep/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block rounded-full bg-thm-purple px-3 py-1 text-xs font-bold text-thm-gold mb-1 border border-thm-gold/30">
                Hospital Simulation Wards
              </span>
              <p className="font-poppins text-xl font-bold text-white">
                Clinical Patient Vitals & Hygiene Practicals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
