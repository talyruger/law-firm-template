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
    name: "Tickle Law Office",
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
      name: "John Tickle",
      position: "Managing Partner",
      bio: "With over 25 years of experience, John leads our firm with expertise and dedication.",
      image: "/images/team/john-tickle.jpg",
      specialties: ["Family Law", "Criminal Defense"],
      education: [
        "J.D., Harvard Law School",
        "B.A., Yale University"
      ],
      barAdmissions: [
        "State Bar of California",
        "U.S. Supreme Court"
      ]
    },
    {
      name: "Sarah Johnson",
      position: "Senior Associate",
      bio: "Sarah specializes in personal injury cases and has a proven track record of success.",
      image: "/images/team/sarah-johnson.jpg",
      specialties: ["Personal Injury", "Medical Malpractice"],
      education: [
        "J.D., Stanford Law School",
        "B.S., University of California"
      ],
      barAdmissions: [
        "State Bar of California"
      ]
    },
    {
      name: "Michael Chen",
      position: "Associate Attorney",
      bio: "Michael brings fresh perspectives and innovative solutions to complex legal challenges.",
      image: "/images/team/michael-chen.jpg",
      specialties: ["Estate Planning", "Probate"],
      education: [
        "J.D., University of Michigan",
        "B.A., University of Chicago"
      ],
      barAdmissions: [
        "State Bar of California"
      ]
    }
  ],
  contact: {
    address: {
      street: "123 Legal Avenue",
      suite: "Suite 500",
      city: "San Francisco",
      state: "CA",
      zip: "94105"
    },
    phone: "(555) 123-4567",
    email: "info@ticklelaw.com",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 5:00 PM",
      weekend: "Saturday - Sunday: Closed"
    }
  }
};

export default siteContent; 