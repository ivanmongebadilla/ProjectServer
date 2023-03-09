const express = require('express');
const Crossfitday = require('../models/crossfitday');

const crossfitdayRouter = express.Router();

crossfitdayRouter.route('/')
.get((req, res, next) => {
    Crossfitday.find()
    .then(crossfitDays => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(crossfitDays);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Crossfitday.create(req.body)
    .then(note => {
        console.log('CrossfitDay created ', note);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(note);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /crossfitDays');
})
.delete((req, res, next) => {
    Crossfitday.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response);    
    })
    .catch(err => next(err));
});

module.exports = crossfitdayRouter;