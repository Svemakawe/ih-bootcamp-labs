const express = require('express');
const User = require('../models/user');
const LaundryPickup = require('../models/laundry-pickup');

const router = express.Router();

// Middleware
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
    return;
  }

  res.redirect('/login');
});

// Routes
// Dashboard GET route
router.get('/dashboard', (req, res, next) => {
  let query;
  if (req.session.currentUser.isLaunderer) {
    query = { launderer: req.session.currentUser.id };
  } else {
    query = { user: req.session.currentUser.id };
  }
  LaundryPickup
    .find(query)
    .populate('user', 'name')
    .populate('launderer', 'name')
    .sort('pickupDate')
    .exec((err, pickupDocs) => {
      if (err) {
        next(err);
        return;
      }
      res.render('laundry/dashboard', {
        pickups: pickupDocs
      });
    });
});

// Launderers registration GET & POST route
router.get('/launderers', (req, res, next) => {
  User.find({ isLaunderer: true }, (err, launderersList) => {
    if (err) {
      next(err);
      return;
    }
    res.render('laundry/launderers', {
      launderers: launderersList
    });
  });
});

router.post('/launderers', (req, res, next) => {
  const userId = req.session.currentUser.id;
  const laundererInfo = {
    fee: req.body.fee,
    isLaunderer: true
  };
  User.findByIdAndUpdate(userId, laundererInfo, { new: true }, (err, theUser) => {
    if (err) {
      next(err);
      return;
    }
    req.session.currentUser = theUser;
    res.redirect('/dashboard');
  });
});

router.get('/launderers/:id', (req, res, next) => {
  const laundererId = req.params.id;
  User.findById(laundererId, (err, theUser) => {
    if (err) {
      next(err);
      return;
    }
    res.render('laundry/launderer-profile', {
      theLaunderer: theUser
    });
  });
});

router.post('/laundry-pickups', (req, res, next) => {
  const pickupInfo = {
    pickupDate: req.body.pickupDate,
    launderer: req.body.laundererId,
    user: req.session.currentUser.id
  };
  const thePickup = new LaundryPickup(pickupInfo);
  thePickup.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/dashboard');
  });
});

module.exports = router;
