
const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Endpoint to register a new patient
router.post('/register', async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
