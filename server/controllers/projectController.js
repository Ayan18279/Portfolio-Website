const Project = require('../models/Project');

// Fallback sample data in case MongoDB service is not running locally during development
const FALLBACK_PROJECTS = [
  {
    _id: 'sample-1',
    title: 'DevSync - Collaborative Developer Workspace',
    description: 'A real-time collaborative code editor and project dashboard featuring live cursor tracking, video chat integration, and automated CI/CD pipeline monitoring.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/devsync',
    liveDemoLink: 'https://devsync-demo.example.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'Full Stack',
  },
  {
    _id: 'sample-2',
    title: 'FinMetrics - SaaS Analytics Platform',
    description: 'Financial dashboard providing subscription metrics, churn predictions powered by ML models, and automated invoice generation for enterprise clients.',
    techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/finmetrics',
    liveDemoLink: 'https://finmetrics-demo.example.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'SaaS',
  },
  {
    _id: 'sample-3',
    title: 'CloudStore - Microservices E-Commerce',
    description: 'High-performance e-commerce platform with stripe payments, JWT authentication, inventory management admin panel, and instant search indexing.',
    techStack: ['React', 'Express', 'MongoDB', 'Mongoose', 'Redux Toolkit', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/cloudstore',
    liveDemoLink: 'https://cloudstore-demo.example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    category: 'E-Commerce',
  },
  {
    _id: 'sample-4',
    title: 'TaskFlow - Realtime Kanban Workspace',
    description: 'Drag-and-drop project management tool featuring custom workflow columns, team permissions, activity logs, and deadline reminders.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Tailwind CSS'],
    githubLink: 'https://github.com/example/taskflow',
    liveDemoLink: 'https://taskflow-demo.example.com',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    category: 'Productivity',
  },
];

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res, next) => {
  try {
    let projects;
    try {
      projects = await Project.find().sort({ createdAt: -1 });
    } catch (dbErr) {
      console.warn('[MongoDB Warning]: Could not fetch from MongoDB, returning fallback sample data.', dbErr.message);
    }

    if (!projects || projects.length === 0) {
      return res.status(200).json({
        success: true,
        count: FALLBACK_PROJECTS.length,
        source: 'fallback',
        data: FALLBACK_PROJECTS,
      });
    }

    res.status(200).json({
      success: true,
      count: projects.length,
      source: 'database',
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res, next) => {
  try {
    let project = null;
    try {
      project = await Project.findById(req.params.id);
    } catch (dbErr) {
      // Ignore invalid ObjectId cast error when searching fallback
    }

    if (!project) {
      project = FALLBACK_PROJECTS.find((p) => p._id === req.params.id);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
  getProjectById,
};
