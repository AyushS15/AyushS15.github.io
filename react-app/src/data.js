export const personalInfo = {
  name: "Ayush Abhay Shrivastava",
  role: "Incoming M.S. CS @ UCLA • AI Researcher & Software Engineer",
  tagline: "Understanding how AI perceives, reasons, and acts in the physical world.",
  subtagline: "Building spatio-temporal representations, video world models, and robotic policies that are robust, unbiased, and safe.",
  avatar: "/assets/profile.png",
  location: "Los Angeles, CA / Bangalore, India",
  email: "ayushshrivastava391@gmail.com",
  phone: "+1 2135886944",
  links: {
    github: "https://github.com/AyushS15",
    scholar: "https://scholar.google.com/citations?hl=en&user=mt8B-uwAAAAJ",
    linkedin: "https://www.linkedin.com/in/ayush-shrivastava/",
    email: "mailto:ayushshrivastava391@gmail.com",
    resume: "/resume.pdf"
  },
  researchInterests: [
    "Probabilistic Modeling",
    "Spatio-Temporal Analysis",
    "Neuro-symbolic AI",
    "Computer Vision",
    "Robot Learning & VLA",
    "AI Safety & Alignment",
    "NLP"
  ],
  bioParagraphs: [
    "I am an incoming Master of Science in Computer Science student at UCLA (Sept 2026 – June 2028). I take ideas from cutting-edge research papers, implement them from scratch, and dig into why and when they fail under critical, low-probability tail events.",
    "Previously, I worked as a Software Engineer at LG Ad Solutions building and optimizing large-scale distributed cloud and simulation pipelines. Before joining industry, I graduated from the Indian Institute of Technology (IIT), Delhi with a major in Electrical Engineering and a minor in Computer Science.",
    "My research spans spatio-temporal scene understanding, neuro-symbolic temporal logic mining, and real-to-sim manipulation via Vision-Language-Action (VLA) policies. Recently, our paper on debiasing spatio-temporal scene graph generation—'ImparTail'—was accepted as a Highlight Paper (Top 3% of 13,000+ submissions) at IEEE/CVF CVPR 2025."
  ],
  profileYaml: {
    now: "M.S. Computer Science (Incoming), UCLA · June 2028",
    before: "B.Tech Electrical Eng (Minor CS), IIT Delhi · June 2025",
    currently: [
      "Evaluating Video World Models (Wan 2.2, Cosmos 3) on PNR failure events",
      "Mining temporal logic rules with DeepSeek-R1 for neuro-symbolic scene understanding",
      "Real-to-sim manipulation retargeting egocentric video to Franka Panda & SmolVLA"
    ],
    based_in: "Los Angeles, CA / Bangalore, India"
  }
};

