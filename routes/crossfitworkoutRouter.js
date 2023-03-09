const express = require('express');
const Crossfitworkout = require('../models/crossfitworkout');

const crossfitworkoutRouter = express.Router();

crossfitworkoutRouter.route('/')
.get((req, res, next) => {
    Crossfitworkout.find()
    .then(crossfitWorkouts => {
        req.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(crossfitWorkouts);
    })
    .catch( err => next(err))
})
.post((req, res, next) => {
    Crossfitworkout.create(req.body)
    .then(note => {
        res.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(note);
    })
    .catch(err => next(err))
})

module.exports = crossfitworkoutRouter;