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
      degree: "Master of Science in Computer Science",
      institution: "UCLA",
      date: "2026 - Present",
      details: []
    },
    {
      degree: "Bachelor of Technology in Electrical Engineering (Minor in Computer Science)",
      institution: "Indian Institute of Technology (IIT), Delhi",
      date: "2021 - 2025",
      details: []
    }
  ],
  experience: [
    {
      role: "Software Engineer 1",
      company: "LG Ad Solutions, Bangalore",
      date: "Aug 2025 - 2026",
      details: [
        "Architected a serverless compute pipeline using AWS Batch and EventBridge to schedule and process heavy asynchronous simulation workloads, serving as an alternative to Knative.",
        "Maintained Infrastructure as Code (IaC) using Terraform and Atmos for AWS data infrastructure (Aurora, DocumentDB, ElastiCache), reducing deployment time by 20%.",
        "Led a bare-metal hardware refresh by benchmarking on-premises compute clusters, achieving a 4x throughput increase across CPU, memory, and disk via an upgrade to Intel Xeon Gold 6342.",
        "Executed the minimal down-time migration of critical on-premises services to AWS, orchestrating live database transitions, DNS cutovers, and the replication of over 1TB of S3 object storage."
      ]
    },
    {
      role: "AI Research Intern",
      company: "Sekant Security",
      date: "Mar 2025 - June 2025",
      details: [
        "Conducted ablation studies across YOLO, EfficientFormer, and MobileFormer, establishing object detection as the superior paradigm for robust phishing defense.",
        "Optimized Phishpedia with a Hybrid CNN-Transformer backbone, achieving a 2x inference speedup on the Phish-30K benchmark while maintaining 99.2% precision."
      ]
    },
    {
      role: "Research Contributor",
      company: "Global Risk and AI Safety Preparedness (GRASP)",
      date: "Jan 2025 - Feb 2025",
      details: [
        "Authored two technical articles for the AI Safety Connect (Paris AI Action Summit) 2025 database, surveying SOTA world model hierarchies to define design-time safety constraints.",
        "Audited latent adversarial training techniques, identifying critical failure modes in safe-by-design AI models."
      ]
    },
    {
      role: "B.Tech Thesis Project & Design Project",
      company: "Data Analytics and Intelligence Research (DAIR) Group, IIT Delhi",
      date: "Aug 2024 - Aug 2025",
      details: [
        "Designed 'ImparTail', a CVPR 2025 Highlight (Top 3% of 13K+ submissions), framework for video debiasing.",
        "Boosted tail-class Mean Recall@50 by ~52% (relative) via curriculum-learning to mitigate distribution bias.",
        "Engineered a neuro-symbolic pipeline using Chat-UniVi and LongVU to parse videos into formal logic templates.",
        "Deployed DeepSeek-R1 to mine 100k+ temporal rules with ~90% precision across the Action Genome dataset."
      ]
    },
    {
      role: "Engineering Intern",
      company: "Eightfold.ai, Noida",
      date: "May 2024 - July 2024",
      details: [
        "Engineered bulk profile ingestion services, reducing data processing latency by ~15% for high-volume datasets.",
        "Built automated Pytest pipelines for NLP parsers, cutting testing time by ~20% and ensuring API integrity."
      ]
    }
  ],
  projects: [
    {
      name: "Object-Centric Learning",
      category: "Deep Learning",
      details: [
        "Benchmarked Slot Attention on CLEVRTex dataset for unsupervised object disentanglement, establishing a baseline Adjusted Rand Index (ARI) of 0.25.",
        "Designed a slot-conditioned Latent Diffusion Model, boosting performance by ~3x (to 0.65 ARI)."
      ]
    },
    {
      name: "Automated Math Problem Solving with Seq2Seq Models",
      category: "Deep Learning",
      details: [
        "Used Bi-LSTM with GloVe embeddings and Bahdanau attention for sequence generation, achieving 67% exact match.",
        "Finetuned BERT as encoder and evaluated to get an accuracy of 78%(exact match) and 81%(execution)."
      ]
    },
    {
      name: "Graph Neural Networks for Node Classification",
      category: "Graph Machine Learning",
      details: [
        "Built hybrid GraphSAGE-MLP achieving 0.88 ROC-AUC (+15% gain) via multi-path aggregation.",
        "Implemented heterogeneous GNN for bipartite user product graphs (10k+ nodes), reaching 0.85 Weighted F1."
      ]
    },
    {
      name: "Object Detection on Foggy Cityscapes Dataset",
      category: "Computer Vision",
      details: [
        "Fine-tuned Deformable DETR components on Foggy Cityscapes, boosting mAP by ~10% over the baseline.",
        "Implemented PEFT on Grounding DINO with < 1% trainable parameters, achieving 33.8% mAP."
      ]
    }
  ],
  awards: [
    "CVPR Travel Support Award: Selected as one of just 276 awardees globally for a competitive grant, (2025)",
    "Joint Entrance Examination (JEE Advanced): All India Rank 472 among 200,000+ candidates nationwide (2021)",
    "Joint Entrance Examination (JEE Main): All India Rank 823 among 1.1 million+ candidates nationwide (2021)"
  ],
  skills: {
    languages: ["Python", "C", "C++", "Java", "Golang", "SQL", "MATLAB", "JavaScript"],
    tools: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "ONNX", "Docker", "Kubernetes", "AWS", "Jenkins", "Kafka", "MongoDB", "Ollama", "Pytest"]
  }
};

