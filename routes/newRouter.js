const express = require('express');
const New = require('../models/new');

const newRouter = express.Router();

newRouter.route('/')
.get((req, res, next) => {
    New.find()
    .then(news => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(news);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    New.create(req.body)
    .then(note => {
        console.log('Partner created ', note);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(note);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /news');
})
.delete((req, res, next) => {
    New.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(response);    
    })
    .catch(err => next(err));
});

module.exports = newRouter;