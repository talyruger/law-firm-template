interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  specialties: string[];
  education: string[];
  barAdmissions: string[];
}

interface PracticeArea {
  title: string;
  description: string;
  services: string[];
  icon: string;
}

interface ContactInfo {
  address: {
    street: string;
    suite: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: {
    weekday: string;
    weekend: string;
  };
}

interface SiteContent {
  firm: {
    name: string;
    tagline: string;
    description: string;
    founded: number;
    values: Array<{
      title: string;
      description: string;
    }>;
  };
  practiceAreas: PracticeArea[];
  team: TeamMember[];
  contact: ContactInfo;
}

const siteContent: SiteContent = {
  firm: {
    name: "Law Firm Template",
    tagline: "Dedicated to Excellence in Legal Representation",
    description: "A premier law firm dedicated to providing exceptional legal services with integrity and professionalism.",
    founded: 1995,
    values: [
      {
        title: "Integrity",
        description: "We maintain the highest ethical standards in all our dealings."
      },
      {
        title: "Excellence",
        description: "We strive for excellence in every aspect of our practice."
      },
      {
        title: "Client Focus",
        description: "Our clients' needs and objectives are our top priority."
      },
      {
        title: "Innovation",
        description: "We embrace innovative approaches to legal challenges."
      }
    ]
  },
  practiceAreas: [
    {
      title: "Family Law",
      description: "Comprehensive family law services including divorce, child custody, and support matters.",
      services: [
        "Divorce and Separation",
        "Child Custody and Support",
        "Alimony and Spousal Support",
        "Prenuptial Agreements",
      ],
      icon: "family"
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense representation for all types of criminal charges.",
      services: [
        "DUI/DWI Defense",
        "Drug Crimes",
        "White Collar Crimes",
        "Traffic Violations",
      ],
      icon: "gavel"
    },
    {
      title: "Personal Injury",
      description: "Dedicated representation for victims of accidents and injuries.",
      services: [
        "Car Accidents",
        "Slip and Fall",
        "Medical Malpractice",
        "Workplace Injuries",
      ],
      icon: "balance"
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning and probate services.",
      services: [
        "Wills and Trusts",
        "Power of Attorney",
        "Estate Administration",
        "Probate Litigation",
      ],
      icon: "document"
    }
  ],
  team: [
    {
      name: "Attorney Name 1",
      position: "Managing Partner",
      bio: "With over 25 years of experience, Attorney Name 1 leads our firm with expertise and dedication.",
      image: "/images/attorney-headshot-1.svg",
      specialties: ["Family Law", "Criminal Defense"],
      education: [
        "J.D., Law School",
        "B.A., University"
      ],
      barAdmissions: [
        "State Bar",
        "U.S. Supreme Court"
      ]
    },
    {
      name: "Attorney Name 2",
      position: "Senior Associate",
      bio: "Attorney Name 2 specializes in personal injury cases and has a proven track record of success.",
      image: "/images/attorney-headshot-2.svg",
      specialties: ["Personal Injury", "Medical Malpractice"],
      education: [
        "J.D., Law School",
        "B.S., University"
      ],
      barAdmissions: [
        "State Bar"
      ]
    },
    {
      name: "Attorney Name 3",
      position: "Associate Attorney",
      bio: "Attorney Name 3 brings fresh perspectives and innovative solutions to complex legal challenges.",
      image: "/images/attorney-headshot-3.svg",
      specialties: ["Estate Planning", "Probate"],
      education: [
        "J.D., Law School",
        "B.A., University"
      ],
      barAdmissions: [
        "State Bar"
      ]
    }
  ],
  contact: {
    address: {
      street: "123 Legal Avenue",
      suite: "Suite 500",
      city: "Your City",
      state: "ST",
      zip: "12345"
    },
    phone: "(000) 000-0000",
    email: "info@lawfirm.com",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed"
    }
  }
};

export default siteContent; 