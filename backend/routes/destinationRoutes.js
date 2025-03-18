const express = require("express");
const Destination = require("../models/Destination");

const router = express.Router();

router.get("/destinations", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/destinations", async (req, res) => {
  const destination = new Destination(req.body);
  try {
    await destination.save();
    res.status(201).json(destination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
