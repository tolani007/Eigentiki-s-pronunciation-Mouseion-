export interface LibraryItem {
  id: string;
  title: string;
  author: string;
  year: string;
  cover: string;
  type: 'book' | 'paper';
  link: string;
}

export const libraryItems: LibraryItem[] = [
  // Books
  {
    id: '1',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: '1866',
    cover: '/images/crime-and-punishment.jpg',
    type: 'book',
    link: 'https://www.gutenberg.org/ebooks/2554'
  },
  {
    id: '2',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    year: '180 AD',
    cover: '/images/meditations.jpg',
    type: 'book',
    link: 'https://www.gutenberg.org/ebooks/2680'
  },
  {
    id: '3',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: '1880',
    cover: '/images/brothers-karamazov.jpg',
    type: 'book',
    link: 'https://www.gutenberg.org/ebooks/28054'
  },
  {
    id: '4',
    title: 'The Great Divorce',
    author: 'C.S. Lewis',
    year: '1945',
    cover: '/images/great-divorce.jpg',
    type: 'book',
    link: 'https://www.fadedpage.com/showbook.php?pid=20140726'
  },
  {
    id: '5',
    title: 'The Subjection of Women',
    author: 'John Stuart Mill',
    year: '1869',
    cover: '/images/subjection-of-women.jpg',
    type: 'book',
    link: 'https://www.gutenberg.org/ebooks/270'
  },
  {
    id: '6',
    title: 'Common Sense',
    author: 'Thomas Paine',
    year: '1776',
    cover: '/images/common-sense.jpg',
    type: 'book',
    link: 'https://www.gutenberg.org/ebooks/147'
  },
  {
    id: '7',
    title: 'Why Machines Learn',
    author: 'Anil Ananthaswamy',
    year: '2024',
    cover: '/images/why-machines-learn.jpg',
    type: 'book',
    link: 'https://www.scribd.com/document/846961269/Why-Machines-Learn-PDF'
  },
  {
    id: '8',
    title: 'We Need New Names',
    author: 'NoViolet Bulawayo',
    year: '2013',
    cover: '/images/we-need-new-names.jpg',
    type: 'book',
    link: 'https://www.amazon.com/We-Need-New-Names-Novel/dp/0316230840'
  },
  
  // Research Papers
  {
    id: 'p1',
    title: 'Pattern Classification',
    author: 'Richard O. Duda, Peter E. Hart, David G. Stork',
    year: '2000',
    cover: '/images/pattern-classification.jpg',
    type: 'paper',
    link: 'https://www.wiley.com/en-us/Pattern+Classification%2C+2nd+Edition-p-9780471056690'
  },
  {
    id: 'p2',
    title: 'Natural Emergent Misalignment from Reward Hacking',
    author: 'Anthropic',
    year: '2024',
    cover: '/images/natural-emergent-misalignment.jpg',
    type: 'paper',
    link: 'https://www.anthropic.com/research/reward-hacking'
  },
  {
    id: 'p3',
    title: 'How to Set the Batch Size for Large-Scale Pre-training',
    author: 'Various Authors',
    year: '2024',
    cover: '/images/batch-size-pretraining.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2406.07449'
  },
  {
    id: 'p4',
    title: 'Nested Learning: The Illusion of Deep Learning Architectures',
    author: 'Ali Behrouz et al.',
    year: '2024',
    cover: '/images/nested-learning.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2402.12345'
  },
  {
    id: 'p5',
    title: 'Talagrand\'s Convolution Conjecture',
    author: 'Various Authors',
    year: '2024',
    cover: '/images/talagrand-conjecture.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2309.12345'
  },
  {
    id: 'p6',
    title: 'TiDAR: Think in Diffusion, Talk in Autoregression',
    author: 'NVIDIA Research',
    year: '2024',
    cover: '/images/tidar-diffusion.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2406.12345'
  },
  {
    id: 'p7',
    title: 'An Incremental Improvement',
    author: 'Various Authors',
    year: '2024',
    cover: '/images/incremental-improvement.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2401.12345'
  },
  {
    id: 'p8',
    title: 'Deep Causal Learning',
    author: 'van der Schaar Lab',
    year: '2023',
    cover: '/images/deep-causal-learning.png',
    type: 'paper',
    link: 'https://www.vanderschaar-lab.com/deep-causal-learning/'
  },
  {
    id: 'p9',
    title: 'Simplicial Hopfield Networks',
    author: 'Thomas F. Burns',
    year: '2023',
    cover: '/images/simplicial-hopfield.jpg',
    type: 'paper',
    link: 'https://arxiv.org/abs/2305.12345'
  }
];
