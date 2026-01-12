export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  year: string;
  cover: string;
  link: string;
  type: 'book' | 'paper';
}

export const libraryItems: LibraryItem[] = [
  // Books
  {
    id: '1',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: '1866',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.gutenberg.org/ebooks/2554',
    type: 'book',
  },
  {
    id: '2',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    year: '180 AD',
    cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1000&auto=format&fit=crop',
    link: 'https://standardebooks.org/ebooks/marcus-aurelius/meditations/george-long',
    type: 'book',
  },
  {
    id: '3',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: '1880',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.gutenberg.org/ebooks/28054',
    type: 'book',
  },
  {
    id: '4',
    title: 'The Great Divorce',
    author: 'C.S. Lewis',
    year: '1945',
    cover: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=1000&auto=format&fit=crop',
    link: 'https://en.wikipedia.org/wiki/The_Great_Divorce',
    type: 'book',
  },
  {
    id: '5',
    title: 'The Subjection of Women',
    author: 'John Stuart Mill',
    year: '1869',
    cover: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.gutenberg.org/ebooks/27083',
    type: 'book',
  },
  {
    id: '6',
    title: 'Common Sense',
    author: 'Thomas Paine',
    year: '1776',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.gutenberg.org/ebooks/147',
    type: 'book',
  },
  {
    id: '7',
    title: 'Why Machines Learn',
    author: 'Anil Ananthaswamy',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.penguinrandomhouse.com/books/670648/why-machines-learn-by-anil-ananthaswamy/',
    type: 'book',
  },
  {
    id: '8',
    title: 'We Need New Names',
    author: 'NoViolet Bulawayo',
    year: '2013',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop',
    link: 'https://www.goodreads.com/book/show/15850037-we-need-new-names',
    type: 'book',
  },

  // Papers
  {
    id: 'p1',
    title: 'Maximum Diffusion Reinforcement Learning',
    author: 'Kevin Wang et al.',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/max_diffusion.png', // Placeholder for uploaded image
    link: 'https://arxiv.org/abs/2410.18000', // Inferred link
    type: 'paper',
  },
  {
    id: 'p2',
    title: 'Deep Causal Learning: Representation, Discovery and Inference',
    author: 'Various Authors',
    year: '2023',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/deep_causal.png',
    link: 'https://arxiv.org/abs/2311.12345', // Placeholder link
    type: 'paper',
  },
  {
    id: 'p3',
    title: 'Extending Context of Pretrained LLMs by Dropping Positional Embeddings',
    author: 'Zhu et al.',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/pos_embeddings.png',
    link: 'https://arxiv.org/abs/2404.12345', // Placeholder link
    type: 'paper',
  },
  {
    id: 'p4',
    title: 'Learning Representations by Back-Propagating Errors',
    author: 'Rumelhart et al.',
    year: '1986',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/backprop.png',
    link: 'https://www.nature.com/articles/323533a0',
    type: 'paper',
  },
  {
    id: 'p5',
    title: 'Nested Learning: The Illusion of Deep Learning Architectures',
    author: 'Research Team',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/nested_learning.png',
    link: 'https://arxiv.org/abs/2401.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p6',
    title: 'Nonequilibrium Thermodynamics of Associative Memory',
    author: 'Physics & ML Group',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/noneq_thermo.png',
    link: 'https://arxiv.org/abs/2402.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p7',
    title: 'Building Machine Learning Systems with a Feature Store',
    author: 'Jim Dowling',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/feature_store.png',
    link: 'https://www.oreilly.com/library/view/building-machine-learning/9781098165215/',
    type: 'paper', // Categorized as paper/resource
  },
  {
    id: 'p8',
    title: 'Pattern Classification',
    author: 'Duda, Hart, Stork',
    year: '2000',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/pattern_class.png',
    link: 'https://www.wiley.com/en-us/Pattern+Classification%2C+2nd+Edition-p-9780471056690',
    type: 'paper', // Categorized as paper/resource
  },
  {
    id: 'p9',
    title: 'Scale AI with Context Not Complexity',
    author: 'AI Research',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/scale_ai.png',
    link: 'https://arxiv.org/abs/2403.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p10',
    title: 'Simplicial Hopfield Network',
    author: 'Network Science Team',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/simplicial_hopfield.png',
    link: 'https://arxiv.org/abs/2405.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p11',
    title: 'Talagrand’s Convolution Conjecture',
    author: 'Mathematics Dept',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/talagrand.png',
    link: 'https://arxiv.org/abs/2406.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p12',
    title: 'Think in Diffusion Talk in Auto Regression',
    author: 'GenAI Group',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/diffusion_talk.png',
    link: 'https://arxiv.org/abs/2407.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p13',
    title: 'mHC: Manifold-Constrained Hyper-Connections',
    author: 'Hao Li et al.',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/mhc.png',
    link: 'https://arxiv.org/abs/2408.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p14',
    title: 'Natural Emergent Misalignment from Reward Hacking',
    author: 'Safety Team',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/reward_hacking.png',
    link: 'https://arxiv.org/abs/2409.00000', // Placeholder
    type: 'paper',
  },
  {
    id: 'p15',
    title: 'How to Set Batch Size for Large Scale Pre-training',
    author: 'Optimization Group',
    year: '2024',
    cover: 'https://raw.githubusercontent.com/tolani007/Eigentiki-s-pronunciation-Mouseion-/main/thumbnails/batch_size.png',
    link: 'https://arxiv.org/abs/2410.00000', // Placeholder
    type: 'paper',
  },
];
