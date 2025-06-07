const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Save a new message
router.post('/save', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Message saving failed' });
  }
});

// Get all messages (optional: for admin or analytics)
router.get('/all', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

module.exports = router;
