const Contact = require('../models/Contact');

// @desc    Submit a contact form message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    let contact;
    try {
      contact = await Contact.create({
        name,
        email,
        subject: subject || 'Portfolio Contact Message',
        message,
      });
      console.log(`[Contact Form Received & Saved to MongoDB] From: ${name} (${email})`);
    } catch (dbErr) {
      console.warn('[MongoDB Warning]: Could not save contact to DB, logging to console:', dbErr.message);
      contact = {
        _id: 'temp-' + Date.now(),
        name,
        email,
        subject: subject || 'Portfolio Contact Message',
        message,
        createdAt: new Date(),
      };
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you shortly.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
};
