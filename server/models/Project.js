const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
    },
    techStack: [
      {
        type: String,
        required: true,
      },
    ],
    githubLink: {
      type: String,
      default: '',
    },
    liveDemoLink: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: [true, 'Project image URL is required'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: 'Full Stack',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
