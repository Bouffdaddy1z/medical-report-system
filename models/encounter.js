
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  encounterType: { type: String, enum: ['OPD', 'SpecialistCare'], required: true },
  vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spO2: String,
  },
});

module.exports = mongoose.model('Encounter', encounterSchema);
