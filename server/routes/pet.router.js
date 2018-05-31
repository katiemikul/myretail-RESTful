const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// This route *should* return the logged in users pets
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        let queryText = `SELECT * FROM "pet" WHERE person_id = $1`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
    console.log('/pet GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    
});

// This route *should* add a pet for the logged in user
router.post('/', (req, res) => {
    console.log('/pet POST route');
    console.log(req.body);
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    // res.sendStatus(200);
    if(req.isAuthenticated()) {
        // MAKE POST REQUEST
        let queryText = `INSERT INTO "pet" ("firstname", "person_id")
                        VALUES ($1, $2)`;
        pool.query(queryText, [req.body.firstname, req.user.id])
        .then( (result)  => {
            res.sendStatus(201);
        })
        .catch ( (err) => {
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;