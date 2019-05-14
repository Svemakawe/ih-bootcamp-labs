const mongoose = require('mongoose');
const data = require('./data.js');
const Recipe = require('./models/Recipe.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch((err) => {
    console.error('Error connecting to mongo', err);
  });

function recipeCreate() {
  Recipe.create(
    {
      title: 'Lumberjack',
      level: 'Easy Peasy',
      ingredients: ['ingr1', 'ingr2', 'ingr3'],
      cuisine: 'recipeCountry',
      dishType: 'Dish',
      image: 'http://image.address',
      duration: 10,
      creator: 'Henrique',
    },
  )
    .then((res) => {
      console.log(`${res.title} recipe created`);
    })
    .catch((err) => {
      console.log(err);
    });
}

function insertMany() {
  Recipe.insertMany(data)
    .then((res) => {
      const recipesArray = [];
      res.forEach(e => recipesArray.push(e.title));
      console.log(`Recipes ${recipesArray} created`);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateOneDuration(recTitle, recDuration) {
  Recipe.updateOne({ title: recTitle }, { duration: recDuration })
    .then(() => {
      console.log('Update Sucessful');
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeOneRecipe(recTitle) {
  Recipe.deleteOne({ title: recTitle })
    .then(() => {
      console.log('Data sucessfully removed!');
    })
    .catch((err) => {
      console.log(err);
    });
}

function closeDadatase() {
  mongoose.connection.close()
    .then(() => {
      console.log('Database closed!');
    })
    .catch((err) => {
      console.log(err);
    });
}


mongoose.connection.on('connected', () => {
  recipeCreate();
  insertMany();
  // updateOneDuration();
  // removeOneRecipe();
  // closeDadatase();
});
