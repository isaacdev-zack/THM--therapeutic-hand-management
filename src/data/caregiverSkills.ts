export type SkillItem = {
  title: string;
  summary: string;
  details?: string[];
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
    blurb: "Core procedures every caregiver must perform safely on the ward and in the home.",
    image: "/gallery/purple-ng-training.jpg",
    skills: [
      {
        title: "Vital signs",
        summary:
          "Learn to measure and record temperature, blood pressure, pulse, and respiration — the first signals that tell you when a patient needs help.",
        details: [
          "Use correct technique for each measurement",
          "Document findings clearly for nurse review",
        ],
      },
      {
        title: "Sugar monitoring",
        summary:
          "Monitor blood sugar levels safely and recognise when readings fall outside a healthy range for diabetic or at-risk patients.",
        details: [
          "Prepare equipment and follow infection-control steps",
          "Report abnormal results to supervising staff promptly",
        ],
      },
      {
        title: "Oxygen support",
        summary:
          "Support patients who need supplemental oxygen using nasal prongs, masks, and related equipment — with attention to flow rates and comfort.",
        details: [
          "Set up and monitor delivery devices correctly",
          "Watch for signs of distress or equipment issues",
        ],
      },
      {
        title: "Catheter & perineum care",
        summary:
          "Provide dignified catheter and perineal care while maintaining strict aseptic technique to prevent infection and skin breakdown.",
        details: [
          "Follow THM infection-control protocols throughout",
          "Protect patient privacy during intimate care tasks",
        ],
      },
      {
        title: "Tube feeding",
        summary:
          "Administer nasogastric and PEG tube feeding safely — checking placement, flow, and patient response at every step.",
        details: [
          "Confirm tube position before feeding",
          "Manage blockages, spills, and post-feed positioning",
        ],
      },
      {
        title: "Hot & cold therapy",
        summary:
          "Apply heat and cold therapy to relieve pain, reduce swelling, and support recovery — knowing when each approach is appropriate.",
        details: [
          "Assess skin integrity before and after application",
          "Time treatments correctly and document care given",
        ],
      },
    ],
  },
  {
    id: "support",
    name: "Patient Support",
    blurb: "Daily living care that protects dignity, comfort, and independence.",
    image: "/gallery/lab-bedside-wide.jpg",
    skills: [
      {
        title: "Bed bath & grooming",
        summary:
          "Support full personal hygiene — bathing, oral care, hair, nails, and grooming — in ways that preserve dignity for bed-bound or limited-mobility patients.",
        details: [
          "Adapt techniques for patients who cannot self-care",
          "Maintain warmth, privacy, and respectful communication",
        ],
      },
      {
        title: "Bed making",
        summary:
          "Prepare occupied and unoccupied beds to hospital standard so patients rest comfortably and skin stays protected from pressure and moisture.",
        details: [
          "Use correct linen changes with minimal patient disturbance",
          "Keep the care environment tidy and safe",
        ],
      },
      {
        title: "Back care",
        summary:
          "Deliver back massage, skin inspection, and circulation support for patients on prolonged bed rest — a key part of preventing pressure injuries.",
        details: [
          "Inspect bony areas for early signs of breakdown",
          "Stimulate circulation and relieve muscular tension",
        ],
      },
      {
        title: "Positioning",
        summary:
          "Reposition patients on a planned schedule to relieve pressure, improve breathing, and keep joints aligned — especially for immobile clients.",
        details: [
          "Use pillows and supports for stable, comfortable alignment",
          "Document turns and skin checks as required",
        ],
      },
      {
        title: "Wheelchair transfer",
        summary:
          "Move patients between bed, chair, and wheelchair using safe manual handling and mechanical aids — protecting both patient and caregiver from injury.",
        details: [
          "Apply slide sheets and lifts where appropriate",
          "Communicate each step so the patient feels secure",
        ],
      },
      {
        title: "Assistive devices",
        summary:
          "Use gait belts, trapeze bars, walkers, and other mobility aids correctly so patients move with confidence and reduced fall risk.",
        details: [
          "Fit and adjust devices to the individual patient",
          "Coach families on safe use at home when needed",
        ],
      },
    ],
  },
  {
    id: "safety",
    name: "Safety & Equipment",
    blurb: "Infection control and safe handling in every care setting you enter.",
    image: "/gallery/lab-team-practice.jpg",
    skills: [
      {
        title: "Hand hygiene",
        summary:
          "Master WHO hand-hygiene moments — the single most important habit for stopping infection spread between patients, staff, and families.",
        details: [
          "Wash with proper friction and timing",
          "Know when soap-and-water beats alcohol rub",
        ],
      },
      {
        title: "Proper gloving",
        summary:
          "Don and doff gowns, masks, eyewear, and gloves in the right order so you protect yourself and others without contaminating clean surfaces.",
        details: [
          "Select the right PPE for each care task",
          "Remove gear safely after contact with body fluids",
        ],
      },
      {
        title: "Disinfection",
        summary:
          "Clean and decontaminate equipment and surfaces using methods that match the level of risk — from routine wipes to full sterilisation protocols.",
        details: [
          "Separate clean and dirty zones in the care area",
          "Follow THM standards for reusable equipment",
        ],
      },
      {
        title: "Standard precautions",
        summary:
          "Treat every patient interaction as potentially infectious — using universal protocols that keep you, your colleagues, and families safe.",
        details: [
          "Segregate waste into correct colour-coded bins",
          "Handle sharps and spills without exposure risk",
        ],
      },
      {
        title: "Transmission-based precautions",
        summary:
          "Apply contact, droplet, and airborne isolation rules when patients carry infections that spread beyond standard precautions alone.",
        details: [
          "Set up and respect quarantine zones",
          "Enforce cough etiquette and source containment",
        ],
      },
    ],
  },
];
