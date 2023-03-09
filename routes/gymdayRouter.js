const express = require('express');
const Gymday = require('../models/gymday');

const gymdayRouter = express.Router();

gymdayRouter.route('/')
.get((req, res, next) => {
    Gymday.find()
    .then(gymdays => {
        res.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(gymdays);
    })
    .catch(err => next(err))
})
.post((req, res, next) => {
    Gymday.create(req.body)
    .then(note => {
        res.status = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(note);
    })
    .catch(err => next(err))
})

module.exports = gymdayRouter;
