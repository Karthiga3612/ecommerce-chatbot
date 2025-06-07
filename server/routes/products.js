const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/search', async (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  try {
    const results = await Product.find({
      $or: [
        { name: new RegExp(query, 'i') },
        { category: new RegExp(query, 'i') }
      ]
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
