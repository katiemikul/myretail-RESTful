const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

//GET route for myretail database
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "products"`)
    .then((results) => {
        res.send(results.rows)
        console.log(results)
    })
    .catch((error) => {
        console.log('error with GET to /products', error);
    });
});


module.exports = router;