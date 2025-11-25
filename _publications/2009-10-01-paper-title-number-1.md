---
title: "Towards Unbiased and Robust Spatio-Temporal Scene Graph Generation and Anticipation"
collection: publications
category: conferences
permalink: /publication/2025-cvpr-impartail
excerpt: 'We introduce "ImparTail",  a curriculum-learning framework that fixes bias in Scene Graph Generation using loss-masking'
date: 2025-02-01
venue: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition '
# slidesurl: 'https://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2411.13059'
bibtexurl: 'https://arxiv.org/bibtex/2411.13059'
citation: '<i>Rohith Peddi, Saurabh, Ayush Abhay Shrivastava, Parag Singla, Vibhav Gogate</i>'
---
Modern scene graph generation models achieve high accuracy but remain fragile, often failing on rare "tail" classes and under environmental shifts. In this work, we introduce **ImparTail**, a training framework that ensures reliability where it matters most.

**Key Contributions:**
* **🏆 CVPR 2025 Highlight:** Selected as a top 10% paper for significant contributions to fair and robust video understanding.
* **The "ImparTail" Framework:** We developed a novel curriculum learning approach with dynamic loss-masking. This forces the model to learn "hard" tail classes rather than just overfitting to dominant head classes.
* **New Benchmarks:** We introduced two new tasks—*Robust Spatio-Temporal Scene Graph Generation* and *Robust Scene Graph Anticipation*—evaluating performance across **16 diverse corruption types** (e.g., fog, frost, sun glare).
* **Results:** Our approach achieves state-of-the-art unbiased metrics on the Action Genome dataset, proving that we can improve robustness without sacrificing accuracy.
