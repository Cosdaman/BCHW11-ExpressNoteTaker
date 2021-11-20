const Router = require('express').Router();
const db = require('../db/db.json')

Router.get('/api/notes', (req, res) => {
    res.status(200).json(db);
});

module.exports = Router;