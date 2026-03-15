import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import workouts from "./routes/workouts.js";

dotenv.config();

const app = express();

app.use(express.json());
app.get("/", (req,res)=>{
  res.send("API running");
});
app.use(cors({
  origin: "https://strength-ttt.netlify.app"
}));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });

})
.catch(err => console.error(err));

app.use("/api/workouts", workouts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on ${PORT}`)
);