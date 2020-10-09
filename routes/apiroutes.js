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

    app.put("/api/workouts/:id", function(req, res){
        Workout.findByIdAndUpdate(
            req.params.id,
            {$push: {
                exercises: req.body
            }}
        ).then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })

    app.post("/api/workouts", function(req, res) {
        Workout.create(req.body)
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