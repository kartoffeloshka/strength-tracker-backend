import express from "express";
import Workout from "../models/Workout.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const workout = new Workout(req.body);
    const saved = await workout.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const workouts = await Workout
      .find()
      .sort({ date: -1 })
      .limit(20);

    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;