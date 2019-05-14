const express = require('express');
const Celebrities = require('../models/Celebrity.js');

const router = express.Router();

router.get('/', (req, res) => {
  Celebrities.find()
    .then((celebs) => {
      res.render('./celebrities/celebrities', { celebs });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/detail/:id', (req, res) => {
  const { id } = req.params;
  Celebrities.findOne({ _id: id })
    .then((celeb) => {
      res.render('./celebrities/celebrity-detail', { celeb });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/add', (req, res) => {
  res.render('./celebrities/celebrity-add');
});

router.post('/add', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCeleb = new Celebrities({ name, occupation, catchPhrase });
  newCeleb.save()
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/delete/:id', (req, res) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.get('/edit/:id', (req, res) => {
  Celebrities.findOne({ _id: req.params.id })
    .then((celeb) => {
      res.render('./celebrities/celebrity-edit', { celeb });
    })
    .catch((err) => {
      throw Error(err);
    });
});

router.post('/edit/:id', (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.findOneAndUpdate({ _id: req.params.id }, { $set: { name, occupation, catchPhrase } })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((err) => {
      throw Error(err);
    });
});

module.exports = router;
