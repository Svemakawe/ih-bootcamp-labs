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
  return new Promise((resolve, reject) => {
    Recipe.create(
      {
        title: 'Recipe 1',
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
        resolve(res.title);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function insertMany() {
  return new Promise((resolve, reject) => {
    Recipe.insertMany(data)
      .then((res) => {
        const recipesArray = [];
        res.forEach(e => recipesArray.push(e.title));
        resolve(recipesArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function updateOneDuration(recTitle, recDuration) {
  return new Promise((resolve, reject) => {
    Recipe.updateOne({ title: recTitle }, { duration: recDuration })
      .then(() => {
        resolve('Update Sucessful');
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function removeOneRecipe(recTitle) {
  return new Promise((resolve, reject) => {
    Recipe.deleteOne({ title: recTitle })
      .then(() => {
        resolve('Data sucessfully removed!');
      })
      .catch((err) => {
        reject(err);
      });
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
  recipeCreate()

    .then((res) => {
      console.log(`Recipe ${res} created`);
      insertMany()

        .then((resp) => {
          console.log(`Recipes ${resp} created`);
          updateOneDuration('Rigatoni alla Genovese', 100)

            .then((respo) => {
              console.log(respo);
              removeOneRecipe('Carrot Cake')

                .then((respon) => {
                  console.log(respon);
                  closeDadatase();
                })
                .catch((e) => {
                  console.log('error to remove recipe', e);
                });
            })
            .catch((er) => {
              console.log('error during recipe update', er);
            });
        })
        .catch((err) => {
          console.log('error to resolve promisse InsertManyRecipes', err);
        });
    })
    .catch((erro) => {
      console.log('error to resolve promisse createNewRecipe', erro);
    });
});