export const publicationsData = [
  {
    id: "impartail",
    title: "Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)",
    badge: "CVPR 2025 Highlight • Top 3%",
    date: "CVPR 2025",
    authors: [
      { name: "Rohith Peddi", isSelf: false },
      { name: "Saurabh", isSelf: false },
      { name: "Ayush Abhay Shrivastava", isSelf: true },
      { name: "Parag Singla", isSelf: false },
      { name: "Vibhav Gogate", isSelf: false }
    ],
    abstract: "Spatio-Temporal Scene Graphs (STSGs) model dynamic visual relationships over time. However, real-world visual relationships exhibit severe long-tailed bias, causing standard Video Scene Graph Generation (VidSGG) and Anticipation (SGA) models to over-predict dominant head predicates. We present ImparTail, an architectural-free framework combining loss-masking and curriculum learning that suppresses head-class dominance and amplifies tail representation. We also introduce two new benchmarks: Robust Spatio-Temporal Scene Graph Generation and Anticipation under adversarial input corruptions.",
    links: {
      arxiv: "https://arxiv.org/abs/2411.13059",
      pdf: "https://arxiv.org/pdf/2411.13059",
      bibtex: `@inproceedings{peddi2025towards,
  title={Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation},
  author={Peddi, Rohith and Saurabh and Shrivastava, Ayush Abhay and Singla, Parag and Gogate, Vibhav},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2025}
}`
    },
    telemetry: [
      { label: "acceptance", value: "Top 3% Highlight" },
      { label: "tail mR@50", value: "+52% relative" },
      { label: "robustness", value: "+23% under shifts" },
      { label: "submissions", value: "13,000+ papers" }
    ],
    evaluationBars: [
      { label: "tail-class Mean Recall@50", value: "+52% (relative)", percentage: 92 },
      { label: "corruption robustness gain", value: "+23% (mR@50)", percentage: 86 },
      { label: "review score percentile", value: "Top 3% Highlight", percentage: 97 }
    ],
    figures: [
      {
        id: "overview",
        tab: "Architecture",
        title: "ImparTail Architecture & Curriculum Loss Masking",
        src: "/assets/impartail_overview.png",
        caption: "ImparTail end-to-end framework: combines Object Representation Processing (ORPU) and Spatio-Temporal Context Processing (STPU) with curriculum-driven loss masking to prevent head-class gradient saturation."
      },
      {
        id: "recall",
        tab: "Recall Gains",
        title: "Unbiased Benchmark Evaluation on Action Genome",
        src: "/assets/impartail_recall.png",
        caption: "Recall vs Mean Recall comparison on Action Genome. ImparTail achieves superior balanced performance across both frequent head predicates and ultra-rare tail predicates."
      },
      {
        id: "task",
        tab: "Task",
        title: "Spatio-Temporal Scene Graph Formulation",
        src: "/assets/impartail_task.png",
        caption: "Comparing VidSGG (detecting observed spatio-temporal relationships) with SGA (anticipating future dynamic human-object interactions across temporal horizons)."
      },
      {
        id: "motivation",
        tab: "Motivation",
        title: "Long-Tail Relationship Imbalance",
        src: "/assets/impartail_motivation.png",
        caption: "Severe skew in relationship predicates in dynamic video datasets, illustrating the tail-class collapse in un-masked estimators."
      }
    ],
    tags: ["CVPR 2025", "VidSGG", "Scene Graph Anticipation", "Curriculum Learning", "Loss Masking", "PyTorch"]
  }
];

