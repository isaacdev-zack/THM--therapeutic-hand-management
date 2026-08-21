export type SkillItem = {
  title: string;
  details: string[];
};

export type SkillGroup = {
  id: "clinical" | "support" | "safety";
  name: string;
  blurb: string;
  image: string;
  skills: SkillItem[];
};

export const caregiverSkillGroups: SkillGroup[] = [
  {
    id: "clinical",
    name: "Clinical Basics",
    blurb: "Core procedures every caregiver must perform safely.",
    image:
      "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1200&auto=format&fit=crop",
    skills: [
      {
        title: "Vital signs",
        details: [
          "Measure and record vital signs including temperature, blood pressure, pulse rate, and respiration rate.",
        ],
      },
      {
        title: "Sugar monitoring",
        details: ["Monitor and track blood sugar levels."],
      },
      {
        title: "Oxygen support",
        details: [
          "Safely administer oxygen using various methods such as nasal prongs and masks.",
        ],
      },
      {
        title: "Catheter & perineum care",
        details: [
          "Provide care for patients with urinary catheters while strictly observing aseptic techniques.",
        ],
      },
      {
        title: "Tube feeding",
        details: [
          "Safely administer nasogastric tube feeding and percutaneous endoscopic gastrostomy (PEG) tube feeding.",
        ],
      },
      {
        title: "Hot & cold therapy",
        details: [
          "Apply thermal therapies effectively to relieve patient pain and reduce inflammation.",
        ],
      },
    ],
  },
  {
    id: "support",
    name: "Patient Support",
    blurb: "Daily living care that protects dignity and comfort.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    skills: [
      {
        title: "Bed bath & grooming",
        details: [
          "Support daily hygiene and grooming while protecting patient dignity and comfort.",
        ],
      },
      {
        title: "Bed making",
        details: [
          "Prepare different types of hospital beds correctly to ensure maximum patient comfort.",
        ],
      },
      {
        title: "Back care",
        details: [
          "Administer back massage to relieve pain and promote deep muscle relaxation.",
          "Inspect bony prominences to check skin integrity and intercept bed sores.",
          "Stimulate tissue circulation to reverse the effects of prolonged bed rest.",
        ],
      },
      {
        title: "Positioning",
        details: [
          "Reposition patients frequently to prevent tissue damage and pressure ulcers.",
        ],
      },
      {
        title: "Wheelchair transfer",
        details: [
          "Operate mechanical lifts to eliminate caregiver spinal strain during transfers.",
          "Use slide sheets to reduce friction and protect fragile skin.",
        ],
      },
      {
        title: "Assistive devices",
        details: [
          "Deploy mobility aids like gait belts and trapeze bars safely.",
        ],
      },
    ],
  },
  {
    id: "safety",
    name: "Safety & Equipment",
    blurb: "Infection control and safe handling in care settings.",
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1200&auto=format&fit=crop",
    skills: [
      {
        title: "Hand hygiene",
        details: [
          "Identify the WHO moments of hand washing.",
          "Execute proper hand washing using soap and friction for 15–20 seconds.",
          "Perform surgical hand scrub.",
        ],
      },
      {
        title: "Proper gloving",
        details: [
          "Don protective gear in the correct sequence: gown, mask, eyewear, gloves.",
          "Doff contaminated gear safely to prevent self-contamination.",
          "Select appropriate barriers including N95 respirators, gowns, and boots.",
        ],
      },
      {
        title: "Disinfection",
        details: [
          "Decontaminate clinical surfaces using proper disinfection and sterilization.",
        ],
      },
      {
        title: "Standard precautions",
        details: [
          "Apply universal protocols to every patient interaction consistently.",
          "Segregate medical wastes into color-coded waste bins and sharps containers.",
        ],
      },
      {
        title: "Transmission-based precautions",
        details: [
          "Isolate infectious pathogens using contact, droplet, and airborne rules.",
          "Enforce cough etiquette and source containment strategies.",
          "Establish quarantine zones to break the chain of infection.",
        ],
      },
    ],
  },
];
