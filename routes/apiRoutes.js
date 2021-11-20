const Router = require('express').Router();
const db = require('../db/db.json')



//display notes
Router.get('/api/notes', (req, res) => {
    res.status(200).json(db);
});


//create new notes
Router.post('/api/notes', (req, res) => {
    console.log(req.body)
    let parse = JSON.parse(JSON.stringify(db))
    parse.push(req.body)
console.log("parse", parse)
    // noteArr.push(req.body)
    const response = {
        status: 'success'
    };
    res.status(201).json(response);
});


module.exports = Router;