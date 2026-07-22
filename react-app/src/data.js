export const aboutData = {
  name: "Ayush Abhay Shrivastava",
  role: "SWE-1 @ LG Ad Solutions | Researcher @ DAIR Group, IIT Delhi",
  avatar: "https://github.com/AyushS15.png",
  bio1: "I am a researcher and engineer based in Bangalore, driven by the goal of making Artificial Intelligence more reliable, transparent, and safe for the real world.",
  bio2: "Currently, I work as a Software Engineer at LG Ad Solutions, where I build and optimize large-scale inference systems. Before joining the industry, I graduated from the Indian Institute of Technology (IIT), Delhi with a major in Electrical Engineering and a minor in Computer Science.",
  research: {
    title: "Research & Philosophy",
    content: "My research interests lie at the intersection of Computer Vision, AI Safety, and Neuro-symbolic AI. I am particularly focused on the 'fragility' of modern deep learning—specifically how models that perform well on average often fail in critical, low-probability 'tail' scenarios.\n\nMy goal is to move beyond 'black box' architectures to build systems that are 'safe-by-design'. This involves exploring methods like curriculum learning and temporal logic to ensure models behave consistently, even under environmental shifts or adversarial conditions.",
    highlight: "Recently, my work on reducing bias in spatio-temporal scene graph generation, 'ImparTail,' was accepted as a Highlight Paper (top 10% of accepted papers) at CVPR 2025."
  },
  outside: {
    title: "Outside of Work",
    content: "When I’m not debugging code or reading papers, I try to step away from the screen. I enjoy sightseeing and exploring new cities. I’m also quite competitive when it comes to sports—you can usually find me unwinding with a serious game of pool or table tennis."
  },
  links: {
    github: "https://github.com/AyushS15",
    scholar: "https://scholar.google.com/citations?hl=en&user=mt8B-uwAAAAJ",
    email: "ayushshrivastava391@gmail.com"
  }
};

export const publicationsData = [
  {
    id: "impartail",
    title: "Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)",
    date: "2025-02-01",
    authors: "Rohith Peddi, Saurabh, Ayush Abhay Shrivastava, Parag Singla, Vibhav Gogate",
    excerpt: "We introduce 'ImparTail', a curriculum-learning framework that fixes bias in Scene Graph Generation using loss-masking.",
    links: {
      paper: "https://arxiv.org/pdf/2411.13059",
      bibtex: "https://arxiv.org/bibtex/2411.13059"
    },
    highlights: [
      "🏆 CVPR 2025 Highlight: Selected as a top 10% paper for significant contributions to fair and robust video understanding.",
      "The 'ImparTail' Framework: We developed a novel curriculum learning approach with dynamic loss-masking.",
      "New Benchmarks: We introduced two new tasks—Robust Spatio-Temporal Scene Graph Generation and Robust Scene Graph Anticipation.",
      "Results: Our approach achieves state-of-the-art unbiased metrics on the Action Genome dataset."
    ]
  }
];

export const resumeData = {
  education: [
    {
      degree: "B.Tech in Electrical Engineering (Minor in Computer Science)",
      institution: "Indian Institute of Technology (IIT), Delhi",
      date: "2021 - 2025",
      details: ["GPA: 8.689/10"]
    }
  ],
  experience: [
    {
      role: "Software Engineer 1",
      company: "LG Ad Solutions, Bangalore",
      date: "Aug 2025 - Present",
      details: [
        "Optimizing real-time ML inference monitoring (InfluxDB) and securing ArgoCD pipelines."
      ]
    },
    {
      role: "Researcher",
      company: "Data Analytics and Intelligence Research (DAIR) Group, IIT Delhi",
      date: "Aug 2024 - Aug 2025",
      details: [
        "Developed 'ImparTail' framework using curriculum learning to reduce bias in Scene Graph Generation.",
        "Paper accepted as a CVPR 2025 Highlight.",
        "Advisors: Prof. Parag Singla, Prof. Vibhav Gogate."
      ]
    },
    {
      role: "AI Research Intern",
      company: "Sekant Security",
      date: "Mar 2025 - June 2025",
      details: [
        "Integrated hybrid visual backbones to improve phishing website recognition.",
        "Proved object-centric detection is more robust to distribution shifts than global classification."
      ]
    },
    {
      role: "Research Contributor",
      company: "Global Risk and AI Safety Preparedness (GRASP)",
      date: "Jan 2025 - Feb 2025",
      details: [
        "Analyzed latent adversarial training and 'safe-by-design' AI architectures.",
        "Authored technical analysis on world model hierarchies for AI Safety Connect, Paris AI Action Summit, 2025."
      ]
    },
    {
      role: "Engineering Intern",
      company: "Eightfold.ai, Noida",
      date: "May 2024 - June 2024",
      details: [
        "Implemented bulk profile management services and automated Pytest pipelines for NLP parsing."
      ]
    }
  ],
  awards: [
    "CVPR Highlight Paper (2025): Awarded to top 10% of accepted papers",
    "CVPR Travel Support Award (2025): Competitive funding to present research",
    "JEE Advanced Rank (2021): All India Rank 472 among 200,000+ candidates",
    "JEE Main Rank (2021): All India Rank 823 among 1.1 million+ candidates"
  ],
  skills: {
    languages: ["Python", "C", "C++", "Java", "Golang", "SQL", "MATLAB"],
    tools: ["PyTorch", "NumPy", "Pandas", "OpenCV", "Docker", "Kubernetes", "AWS", "ArgoCD"],
    research: ["Computer Vision", "AI Safety", "Deep Learning", "Graph Neural Networks (GNNs)", "NLP"]
  }
};

