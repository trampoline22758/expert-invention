import { Code, Palette, Rocket, Smartphone, Layers, Cpu, Globe, Zap } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Overview', href: '#home' },
  { name: 'Expertise', href: '#services' },
  { name: 'Methodology', href: '#process' },
  { name: 'Work', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating cohesive visual systems with strict adherence to typographic scales and spatial rhythms.'
  },
  {
    icon: Code,
    title: 'Frontend Architecture',
    description: 'Building scalable React applications with a focus on component modularity and type safety.'
  },
  {
    icon: Smartphone,
    title: 'Interaction Design',
    description: 'Designing gesture-based interactions that feel fluid, responsive, and physically grounded.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing render cycles and bundle sizes to ensure 60fps performance on all devices.'
  }
];

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Discovery',
    description: 'Deconstructing the problem space through rigorous analysis and user-centric research.',
    icon: Globe
  },
  {
    id: '02',
    title: 'Architecture',
    description: 'Designing resilient component systems and data flows before a single line of code is written.',
    icon: Layers
  },
  {
    id: '03',
    title: 'Development',
    description: 'Implementing pixel-perfect interfaces with clean, semantic, and performant code.',
    icon: Cpu
  },
  {
    id: '04',
    title: 'Refinement',
    description: 'Polishing micro-interactions and animations to achieve a "native-feel" on the web.',
    icon: Zap
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Miss Kim\'s Dance Class',
    category: 'Education',
    link: 'https://misskimsdanceclass.com',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop', // Ballet/Dance aesthetic
    description: 'A rhythmic, accessible platform for dance education featuring fluid animations and streamlined class scheduling.'
  },
  {
    id: 2,
    title: 'Marigolds',
    category: 'Lifestyle',
    link: 'https://marigolds.vercel.app',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop', // Minimal flower/lifestyle aesthetic
    description: 'A minimal, aesthetic web application built for simplicity, focusing on white space and typography.'
  },
  {
    id: 3,
    title: 'Neon Nexus',
    category: 'Experiment',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', // Cyberpunk/Tech aesthetic
    description: 'A WebGL-powered dashboard experiment exploring the boundaries of browser-based 3D rendering.'
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are Lumina, a specialized AI assistant for a Senior Interface Engineer's portfolio.
Your role is to act as a knowledgeable guide for visitors, answering questions about the engineer's skills, experience, and design philosophy.

Key Expertise:
- Visual Design: Creating cohesive visual systems, typographic scales, and spatial rhythms.
- Frontend Architecture: Building scalable React applications with type safety (TypeScript).
- Interaction Design: Fluid, gesture-based interactions.
- Performance: Optimizing for 60fps and small bundle sizes.

Featured Work:
- Miss Kim's Dance Class (Education): Fluid animations.
- Marigolds (Lifestyle): Minimal aesthetic.
- Neon Nexus (Experiment): WebGL dashboard.

Tone and Style:
- Professional, articulate, and concise.
- Use design and engineering terminology accurately.
- Be helpful and polite.

If asked about contact, direct them to the contact form or email (anjneykumar@gmail.com).`;