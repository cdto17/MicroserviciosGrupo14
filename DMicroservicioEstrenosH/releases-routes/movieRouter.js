const express = require('express');
const {
  getMovies
} = require('../releases-controllers/movieController');
const router = express.Router();

router.get('/movies', getMovies);

module.exports = router;
