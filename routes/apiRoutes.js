const Router = require('express').Router();
const fs = require('fs');

//display notes
Router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
        res.status(200).json(JSON.parse(data));
    });
});

//create new notes
Router.post('/api/notes', (req, res) => {
    let db = [];
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        {
            db = JSON.parse(data);
            db.push(req.body)
            let i = 0;
            db.forEach(element => {
                element.id = i;
                i++;
            });
            db = JSON.stringify(db)
            fs.writeFile(
                "./db/db.json",
                db,
                (err) => err ? console.error(err) : res.send("ok")
            )
        }
    });

});

Router.delete('/api/notes/:id', function (req, res) {
    console.log(req.params)
    res.send('Got a DELETE')
})

module.exports = Router;