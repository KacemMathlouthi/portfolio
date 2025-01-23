import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kacem Mathlouthi",
  initials: "KM",
  url: "https://dillion.io",
  location: "Tunis, Tunisia",
  locationLink: "https://maps.app.goo.gl/QxQvwQF4sFkF1R197",
  description:
    "Software Engineering student, passionate about Machine Learning, loves building things.",
  summary:
    `21 years old Software Engineering student at [INSAT](#education) with a strong passion for AI and machine learning.
    I have applied AI in multiple fields like cybersecurity, agriculture, and developer tools.
    My journey has been shaped by hands-on experience in [hackathons](#hackathons), [internships](#work), and [self-driven projects](#projects).
    Last summer, I interned at Orange, and I am now actively looking for a job or internship in the AI space. 
    [If you don't like this format of cvs and resumes, you can chat with my resume using this chatbot that i created using RAG!](https://kacemath-resumerag.hf.space/)`, 
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "C/C++",
    "PyTorch",
    "SQL",
    "Pandas",
    "Numpy",
    "Langchain",
    "CrewAI",
    "FastAPI",
    "MongoDB",
    "RAG",
    "Docker",
    "Gradio & Streamlit",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Orange",
      href: "https://www.orangedigitalcenters.com/",
      badges: [],
      location: "On Site",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/orange.jpg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "LENS",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "National Institute of Applied Science and Technology",
      href: "https://insat.rnu.tn/",
      degree: "Bachelor's Degree in Software Engineering",
      logoUrl: "/insat_logo.png",
      start: "2022",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "1st Place 🥇 Orange x Hexabot Conversational AI Hackathon",
      dates: "Dec 22, 2024",
      location: "Hammamet, Tunisia",
      description:
        "Developed plugins and extensions for the Hexabot visual editor, enabling multimodal capabilities such as text-to-speech, speechto-text, and vision integration.",
      image:
        "https://avatars.githubusercontent.com/u/31648342?s=280&v=4",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/paranoid-android-submission",
        },
        {
          title: "Github Repository",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KacemMathlouthi/X2X-Hexabot-Orange-Submission",
        },
      ],
    },
    {
      title: "2nd Place 🥈 IEEE TSYP 12 CS Technical Challenge",
      dates: "November 1, 2024 - December 23, 2024",
      location: "Hammamet, Tunisia",
      description:
        "Competed in the Tunisian Students and Young Professionals Computer Science Challenge by creating Smartshield; an AI-powered platform for automated cybersecurity threat detection and response.",
      image:
        "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/451555034_806009071680012_1549095888316774813_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UkP4-8zv74cQ7kNvgGsUtb2&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=ANmLEEWqPw9zFeNMgO63QOh&oh=00_AYC65UgCQtdbIf50zYdCL-GWNhNInPTzBcy5exm_bAZ7pg&oe=67982D3B",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Smartshield-INSAT",
        },
      ],
    },
    {
      title: "2nd Place 🥈 Artificial Intelligence National Summit (AINS 2.0)",
      dates: "June 9, 2024",
      location: "Sousse, Tunisia",
      description:
        "Created a developer tool for machine learning professionals, a Multi-LLM Agent System, for problem definition, data analysis, model recommendations, research, and code generation.",
      image:
        "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/417397315_814527174044531_2047266368184133502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5iiZ2iTHJ9YQ7kNvgEmkpJa&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=Ao9HDJK1llokEZGQDwjQASn&oh=00_AYC9xaCYbbkAl3-I-Amfs26pB3d_Ig4Q7dijrIFWCw6gbw&oe=6798214E",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/KacemMathlouthi/AINS-ML.Guide",
        },
      ],
    },
    {
      title: "4th Place ✨ Orange Summer Challenge (OSC 2024)",
      dates: "October 13th - 15th, 2017",
      location: "Tunis, Tunisia",
      description:
        "Developed innovative AI solutions for agriculture, gaining teamwork and problem-solving skills.",
      image:
        "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/467487014_857470296551848_4425247407313207464_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7RdsDErnEoEQ7kNvgGGKlvu&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=ATzSzeW4OkQueBUBEYwN_3e&oh=00_AYClhDxncDXzsXKdBiseSN80jDS_3K_1PbAuGLyzxm_9zA&oe=679838FA",
      links: [],
    },
    {
      title: "3rd Place 🥉 CodeQuest",
      dates: "December 13, 2023",
      location: "Tunis, Tunisia",
      description:
        "ACM INSAT Competitive Programming competition, honed problem-solving and teamwork skills.",
      image:
        "https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/402598779_6955319747862871_2681866326282106923_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=JlgCKg75t9MQ7kNvgHtPmKJ&_nc_zt=24&_nc_ht=scontent.ftun14-1.fna&_nc_gid=AbaRmP2Tb28KlD7nCvNv_eJ&oh=00_AYBoQb-cgAkp1HiEFvrIntQiQUoHsPXGFICgAkugF0Gl0g&oe=67984D42",
      links: [],
    },
  ],
} as const;