export const projectsData = [
  {
    id: "humanoid-challenge",
    title: "Real-to-Sim Robot Manipulation via Vision-Language-Action Policy",
    subtitle: "End-to-End Egocentric Video Retargeting to 7-DoF Franka Panda & SmolVLA in MuJoCo",
    featured: true,
    category: "Robotics & Computer Vision",
    date: "Sept 2026 – Oct 2026",
    links: {
      github: "https://github.com/AyushS15/Humanoid-challenge"
    },
    tags: [
      "RoboSuite",
      "MuJoCo",
      "SmolVLA",
      "CoTracker3",
      "Franka Panda 7-DoF",
      "SigLIP",
      "PyTorch",
      "Real-to-Sim"
    ],
    summary: "Built an end-to-end AI and robotics pipeline retargeting unstructured egocentric smartphone videos of human manipulation into high-fidelity 7-DoF Franka Panda trajectories in MuJoCo. Solved hand-object occlusion failures using CoTracker3 dense point tracking and co-motion correlation (ρ > 0.55), and fine-tuned a 450M parameter SmolVLA policy for autonomous closed-loop execution.",
    telemetry: [
      { label: "lift outcome", value: "7.2cm [SUCCESS]" },
      { label: "point tracking", value: "CoTracker3 Dense" },
      { label: "action chunk", value: "K = 5 horizon" },
      { label: "wrist approach", value: "0° (squared)" }
    ],
    evaluationBars: [
      { label: "closed-loop lift height", value: "7.2 cm [SUCCESS]", percentage: 95 },
      { label: "co-motion correlation latch", value: "ρ > 0.55 threshold", percentage: 92 },
      { label: "contact friction coefficient", value: "μ = 2.0 (hollow tumbler)", percentage: 90 },
      { label: "action chunking horizon", value: "K = 5 steps", percentage: 85 }
    ],
    media: [
      {
        id: "side_by_side",
        tab: "Live Side-by-Side Demo",
        title: "Real-to-Sim Franka Panda Retargeting",
        src: "/assets/humanoid_side_by_side.gif",
        badge: "Live Side-by-Side Execution",
        caption: "Left: 6-second egocentric smartphone video of a human grasping a steel tumbler. Right: Retargeted Franka Panda arm autonomously executing the grasp and lift in RoboSuite / MuJoCo."
      },
      {
        id: "cv_approaches",
        tab: "Tracking Evolution",
        title: "Hand Tracking Preprocessing Benchmark",
        src: "/assets/humanoid_3_approaches.gif",
        badge: "Computer Vision Benchmark",
        caption: "Comparison of 3 landmark tracking approaches (letterbox, cropped frame, and hybrid fallback) prior to adopting CoTracker3 dense point tracking to overcome line-of-sight occlusion."
      }
    ]
  },
  {
    id: "object-centric-learning",
    title: "Object-Centric Learning with Latent Diffusion Models",
    subtitle: "Unsupervised Scene Disentanglement on CLEVRTex",
    category: "Deep Learning & Generative Modeling",
    date: "Apr 2024 – May 2024",
    advisor: "Prof. Parag Singla (IIT Delhi)",
    metricBadge: "3x Gain (0.65 ARI)",
    links: {
      github: "https://github.com/AyushS15/COL775-A2-Object-Centric-learning"
    },
    tags: ["Slot Attention", "Latent Diffusion", "UNet", "Transformers", "CLEVRTex", "PyTorch"],
    summary: "Benchmarked Slot Attention on CLEVRTex (baseline 0.25 ARI) and designed a slot-conditioned Latent Diffusion Model as a modular UNet with alternating residual and transformer cross-attention blocks, boosting unsupervised disentanglement by ~3x to 0.65 ARI.",
    bullets: [
      "Benchmarked Slot Attention on CLEVRTex dataset for unsupervised object disentanglement, establishing a baseline Adjusted Rand Index (ARI) of 0.25.",
      "Designed a slot-conditioned Latent Diffusion Model, boosting performance by ~3x (to 0.65 ARI).",
      "Implemented diffusion model as UNet with alternating residual convolutional blocks and transformer cross-attention."
    ]
  },
  {
    id: "automated-math-seq2seq",
    title: "Automated Math Problem Solving with Seq2Seq Models",
    subtitle: "Translating Word Problems to Executable Mathematical Formulas",
    category: "Natural Language Processing",
    date: "Mar 2024 – Apr 2024",
    advisor: "Prof. Parag Singla (IIT Delhi)",
    metricBadge: "81% Exec Acc",
    links: {
      github: "https://github.com/AyushS15/COL775-A1-Seq2Seq"
    },
    tags: ["BERT", "Bi-LSTM", "Bahdanau Attention", "Beam Search", "PyTorch", "NLP"],
    summary: "Engineered deep sequence-to-sequence networks to automatically parse natural language math word problems into valid equation sequences evaluated in a runtime sandbox. Reached 78% exact match and 81% execution accuracy via BERT encoder fine-tuning.",
    bullets: [
      "Developed Seq2Seq models to generate and solve complex math formulas from word problems using an evaluator.",
      "Used Bi-LSTM with GloVe embeddings and Bahdanau attention, achieving 67% exact match and 73% execution accuracy through beam search decoding.",
      "Finetuned BERT as encoder to get 78% exact match and 81% execution accuracy."
    ]
  },
  {
    id: "gnn-node-classification",
    title: "Graph Neural Networks for Node Classification",
    subtitle: "Hybrid GraphSAGE & Heterogeneous Graph Architectures",
    category: "Graph Machine Learning",
    date: "June 2026",
    metricBadge: "0.88 ROC-AUC",
    links: {
      github: "https://github.com/AyushS15/COL761-A2-GNNs"
    },
    tags: ["PyTorch Geometric", "GraphSAGE", "Heterogeneous GNNs", "Node Classification"],
    summary: "Built a hybrid GraphSAGE-MLP achieving 0.88 ROC-AUC (+15% gain) via multi-path neighborhood aggregation and implemented heterogeneous GNNs for bipartite user-product graphs (10k+ nodes) reaching 0.85 Weighted F1.",
    bullets: [
      "Built hybrid GraphSAGE-MLP achieving 0.88 ROC-AUC (+15% gain) via multi-path aggregation.",
      "Implemented heterogeneous GNN for bipartite user product graphs (10k+ nodes), reaching 0.85 Weighted F1."
    ]
  },
  {
    id: "detr-foggy-cityscapes",
    title: "Object Detection on Foggy Cityscapes Dataset",
    subtitle: "Robust Detection Under Dense Environmental Degradation",
    category: "Computer Vision",
    date: "June 2026",
    metricBadge: "+10% mAP (Fog)",
    links: {
      github: "https://github.com/AyushS15/COL780-A3-DETR"
    },
    tags: ["Deformable DETR", "Grounding DINO", "PEFT", "Adverse Weather"],
    summary: "Fine-tuned Deformable DETR components on Foggy Cityscapes, boosting mAP by ~10% over the baseline under adverse weather conditions, and implemented Parameter-Efficient Fine-Tuning (PEFT) on Grounding DINO with < 1% trainable parameters.",
    bullets: [
      "Fine-tuned Deformable DETR components on Foggy Cityscapes, boosting mAP by ~10% over baseline.",
      "Implemented PEFT on Grounding DINO with < 1% trainable parameters, achieving 33.8% mAP."
    ]
  }
];

