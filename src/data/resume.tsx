import { Icons } from "@/components/icons";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
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
    [If you don't like this format of cvs and resumes, you can chat with my resume using this chatbot that i created using RAG!](#chat-resume)`, 
  avatarUrl: "/me.jpg",
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
    { href: "#chat-resume", icon: ChatBubbleIcon, label: "Chat about my Resume" },
    { href: "https://drive.google.com/file/d/18PfQNkWqVGoWA52bUXhM54ntGcuznf3s/view?usp=sharing", icon: NotebookIcon, label: "PDF Resume" },

  ],
  contact: {
    email: "kacem.mathlouthi@ieee.com",
    tel: "+21652387938",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KacemMathlouthi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kacem-mathlouthi/",
        icon: Icons.linkedin,

        navbar: true,
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
      start: "Aug 2024",
      end: "Oct 2024",
      description:
       `Made a plant disease classification lightweight CNN model, optimized for edge devices using knowledge distillation techniques. 
        Developed an AI Agentic workflow for report generation, automating data collection, analysis and research extraction. 
        Developed a chatbot offering real-time guidance and farming insights. `,
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
      title: "RAG Resume Chatbot",
      href: "https://kacemath-resumerag.hf.space/",
      active: true,
      description:
        "Chatbot that uses RAG to answer questions about my professional experience and my resume. The chatbot is designed to retrieve relevant information from a resume and generate intelligent responses using LLMs.", 
      technologies: [
        "ChromaDB",
        "Langchain",
        "Groq",
        "Gradio",
        "Hugging Face",
        "Semantic Search",
        "Retrieval Augmented Generation",
        "Llama 3.3",
      ],
      links: [
        {
          type: "Website",
          href: "https://kacemath-resumerag.hf.space/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/KacemMathlouthi/Resume-RAG/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/XSqHitk.jpeg",
      video: "",
    },
    {
      title: "SmartShield",
      href: "https://github.com/Smartshield-INSAT",
      active: true,
      description:
        "Smartshield is a cybersecurity solution using machine learning and generative AI to detect network anomalies in real-time. With Docker, containerization, and microservices, it simplifies network security management and keeps organizations ahead of threats.",
      technologies: [
        "Python",
        "CrewAI",
        "Langchain",
        "ElasticSearch",
        "React",
        "Catboost",
        "NestJS",
        "FastAPI",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Smartshield-INSAT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/uxsMDXk.jpeg",
      video: "",
    },
    {
      title: "ML.Guide",
      href: "https://github.com/KacemMathlouthi/AINS-ML.Guide",
      active: true,
      description:
        "ML.GUIDE is a Multi-Agent System designed to help you define, evaluate, and solve ML problems. It uses specialized AI agents for tasks like problem definition, data assessment, model recommendations, research, and code generation.", 
      technologies: [
        "CrewAI",
        "Streamlit",
        "Groq",
        "JinaAI",
        "Sweetviz",
        "Arxiv API",
        "Pandas",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KacemMathlouthi/AINS-ML.Guide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/rLGn2dS.jpeg",
      video: "",
    },
    {
      title: "Machine Learning from Scratch",
      href: "https://github.com/KacemMathlouthi/Machine-Learning-From-Scratch",
      active: true,
      description:
        "Implementation of popular machine learning algorithms, like PCA, Random Forest, Decision Trees, KNN, K-means...",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/KacemMathlouthi/Machine-Learning-From-Scratch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/c8vw33a.jpeg",
      video: "",
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
      dates: "Aug 2024 - Oct 2024",
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
