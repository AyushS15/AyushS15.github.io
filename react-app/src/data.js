export const personalInfo = {
  name: "Ayush Abhay Shrivastava",
  role: "Incoming M.S. CS @ UCLA • AI Researcher & Software Engineer",
  tagline: "Building Robust, Unbiased, and Safe AI Systems for Vision, World Models & Robotics",
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
    "I am an incoming Master of Science in Computer Science student at UCLA (Sept 2026 – June 2028), passionate about solving the fragility of deep neural networks under distributional shifts, rare 'tail' anomalies, and safety-critical physical constraints.",
    "Previously, I worked as a Software Engineer at LG Ad Solutions building large-scale distributed cloud and simulation pipelines. Before that, I graduated from the Indian Institute of Technology (IIT), Delhi with a major in Electrical Engineering and a minor in Computer Science.",
    "My research spans spatio-temporal scene understanding, neuro-symbolic reasoning with temporal logic priors, and real-to-sim manipulation via Vision-Language-Action (VLA) policies. Recently, our paper on debiasing spatio-temporal scene graph generation—'ImparTail'—was accepted as a Highlight Paper (Top 3% of 13,000+ submissions) at IEEE/CVF CVPR 2025."
  ]
};

export const publicationsData = [
  {
    id: "impartail",
    title: "Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)",
    badge: "Highlight Paper • Top 3% of 13,000+ Submissions",
    date: "CVPR 2025",
    authors: [
      { name: "Rohith Peddi", isSelf: false },
      { name: "Saurabh", isSelf: false },
      { name: "Ayush Abhay Shrivastava", isSelf: true },
      { name: "Parag Singla", isSelf: false },
      { name: "Vibhav Gogate", isSelf: false }
    ],
    abstract: "Spatio-Temporal Scene Graphs (STSGs) model dynamic scenes by representing objects and their evolving relationships. However, real-world visual relationships exhibit severe long-tailed bias, causing existing Video Scene Graph Generation (VidSGG) and Scene Graph Anticipation (SGA) models to over-predict dominant head predicates. We present ImparTail, an architectural-free framework combining loss-masking and curriculum learning that suppresses head-class dominance and amplifies tail representation. We also formulate two new benchmarks: Robust Spatio-Temporal Scene Graph Generation and Anticipation under adversarial input corruptions.",
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
    metrics: [
      { label: "Acceptance Tier", value: "Top 3% Highlight" },
      { label: "Tail Mean Recall@50", value: "+52% Relative Gain" },
      { label: "Robustness Gain", value: "+23% under Corruptions" },
      { label: "Submissions", value: "13,000+ Reviewed" }
    ],
    figures: [
      {
        id: "overview",
        title: "ImparTail Architecture & Curriculum Masking",
        src: "/assets/impartail_overview.png",
        caption: "ImparTail end-to-end framework: combines Object Representation Processing (ORPU) and Spatio-Temporal Context Processing (STPU) with curriculum-driven loss masking to prevent head-class gradient saturation."
      },
      {
        id: "task",
        title: "Spatio-Temporal Scene Graph Formulation",
        src: "/assets/impartail_task.png",
        caption: "Comparing VidSGG (detecting observed spatio-temporal relationships) with SGA (anticipating future dynamic human-object interactions across temporal horizons)."
      },
      {
        id: "recall",
        title: "Unbiased Benchmark Evaluation",
        src: "/assets/impartail_recall.png",
        caption: "Detailed Recall vs Mean Recall comparison on Action Genome. ImparTail achieves superior balanced performance across both common and ultra-rare predicate categories."
      },
      {
        id: "motivation",
        title: "Long-Tail Relationship Imbalance",
        src: "/assets/impartail_motivation.png",
        caption: "Skewed distribution of relationship predicates in video datasets, illustrating the severe tail-class degradation in conventional models."
      }
    ],
    highlights: [
      "Accepted as a Highlight Paper at CVPR 2025 (selected among the top 3% of over 13,000 submissions).",
      "Introduced 'ImparTail': a novel curriculum-guided dynamic loss-masking approach without requiring extra network parameters.",
      "Established two new industry-grade evaluation benchmarks: Robust Video Scene Graph Generation and Robust Scene Graph Anticipation under standard image corruptions.",
      "Achieved state-of-the-art unbiased performance on the Action Genome benchmark, boosting tail-class Mean Recall@50 by ~52% (relative)."
    ]
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
    summary: "Built an end-to-end AI and robotics pipeline that retargets unstructured egocentric smartphone videos of everyday human grasping into high-fidelity 7-DoF Franka Panda manipulation trajectories in MuJoCo, and trains a 450M parameter SmolVLA policy for closed-loop autonomous execution.",
    media: [
      {
        title: "Real-to-Sim Retargeting (Vid_0 Demo)",
        src: "/assets/humanoid_side_by_side.gif",
        badge: "Live Side-by-Side Execution",
        caption: "Left: 6-second egocentric smartphone video of a person picking up a steel glass. Right: Retargeted 7-DoF Franka Panda arm autonomously executing the grasp and lift in RoboSuite/MuJoCo."
      },
      {
        title: "Tracking Preprocessing Evolution",
        src: "/assets/humanoid_3_approaches.gif",
        badge: "Computer Vision Benchmark",
        caption: "Comparison of 3 hand tracking preprocessing approaches (letterboxing, cropping, and hybrid fallback) prior to adopting CoTracker3 dense surface point tracking to eliminate line-of-sight occlusion."
      }
    ],
    keyResults: [
      { label: "Closed-Loop Success", value: "7.2cm Lift & Place" },
      { label: "Tracking Precision", value: "Dense CoTracker3" },
      { label: "Action Horizon", value: "K = 5 Chunking" },
      { label: "Simulator", value: "MuJoCo / RoboSuite" }
    ],
    bullets: [
      "Built an end-to-end real-to-sim pipeline retargeting egocentric human smartphone videos into 7-DoF Franka Panda manipulation trajectories in MuJoCo.",
      "Resolved severe hand-object occlusion failures during cylindrical grasping by replacing fragile skeletal landmark heuristics with CoTracker3 dense point tracking and co-motion correlation (ρ > 0.55).",
      "Engineered physical digital twin parameters: adjusted hollow steel tumbler density to 450 kg/m³ (~120g mass), increased contact friction to μ = 2.0, and squared wrist approach from 45° to 0° to achieve the first stable physical lift.",
      "Fine-tuned a Vision-Language-Action policy (SmolVLA, SigLIP-400M visual backbone + flow-matching action expert head), optimizing action chunk horizons (K = 5) and velocity gains for autonomous closed-loop execution."
    ]
  },
  {
    id: "object-centric-learning",
    title: "Object-Centric Learning with Latent Diffusion Models",
    subtitle: "Unsupervised Scene Disentanglement on CLEVRTex",
    category: "Deep Learning & Generative Modeling",
    date: "Apr 2024 – May 2024",
    advisor: "Prof. Parag Singla (IIT Delhi)",
    links: {
      github: "https://github.com/AyushS15/COL775-A2-Object-Centric-learning"
    },
    tags: ["Slot Attention", "Latent Diffusion", "UNet", "Transformers", "CLEVRTex", "PyTorch"],
    summary: "Explored slot-conditioned generative representations for complex visual scenes, drastically outperforming standard reconstruction baselines.",
    bullets: [
      "Benchmarked Slot Attention on the complex CLEVRTex texture dataset for unsupervised object disentanglement, establishing a baseline Adjusted Rand Index (ARI) of 0.25.",
      "Designed and trained a slot-conditioned Latent Diffusion Model, boosting object separation performance by ~3x (reaching 0.65 ARI).",
      "Implemented the diffusion architecture as a modular UNet incorporating alternating residual convolutional blocks and multi-head transformer cross-attention layers."
    ]
  },
  {
    id: "automated-math-seq2seq",
    title: "Automated Math Problem Solving with Seq2Seq Models",
    subtitle: "Translating Natural Language Word Problems into Executable Mathematical Equations",
    category: "Natural Language Processing",
    date: "Mar 2024 – Apr 2024",
    advisor: "Prof. Parag Singla (IIT Delhi)",
    links: {
      github: "https://github.com/AyushS15/COL775-A1-Seq2Seq"
    },
    tags: ["BERT", "Bi-LSTM", "Bahdanau Attention", "Beam Search", "PyTorch", "NLP"],
    summary: "Engineered deep sequence-to-sequence networks to automatically parse diverse math word problems into valid equation sequences evaluated in a runtime sandbox.",
    bullets: [
      "Developed Seq2Seq architectures to generate and solve complex mathematical expressions from natural language word problems.",
      "Built a Bi-LSTM network with GloVe word embeddings and Bahdanau attention, reaching 67% exact match and 73% execution accuracy using beam search decoding.",
      "Fine-tuned a pretrained BERT encoder, elevating performance to 78% exact match and 81% execution accuracy."
    ]
  },
  {
    id: "gnn-node-classification",
    title: "Graph Neural Networks for Node Classification",
    subtitle: "Hybrid GraphSAGE & Heterogeneous Graph Architectures",
    category: "Graph Machine Learning",
    date: "June 2026",
    links: {
      github: "https://github.com/AyushS15/COL761-A2-GNNs"
    },
    tags: ["Graph Neural Networks", "PyTorch Geometric", "GraphSAGE", "Heterogeneous Graphs"],
    summary: "Constructed deep graph models for multi-hop neighbor aggregation and multi-relational graphs.",
    bullets: [
      "Built a hybrid GraphSAGE-MLP pipeline achieving 0.88 ROC-AUC (+15% relative gain) via dynamic multi-path neighbor feature aggregation.",
      "Implemented a heterogeneous GNN for bipartite user-product interaction networks (10,000+ nodes), achieving 0.85 Weighted F1."
    ]
  },
  {
    id: "detr-foggy-cityscapes",
    title: "Object Detection on Foggy Cityscapes Dataset",
    subtitle: "Robust Detection under Severe Adverse Weather",
    category: "Computer Vision",
    date: "June 2026",
    links: {
      github: "https://github.com/AyushS15/COL780-A3-DETR"
    },
    tags: ["Deformable DETR", "Grounding DINO", "PEFT", "Cityscapes", "PyTorch"],
    summary: "Evaluated and adapted transformer object detectors under severe environmental degradation.",
    bullets: [
      "Fine-tuned Deformable DETR components on Foggy Cityscapes, boosting detection mAP by ~10% over the baseline under dense fog.",
      "Implemented Parameter-Efficient Fine-Tuning (PEFT) on Grounding DINO with < 1% trainable parameters, achieving 33.8% mAP."
    ]
  }
];

