export const careersContent = {
  hero: {
    title: "Your path from training to a real caregiving career",
    subtitle:
      "NITA-certified skills, supervised placements, and graduates working across Kenya’s care economy.",
    ctaLabel: "See pathways",
    ctaHref: "#pathways",
    image: "/gallery/ng-tube-coaching.jpg",
    imageAlt: "THM students practicing clinical procedures in the skills lab",
  },
  stats: [
    { value: "150+", label: "Graduates building careers in care" },
    { value: "NITA", label: "Certified training employers trust" },
    { value: "2", label: "Campuses — Nairobi & Kisumu" },
    { value: "0", label: "Upfront tuition for eligible youth" },
  ],
  about: {
    title: "We don’t just train caregivers. We place them.",
    body: "Therapeutic Hands Management prepares students for the ward, the home, and the human moments in between — with practical labs, hospital placements, and a clear route into paid work.",
    ctaLabel: "Apply now",
    ctaHref: "/apply",
    collage: [
      {
        src: "/gallery/lab-bedside-wide.jpg",
        alt: "Students practicing bedside care",
        className: "left-0 top-0 h-[58%] w-[58%]",
      },
      {
        src: "/gallery/lab-team-practice.jpg",
        alt: "THM students practicing as a team",
        className: "right-0 top-[8%] h-[42%] w-[48%]",
      },
      {
        src: "/gallery/purple-ng-training.jpg",
        alt: "Clinical skills practice in purple scrubs",
        className: "bottom-0 right-[6%] h-[44%] w-[62%]",
      },
    ],
  },
  pathways: [
    {
      title: "Hospital placements",
      body: "Train under registered nurse supervision on real wards — vitals, patient support, and clinical confidence before you graduate.",
      tags: ["Ward support", "Vital signs", "RN supervision"],
      image: "/gallery/instructor-with-students.jpg",
      href: "/programs",
    },
    {
      title: "Elder care careers",
      body: "Support dignity in aging — mobility, daily living, and family communication in homes and residential care.",
      tags: ["Geriatric care", "Mobility", "Home visits"],
      image: "/gallery/eldercare-handholding.jpg",
      href: "/programs",
    },
    {
      title: "Childcare & safeguarding",
      body: "Protect and nurture children in centres and homes with the developmental and safety skills employers expect.",
      tags: ["Safeguarding", "Daily care", "Centres"],
      image: "/gallery/childcare-students-toddler.jpg",
      href: "/programs",
    },
    {
      title: "Private home care",
      body: "One-to-one support for recovering or at-risk clients — the intimate, high-trust work many families need most.",
      tags: ["One-to-one", "Recovery", "Family trust"],
      image: "/gallery/private-home-care.jpg",
      href: "/contact",
    },
  ],
  testimonials: [
    {
      quote:
        "After my hospital placement I felt ready for the ward. Within weeks of graduating I was supporting patients under a registered nurse — the same skills we practised in class.",
      name: "Amina Otieno",
      role: "Hospital caregiver · Nairobi",
      image: "/gallery/graduate-portrait-amina.jpg",
    },
    {
      quote:
        "THM's Study Now, Pay Later option meant I could train without paying upfront. Today I work in elder care — helping families keep their parents safe and comfortable at home.",
      name: "Brian Kamau",
      role: "Home-based elder care · Kisumu",
      image: "/gallery/graduate-portrait-brian.jpg",
    },
    {
      quote:
        "The childcare placement taught me more than theory. I use those safeguarding skills every day at the centre where I work now.",
      name: "Faith Njeri",
      role: "Childcare centre · Nairobi",
      image: "/gallery/graduate-portrait-faith.jpg",
    },
  ],
} as const;
