
const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');

// Endpoint to start a new encounter for a patient
router.post('/start', async (req, res) => {
  try {
    const encounter = await Encounter.create(req.body);
    res.status(201).json(encounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
