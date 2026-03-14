import mongoose from "mongoose";

const SetSchema = new mongoose.Schema({
  weight: Number,
  reps: Number
});

const ExerciseSchema = new mongoose.Schema({
  name: String,
  sets: [SetSchema]
});

const WorkoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [ExerciseSchema]
});

export default mongoose.model("Workout", WorkoutSchema);