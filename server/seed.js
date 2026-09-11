const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const sampleProjects = [
  {
    title: 'Cortex AI - Multi-Agent AI Platform',
    description: 'Enterprise-grade microservices AI platform powering specialized autonomous agents for document RAG, web search, code execution, PPT generation, and vision AI. Integrated AWS S3 for asset storage and Razorpay for payment processing across a 4-service microservices architecture with a central gateway.',
    techStack: ['MERN Stack', 'LangGraph', 'Qdrant Vector DB', 'AWS S3', 'Redis', 'Razorpay', 'Microservices'],
    githubLink: 'https://github.com/Ayan18279/CortexAI',
    liveDemoLink: '',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'AI Platform',
  },
  {
    title: 'Interview IQ.AI',
    description: 'AI-driven mock interview and assessment platform developed for the Protex hackathon to help candidates prepare for technical and behavioural interviews. Features real-time dynamic interview question generation with automated feedback analytics and performance scoring.',
    techStack: ['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'AI Integration'],
    githubLink: 'https://github.com/Ayan18279/InterviewIQ.AI',
    liveDemoLink: '',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'AI Platform',
  },
  {
    title: 'KAEVR-AI — Autonomous Cyber SOC',
    description: 'Multi-agent AI system for autonomous threat detection, reasoning, and incident response built with Next.js, FastAPI, LangGraph, OpenSearch, and MITRE ATT&CK framework mappings, containerized with Docker.',
    techStack: ['Next.js', 'FastAPI', 'LangGraph', 'OpenSearch', 'MITRE ATT&CK', 'Docker', 'Python'],
    githubLink: 'https://github.com/Ayan18279/KAEVR-AI',
    liveDemoLink: '',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'Cybersecurity & AI',
  },
];

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';
    console.log(`Connecting to MongoDB at: ${mongoUri}`);
    await mongoose.connect(mongoUri);

    console.log('Clearing existing projects...');
    await Project.deleteMany({});

    console.log('Seeding sample projects...');
    const createdProjects = await Project.insertMany(sampleProjects);

    console.log(`Successfully seeded ${createdProjects.length} projects into MongoDB!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDB();
