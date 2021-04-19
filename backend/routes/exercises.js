const express = require("express");

const router = express.Router();
const Exercises = require("../models/exercise");


router.get("/", async (req, res) => {
    try {
      const exercises = await Exercises.find();
      res.json(exercises);
    } catch (err) {
      res.send(err.message);
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


  router.get("/:exercisesId", async (req, res) => {
    try {
      const exercises = await Exercises.findById(req.params.exercisesId);
      res.json(exercises);
    } catch (err) {
      res.send(err.message);
    }
  });

  router.delete("/:exercisesId", async (req, res) => {
    try {
      const oldexercises = await Exercises.deleteOne({ _id: req.params.exercisesId });
      res.json(oldexercises);
    } catch (err) {
      res.send(err.message);
    }
  });


  router.patch("/:exercisesID", async (req, res) => {
    try {
      const updatedexercises = await Exercises.updateMany(
        { _id: req.params.exercisesID },
        { $set: { username: req.body.username},
        $set: { description: req.body.description},
        $set: { duration: req.body.duration}
           }
      );
      res.json(updatedexercises);
    } catch (eror) {
      res.json(eror);
    }
  });

  
  module.exports=router;