export const experienceData = [
  {
    role: "Software Engineer 1",
    company: "LG Ad Solutions",
    location: "Bangalore, India",
    date: "Aug 2025 – Aug 2026",
    badge: "Industry",
    bullets: [
      "Drove Infrastructure as Code (IaC) via Terraform and Atmos for AWS infrastructure, reducing deployment time by 20%.",
      "Built a resilient serverless pipeline using AWS Batch and EventBridge for heavy asynchronous simulation workloads, replacing Knative.",
      "Benchmarked on-premises compute clusters and led hardware migration, driving a 4x throughput increase across CPU, memory, and disk.",
      "Executed minimal-downtime migration of critical on-premises services to AWS, orchestrating live database transitions, DNS cutovers, and replication of over 1TB of S3 object storage."
    ]
  },
  {
    role: "Student Researcher",
    company: "Data Analytics and Intelligence Research (DAIR) Group, IIT Delhi",
    location: "New Delhi, India",
    date: "Aug 2024 – Sept 2026",
    advisor: "Prof. Parag Singla & Prof. Vibhav Gogate",
    badge: "Research",
    projects: [
      {
        title: "Evaluating Video World Models on Long-Tail & OOD Events",
        date: "Aug 2025 – Sept 2026",
        bullets: [
          "Curated a specialized benchmark of rare procedural errors and physical mishaps, isolating pre-event context and Point-of-No-Return (PNR) boundary frames across CaptainCook and OOPS datasets.",
          "Evaluated video world models (Wan 2.2, Cosmos 3, PixVerse) on forecasting rare, out-of-distribution trajectories via post-PNR continuation across zero-shot and conditioned settings.",
          "Assessed whether models accurately simulate physical failure dynamics (contact mechanics, object permanence) versus reverting to nominal outcomes."
        ]
      },
      {
        title: "Temporal Logic Rule Extraction for Video Scene Understanding",
        date: "Dec 2024 – Aug 2025",
        bullets: [
          "Engineered a neuro-symbolic pipeline using Chat-UniVi and LongVU to parse long videos into formal logic templates.",
          "Deployed DeepSeek-R1 to mine 100k+ temporal rules with ~90% precision across the Action Genome dataset.",
          "Integrated rules as logic priors into Probabilistic Scene Graph (PSG) inference, enforcing 10–15 constraints per video to penalize invalid transitions and guarantee structural consistency."
        ]
      },
      {
        title: "Unbiased & Robust Spatio-Temporal Scene Understanding ('ImparTail')",
        date: "Aug 2024 – Dec 2024",
        bullets: [
          "Designed 'ImparTail', accepted as a Highlight Paper at CVPR 2025 (Top 3% of 13k+ submissions), addressing long-tail distribution bias in video scene graph generation and anticipation.",
          "Boosted tail-class Mean Recall@50 by ~52% (relative) via curriculum learning with dynamic loss masking.",
          "Defined Robust Scene Graph Generation & Anticipation evaluation benchmarks, elevating corruption Mean Recall@50 by ~23%."
        ]
      }
    ]
  },
  {
    role: "AI Research Intern",
    company: "Sekant Security",
    location: "Remote",
    date: "Mar 2025 – June 2025",
    badge: "Research Intern",
    bullets: [
      "Conducted ablation studies across YOLO, EfficientFormer, and MobileFormer, establishing object detection as the superior paradigm for robust phishing defense.",
      "Optimized Phishpedia with a Hybrid CNN-Transformer backbone, achieving a 2x inference speedup on the Phish-30K benchmark while maintaining 99.2% precision."
    ]
  },
  {
    role: "Engineering Intern",
    company: "Eightfold.ai",
    location: "Noida, India",
    date: "May 2024 – July 2024",
    badge: "Industry Intern",
    bullets: [
      "Engineered bulk profile ingestion services, reducing data processing latency by ~15% for high-volume enterprise datasets.",
      "Built automated Pytest pipelines for NLP parsers, cutting testing execution time by ~20% and ensuring strict API integrity."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of California, Los Angeles (UCLA)",
    location: "Los Angeles, CA",
    date: "Sept 2026 – June 2028 (expected)",
    status: "Incoming Student",
    badge: "UCLA MSCS",
    summary: "Incoming graduate student focusing on Computer Vision, Robot Policy Learning, World Models, and Neuro-symbolic AI."
  },
  {
    degree: "Bachelor of Technology in Electrical Engineering",
    minor: "Minor Specialization in Computer Science",
    institution: "Indian Institute of Technology (IIT), Delhi",
    location: "New Delhi, India",
    date: "Graduated 2025",
    status: "Graduated",
    badge: "IIT Delhi",
    summary: "Major in Electrical Engineering, Minor in Computer Science. Undergraduate thesis on unbiased spatio-temporal scene graph generation advised by Prof. Parag Singla & Prof. Vibhav Gogate."
  }
];

export const skillsData = {
  stackJson: {
    daily: ["python", "c++", "pytorch", "git", "mujoco"],
    now: ["vla models", "video world models", "neuro-symbolic ai"],
    habit: "paper -> code -> why?",
    shell: "zsh / linux"
  },
  categories: [
    {
      name: "Languages",
      skills: ["Python", "C/C++", "Java", "Golang", "SQL", "JavaScript", "MATLAB"]
    },
    {
      name: "ML & AI Frameworks",
      skills: [
        "PyTorch",
        "PyTorch Geometric",
        "TensorFlow",
        "ONNX",
        "OpenCV",
        "Ollama",
        "vLLM",
        "NumPy",
        "Pandas",
        "Hugging Face (Transformers, LeRobot)"
      ]
    },
    {
      name: "Robotics & Simulation",
      skills: ["MuJoCo", "RoboSuite", "CoTracker3", "MediaPipe", "SmolVLA", "Real-to-Sim Retargeting"]
    },
    {
      name: "Cloud, Infrastructure & DevOps",
      skills: [
        "AWS (S3, Batch, EventBridge, Aurora, DocumentDB, ElastiCache, MSK)",
        "Terraform",
        "Atmos",
        "Kubernetes",
        "Docker",
        "Kafka",
        "CI/CD (Jenkins, GitHub Actions)",
        "ArgoCD",
        "Ansible",
        "Rundeck"
      ]
    }
  ]
};

export const courseworkData = {
  math: [
    "Probability & Stochastic Processes",
    "Linear Algebra & Differential Equations",
    "Calculus & Optimization"
  ],
  cs: [
    "Data Structures & Algorithms",
    "Analysis & Design of Algorithms",
    "Deep Learning",
    "Machine Learning",
    "Computer Vision",
    "Data Mining",
    "Database Management Systems",
    "Computer Architecture"
  ]
};

export const awardsData = [
  {
    title: "CVPR 2025 Highlight Paper",
    org: "IEEE/CVF CVPR 2025",
    date: "2025",
    desc: "Recognized as a Highlight paper (Top 3% of 13,000+ submissions) for our work on unbiased spatio-temporal scene graph generation (ImparTail)."
  },
  {
    title: "CVPR Travel Support Award",
    org: "Computer Vision Foundation",
    date: "2025",
    desc: "Selected as one of just 276 global awardees for a highly competitive international conference travel grant."
  },
  {
    title: "Joint Entrance Examination (JEE Advanced)",
    org: "IIT Joint Admission Board",
    date: "2021",
    desc: "Achieved All India Rank 472 among 200,000+ top-ranked students nationwide."
  },
  {
    title: "Joint Entrance Examination (JEE Main)",
    org: "National Testing Agency",
    date: "2021",
    desc: "Achieved All India Rank 823 among 1.1 Million+ candidates nationwide."
  }
];
