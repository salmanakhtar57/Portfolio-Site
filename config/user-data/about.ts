// ========================================
// PORTFOLIO CONFIGURATION FILE
// ========================================
// Edit this file to personalize your portfolio
// All sections are typed for safety and autocomplete

export interface SocialLink {
  platform: string;
  url?: string;
  icon: string;
}

export interface HobbiesItem {
  label: string;
  link?: string;
}

export interface ExperienceItem {
  role: string;
  company?: string; // Optional: can be omitted if freelancing
  description?: string; // Optional: brief description of responsibilities
  period?: string; // Optional: e.g., "2022 - Present"
}

export interface EducationItem {
  degree: string;
  institution: string;
  description?: string; // Optional: additional details
  period?: string; // Optional: e.g., "2018 - 2022"
}

export interface AboutData {
  // Personal Info
  name: string;
  title: string;
  showCurtain: boolean; // Show decorative curtains in Hero section
  topText?: string; // Optional: small text above name/title in Hero section
  highlightsFromTopText?: string[]; // Words from topText to highlight (optional)
  // Hero Section
  hero: {
    headline: string;
    highlightedWords?: string[]; // Optional: words in headline to highlight
    roles?: string[]; // Optional: rotating role titles for the typewriter greeting
    primaryCtaText: string;
    primaryCtaLink: string;
    heroPara: string;
  };

  // About Me Section
  aboutMe: {
    heading: { normalText: string; highlightedText: string };
    paragraphs: string[];
    skills: string[];
    interests: string[];
    highlightedAboutRole: string[];
    aboutCTA: string;
    aboutSecondaryCTA?: {
      text: string;
      icon?: string; // optional
      onClick?: () => void; // optional
    };
    // Personal story config (optional for template users)
    personalStory?: {
      id: number; // for badge or ordering
      title: string; // blog title
      description: string; // short preview
      imageUrl: string; // small image for card
      link: string; // blog URL
    };
  };

  // Experience Section (Career)
  experience: ExperienceItem[];

  // Education Section (Academic)
  education?: EducationItem[]; // Optional: can be omitted

  // Personal

  hobbies: HobbiesItem[];

  // Social Links
  socialLinks: SocialLink[];

  // Contact Info
  contact: {
    email: string;
    phone?: string; // Optional: can be omitted for privacy
    location: string;
    preferredMethod: "email" | "phone" | "linkedin";
  };
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/salman-akhtar-09a210198/",
  instagram: "https://www.instagram.com/salman.code",
  github: "https://github.com/salmanakhtar57",
  medium: "https://salman1234.medium.com/",
  x: "https://x.com/salman_codes"
};

// PORTFOLIO DATA
// ========================================
// 👇 Edit everything below this line 👇

export const portfolioForJob = true; // can be for freelancing the service section and others will work

const aboutData: AboutData = {
  // ---------- Basic Info ----------
  name: "Salman Akhtar",
  title: "Backend Engineer",
  showCurtain: true, // Set to false to hide decorative curtains in Hero section

  // topText: "Available for Remote Opportunities",
  // highlightsFromTopText: ["Remote Opportunities"],

  // ---------- Hero Section ----------
  hero: {
    headline: "Building Scalable Backend Systems for Modern Web Applications",
    highlightedWords: ["Scalable Backend", "Web Applications"],
    roles: [
      "Backend Developer",
      "Django Developer",
      "FastAPI Developer",
      "Python Developer",
    ],
    primaryCtaText: "Download Resume",
    primaryCtaLink: "/resume/Salman Akhtar - Software Engineer.pdf",
    heroPara:
      "Python Backend Developer specializing in FastAPI, Django, DRF, AI, and scalable backend architecture for startups and growing products.",
  },

  // ---------- About Me Section ----------
  aboutMe: {
    heading: {
      normalText: "From curious learner",
      highlightedText: "to backend {Developer}",
    },
    paragraphs: [
      "I'm Salman, a Python Backend Developer who enjoys building backend systems and solving real world problems. I like working with APIs, databases, and backend architecture, especially when improving performance or creating clean and scalable solutions.",
      "When I'm not coding, I enjoy reading books, attending different events, and learning from new people and experiences. I also enjoy spending quiet evenings with a cup of tea, thinking about ideas, and sharing my thoughts and learnings online."
    ],
    skills: ["React", "TypeScript", "TailwindCSS", "Node.js", "Next.js"],
    interests: ["Open Source", "Tech Writing", "UI/UX Design"],
    highlightedAboutRole: [
      "Python Backend Engineer",
      "Scalable API Developer",
      "Django / FastAPI Developer",
    ],
    aboutCTA: "View my Journey",
    // aboutSecondaryCTA: {
    //   text: "Connect on",
    //   icon: "ri-linkedin-box-fill",
    //   onClick: () => {
    //     window.open(socialLinks.linkedin, "_blank");
    //   },
    // },
  },

  // ---------- Work Experience ----------
  experience: [
    {
      role: "Python Backend Developer",
      company: "WanderCode - Lahore, Pakistan",
      description:
        "Building scalable backend systems using Python and Django, developing RESTful APIs, AI-driven features, third-party integrations, and optimized database architectures for modern web applications.",
      period: "Dec 2025 - Present",
    },
    {
      role: "Python Developer",
      company: "DevPandas - Lahore, Pakistan",
      description:
        "Worked on Python development projects, building robust backend solutions and implementing efficient APIs for various client applications.",
      period: "Dec 2024 - Nov 2025",
    },
    {
      role: "Back End Developer",
      company: "Get AI Chatbots - Lahore, Pakistan",
      description:
        "Developed AI-powered chatbot solutions, implemented RESTful APIs, and integrated LangChain for advanced conversational AI capabilities.",
      period: "Dec 2023 - Nov 2024",
    },
  ],
  // ---------- Education ----------
  education: [
    {
      degree: "BSCS",
      institution: "COMSATS University",
      description: "Computer Science",
      period: "2019 - 2023", // Optional
    },
  ],

  // ---------- Personal Interests/Hobbies ----------
  hobbies: [
    { label: "Writing", link: "" },
    { label: "Reading Books", link: "" },
    { label: "Exploring Agentic AI", link: "" },
    { label: "Learning new tech", link: "" },
    { label: "Scrolling LinkedIn", link: "https://www.linkedin.com/in/salman-akhtar-09a210198/" },
  ],

  // ---------- Social Media Links ----------
  // these are remix icons classes
  socialLinks: [
    {
      platform: "LinkedIn",
      url: socialLinks["linkedin"],
      icon: "ri-linkedin-fill",
    },
    {
      platform: "GitHub",
      url: socialLinks["github"],
      icon: "ri-github-fill",
    },
    {
      platform: "Medium",
      url: socialLinks["medium"],
      icon: "ri-medium-line",
    },
    {
      platform: "Twitter",
      url: socialLinks["x"],
      icon: "ri-twitter-x-fill",
    },
    {
      platform: "Instagram",
      url: socialLinks["instagram"],
      icon: "ri-instagram-fill",
    },
  ],

  // ---------- Contact Information ----------
  contact: {
    email: "salmanmaken10@gmail.com",
    location: "Lahore, Pakistan",
    preferredMethod: "linkedin", // Options: 'email' | 'phone' | 'linkedin' | 'whatsapp'
  },
};

export default aboutData;
