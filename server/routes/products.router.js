const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

//Get route for API
router.get('/', (req, res) => {
        axios({
            method: 'GET',
            url: ` http://redsky.target.com/v2/pdp/tcin/13860428?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics`,
            params: {}
        })
        .then((results) => {
            res.send(results.rows)
            console.log(results.data)
        })
        .catch((error) => {
            console.log('error with GET to API', error);
        });
    });

module.exports = router;