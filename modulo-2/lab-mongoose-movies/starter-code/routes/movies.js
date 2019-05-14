/* eslint-disable object-curly-newline */
const express = require('express');
const Movies = require('../models/Movie.js');
const Celebrities = require('../models/Celebrity.js');

const router = express.Router();

router.get('/', (req, res) => {
  Movies.find()
    .then((movies) => {
      res.render('./movies/movies', { movies });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/detail/:id', (req, res) => {
  const { id } = req.params;
  Movies.findOne({ _id: id })
    .populate('stars')
    .then((movie) => {
      res.render('./movies/movie-detail', { movie });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/add', (req, res) => {
  Celebrities.find()
    .then((celebs) => {
      res.render('./movies/movie-add', { celebs });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.post('/add', (req, res) => {
  const { title, genre, plot, stars } = req.body;
  const newMovie = new Movies({ title, genre, plot, stars });
  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/delete/:id', (req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id })
    .then((movie) => {
      res.render('./movies/movie-edit', { movie });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.post('/edit/:id', (req, res) => {
  const { title, genre, plot } = req.body;
  Movies.findOneAndUpdate({ _id: req.params.id }, { $set: { title, genre, plot } })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      throw Error(err);
    });
});

module.exports = router;
