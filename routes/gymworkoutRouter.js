const express = require('express');
const Gymworkout = require('../models/gymworkout');

const gymworkoutRouter = express.Router();

gymworkoutRouter.route('/')
.get((req, res, next) => {
    Gymworkout.find()
    .then(gymWorkouts => {
        res.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(gymWorkouts);
    })
    .catch(err => next(err))
})
.post((req, res, next) => {
    Gymworkout.create(req.body)
    .then(note => {
        res.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(note);
    })
    .catch(err => next(err))
})

module.exports = gymworkoutRouter;