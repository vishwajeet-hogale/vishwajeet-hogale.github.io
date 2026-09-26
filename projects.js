// Your projects. Edit this file only, the page updates automatically.
//
// To add a project, copy one { ... } block, paste it below, and change the values.
// To remove one, delete its block. Order here is the order on the page.
//
// Fields:
//   title        Project name (required)
//   subtitle     Optional line under the title, e.g. "Course project" or "In progress"
//   description  One or two sentences about what it does
//   image        Path to a thumbnail, e.g. "images/my-project.png" (grey box if missing)
//   links        Any number of { label, url } pairs, shown as "Code | Demo | Paper"
//   highlight    true gives it a yellow background, like a featured item

window.PROJECTS = [
  {
    title: "AutoClaim AI: Vehicle Damage Segmentation and LLM-Powered Insurance Claims",
    subtitle: "Team project. I trained the segmentation models and designed the LangGraph workflow",
    description: "An end-to-end pipeline that takes a photo of a damaged car, segments the damage at the pixel level (UNet, YOLOv8-seg, and Mask2Former on the CarDD dataset), and turns it into a draft insurance claim. A LangGraph workflow over Gemini, GPT, and Qwen-VL writes the claim letter, damage report, and coverage notes, with a Streamlit app for uploads and LangFuse for tracing each step.",
    image: "images/autoclaim.gif",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/Segment-Damage" },
      { label: "Sample report", url: "https://github.com/vishwajeet-hogale/Segment-Damage/blob/main/reports/autoclaim_report.pdf" }
    ],
    highlight: false
  },

  {
    title: "Hybrid Search Engine for Khoury Research",
    subtitle: "Course project",
    description: "A search engine for Northeastern Khoury research. It scrapes faculty profiles, lab pages, and research topics, then answers natural language questions like \"who works on deep learning?\" with ranked professors and labs. Queries are expanded with related terms from the scraped data, then retrieved with hybrid BM25 plus vector search and reranked. Each stage is compared with Precision@K, Recall@K, and NDCG.",
    image: "images/search-engine.gif",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/RAG-based-Search-Engine" }
    ],
    highlight: false
  },

  {
    title: "Hybrid Scene Encoder for Agent Detection in Autonomous Driving",
    subtitle: "Personal project (in progress)",
    description: "A scene encoder that turns raw LiDAR into a bird's-eye-view representation for detecting cars, pedestrians, and other agents. Point clouds are grouped into pillars, encoded with a PointNet-style network, scattered into a BEV feature map, and processed by a 2D convolutional backbone with a CenterPoint-style center head. Camera features and multi-modal fusion are next.",
    image: "images/hybrid-scene-encoder.gif",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/Hybrid-Scene-Encoder-For-Agent-Detection" }
    ],
    highlight: false
  },

  {
    title: "Transformers From Scratch: ViT and DETR",
    subtitle: "Personal project",
    description: "Hand-written PyTorch implementations of a Vision Transformer (patch embedding, multi-head self-attention, CLS token) and a simplified DETR with learnable object queries, Hungarian matching, and a set-based loss, trained on the CPPE-5 medical PPE dataset.",
    image: "images/transformers-from-scratch.gif",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/Transformers-From-Scratch" }
    ],
    highlight: false
  },

  {
    title: "Thea: Image Captioning on MS COCO",
    subtitle: "Project",
    description: "An encoder-decoder image captioning model trained on MS COCO. A ResNet-101 encoder turns each image into feature maps, and an LSTM decoder with attention generates the caption one word at a time.",
    image: "images/thea-architecture.png",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/Thea/tree/master/image_captioning" }
    ],
    highlight: false
  },

  {
    title: "Music Reconstruction with Genetic Algorithms",
    subtitle: "Team project (6 members)",
    description: "Generates new songs by recombining pieces of existing MIDI files. Tracks are split by instrument and described by pitch, tempo, velocity, and key, then a genetic algorithm evolves candidate songs through mutation, crossover, and a fitness function over 100 generations. Includes a Node.js web app to upload MIDI files, run the evolution, and play back or download the best song.",
    image: "images/music-reconstruction.gif",
    links: [
      { label: "Code", url: "https://github.com/vishwajeet-hogale/Music-Reconstruction" }
    ],
    highlight: false
  }
];
