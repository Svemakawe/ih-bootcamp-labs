const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity.js');
const Movie = require('../models/Movie.js');

const dbName = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Lady Gaga',
//     occupation: 'Singer',
//     catchPhrase: 'Gaga Uh Lala',
//   },
//   {
//     name: 'Keanu Reaves',
//     occupation: 'Actor',
//     catchPhrase: 'The Matrix is Real',
//   },
//   {
//     name: 'Robert Downey Jr',
//     occupation: 'Actor',
//     catchPhrase: 'I am the Iron Man',
//   },
// ];

const movies = [
  {
    title: 'The Matrix',
    genre: 'Fiction',
    plot: 'Best Movie Ever!',
  },
  {
    title: 'Born a Star',
    genre: 'Musical',
    plot: 'Oscar Winner',
  },
  {
    title: 'American Pie',
    genre: 'Commedy',
    plot: 'Just a Funny American Movie',
  },
];

Movie.create(movies, (err) => {
  if (err) {
    throw (err);
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
