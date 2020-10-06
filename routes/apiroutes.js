const Workout = require("../models/workout")

module.exports = function(app){
    app.get("/api/workouts", function(req,res){
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.post("/api/workouts", function(req, res) {
        Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.status(400).json(err);
        })
    });

    app.get("/api/workouts/range", function(req,res){
        Workout.create({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
}