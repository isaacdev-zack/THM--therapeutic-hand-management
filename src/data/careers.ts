export const careersContent = {
  hero: {
    title: "Your path from training to a real caregiving career",
    subtitle:
      "NITA-certified skills, supervised placements, and graduates working across Kenya’s care economy.",
    ctaLabel: "See pathways",
    ctaHref: "#pathways",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Healthcare professionals collaborating in a care setting",
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
    ctaHref: "/contact",
    collage: [
      {
        src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=900&auto=format&fit=crop",
        alt: "Proud THM graduates",
        className: "left-0 top-0 h-[58%] w-[58%]",
      },
      {
        src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=800&auto=format&fit=crop",
        alt: "Caregiver with patient",
        className: "right-0 top-[8%] h-[42%] w-[48%]",
      },
      {
        src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=800&auto=format&fit=crop",
        alt: "Practical training session",
        className: "bottom-0 right-[6%] h-[44%] w-[62%]",
      },
    ],
  },
  pathways: [
    {
      title: "Hospital placements",
      body: "Train under registered nurse supervision on real wards — vitals, patient support, and clinical confidence before you graduate.",
      tags: ["Ward support", "Vital signs", "RN supervision"],
      image:
        "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1200&auto=format&fit=crop",
      href: "/programs",
    },
    {
      title: "Elder care careers",
      body: "Support dignity in aging — mobility, daily living, and family communication in homes and residential care.",
      tags: ["Geriatric care", "Mobility", "Home visits"],
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
      href: "/programs",
    },
    {
      title: "Childcare & safeguarding",
      body: "Protect and nurture children in centres and homes with the developmental and safety skills employers expect.",
      tags: ["Safeguarding", "Daily care", "Centres"],
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
      href: "/programs",
    },
    {
      title: "Private home care",
      body: "One-to-one support for recovering or at-risk clients — the intimate, high-trust work many families need most.",
      tags: ["One-to-one", "Recovery", "Family trust"],
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      href: "/contact",
    },
  ],
  testimonials: [
    {
      quote:
        "After my hospital placement I felt ready for the ward. Within weeks of graduating I was supporting patients under a registered nurse — the same skills we practised in class.",
      name: "Amina Otieno",
      role: "Hospital caregiver · Nairobi",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "THM's Study Now, Pay Later option meant I could train without paying upfront. Today I work in elder care — helping families keep their parents safe and comfortable at home.",
      name: "Brian Kamau",
      role: "Home-based elder care · Kisumu",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote:
        "The childcare placement taught me more than theory. I use those safeguarding skills every day at the centre where I work now.",
      name: "Faith Njeri",
      role: "Childcare centre · Nairobi",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
    },
  ],
} as const;
