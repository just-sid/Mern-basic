const express = require("express");

const router = express.Router();
const Exercises = require("../models/exercise");


router.get("/", async (req, res) => {
    try {
      const exercises = await Exercises.find();
      res.json(exercises);
    } catch (err) {
      res.send(error.message);
    }
  });


  router.post("/add", async (req, res) => {
    const exercises = new Exercises({
      username: req.body.username,
      description: req.body.description,
      duration: Number(req.body.duration),
    });
  
    try {
      const newExercises= await exercises.save();
      res.send('Exercise added');
      res.json(newExercises);
    } catch (err) {
      res.json({ message: err });
    }
  });

  module.exports=router;