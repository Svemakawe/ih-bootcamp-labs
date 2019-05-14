
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {
  punkAPI.getBeers()
    .then((beers) => {
      res.render('beers', { beers });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/random-beers', (req, res) => {
  punkAPI.getRandom()
    .then((beers) => {
      res.render('randomBeer', { beers });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log('App Listening on PORT 3000!');
});