export const experienceData = [
  {
    role: "Software Engineer 1",
    company: "LG Ad Solutions",
    location: "Bangalore, India",
    date: "Aug 2025 – Aug 2026",
    type: "Industry",
    color: "cyan",
    bullets: [
      "Drove Infrastructure as Code (IaC) via Terraform and Atmos for AWS infrastructure, reducing deployment cycle times by 20%.",
      "Built a resilient serverless pipeline using AWS Batch and EventBridge for heavy asynchronous simulation workloads, replacing Knative.",
      "Benchmarked on-premises compute clusters and led bare-metal hardware migration, driving a 4x throughput increase across CPU, memory, and disk.",
      "Executed minimal-downtime migration of critical on-premises services to AWS, orchestrating live database transitions, DNS cutovers, and replication of over 1TB of S3 object storage."
    ]
  },
  {
    role: "Student Researcher (Graduate & Thesis)",
    company: "Data Analytics and Intelligence Research (DAIR) Group, IIT Delhi",
    location: "New Delhi, India",
    date: "Aug 2024 – Sept 2026",
    advisor: "Prof. Parag Singla & Prof. Vibhav Gogate",
    type: "Research",
    color: "blue",
    projects: [
      {
        title: "Evaluating Video World Models on Long-Tail & OOD Events",
        date: "Aug 2025 – Sept 2026",
        bullets: [
          "Curated a specialized benchmark of rare procedural errors and physical mishaps, isolating pre-event context and Point-of-No-Return (PNR) boundary frames across CaptainCook and OOPS datasets.",
          "Evaluated video world models (Wan 2.2, Cosmos 3, PixVerse) on forecasting rare, out-of-distribution trajectories via post-PNR continuation across zero-shot and conditioned settings.",
          "Assessed whether models accurately simulate physical failure dynamics (contact mechanics, momentum, object permanence) versus reverting to nominal, frequent outcomes."
        ]
      },
      {
        title: "Temporal Logic Rule Extraction for Video Scene Understanding",
        date: "Dec 2024 – Aug 2025",
        bullets: [
          "Engineered a neuro-symbolic pipeline using Chat-UniVi and LongVU to parse long videos into formal logic templates.",
          "Deployed DeepSeek-R1 to mine 100k+ temporal logic rules with ~90% precision across the Action Genome dataset.",
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
    type: "Research Internship",
    color: "violet",
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
    type: "Industry Internship",
    color: "green",
    bullets: [
      "Engineered bulk profile ingestion microservices, reducing data processing latency by ~15% for high-volume enterprise datasets.",
      "Built automated Pytest pipelines for NLP parsers, cutting testing execution time by ~20% and ensuring strict API integrity."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of California, Los Angeles (UCLA)",
    location: "Los Angeles, CA",
    date: "Sept 2026 – June 2028",
    status: "Incoming Student",
    badge: "UCLA MS CS",
    highlights: [
      "Focus: Computer Vision, Robotics, AI Safety & Neuro-symbolic Machine Learning"
    ]
  },
  {
    degree: "Bachelor of Technology in Electrical Engineering",
    minor: "Minor Specialization in Computer Science",
    institution: "Indian Institute of Technology (IIT), Delhi",
    location: "New Delhi, India",
    date: "2021 – 2025",
    badge: "IIT Delhi Alum",
    highlights: [
      "Bachelor's Thesis at DAIR Lab advised by Prof. Parag Singla & Prof. Vibhav Gogate",
      "Ranked in top percentiles in National Engineering Examinations (JEE Advanced AIR 472)"
    ]
  }
];

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
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
