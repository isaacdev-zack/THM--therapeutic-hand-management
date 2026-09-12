export const careersContent = {
  hero: {
    title: "Your path from training to a real caregiving career",
    subtitle:
      "NITA-certified skills, supervised placements, and graduates working across Kenya’s care economy.",
    ctaLabel: "See pathways",
    ctaHref: "#pathways",
    image: "/gallery/purple-team-vitals.jpg",
    imageAlt: "THM students preparing vitals equipment in purple scrubs",
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
        src: "/gallery/purple-vitals-cart.jpg",
        alt: "Students with vitals cart in the skills lab",
        className: "left-0 top-0 h-[58%] w-[58%]",
      },
      {
        src: "/gallery/branded-scrubs-close.jpg",
        alt: "THM students in branded purple scrubs",
        className: "right-0 top-[8%] h-[42%] w-[48%]",
      },
      {
        src: "/gallery/students-linen-prep.jpg",
        alt: "Students preparing linens for patient care",
        className: "bottom-0 right-[6%] h-[44%] w-[62%]",
      },
    ],
  },
  pathways: [
    {
      title: "Hospital placements",
      body: "Train under registered nurse supervision on real wards — vitals, patient support, and clinical confidence before you graduate.",
      tags: ["Ward support", "Vital signs", "RN supervision"],
      image: "/gallery/purple-team-procedure.jpg",
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
      image: "/gallery/portrait-graduate-female-a.jpg",
    },
    {
      quote:
        "THM's Study Now, Pay Later option meant I could train without paying upfront. Today I work in elder care — helping families keep their parents safe and comfortable at home.",
      name: "Brian Kamau",
      role: "Home-based elder care · Kisumu",
      image: "/gallery/portrait-graduate-male.jpg",
    },
    {
      quote:
        "The childcare placement taught me more than theory. I use those safeguarding skills every day at the centre where I work now.",
      name: "Faith Njeri",
      role: "Childcare centre · Nairobi",
      image: "/gallery/portrait-graduate-female-b.jpg",
    },
  ],
} as const;
