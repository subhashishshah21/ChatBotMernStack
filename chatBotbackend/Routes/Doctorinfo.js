const express = require("express");
const router = express.Router();
const doctinfo = require("../Models/Doctorinfo");
const appointment = require("../Models/Appointment");

router.post("/createdoctor", async (req, res) => {
  try {
    const doct = await doctinfo.create({
      name: req.body.name,
      specification: req.body.specification,
      time: req.body.time,
      isActive: req.body.isActive,
    });
    res.json(doct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "This is internal server Error" });
  }
});

router.get("/fetchdoctorsinfo", async (req, res) => {
  try {
    const doctor = await doctinfo.find({});
    res.json(doctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "This is internal server Error" });
  }
});

router.post("/appointment", async (req, res) => {
  try {
    const appoint = await appointment.create({
      name: req.body.name,
      date: req.body.date,
      number: req.body.number,
      tokenNumber: req.body.tokenNumber,
      problem: req.body.problem,
    });
    res.json(appoint);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "This is internal server Error" });
  }
});
module.exports = router;
