const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  stars: [{
    type: Schema.Types.ObjectId,
    ref: 'Celeb',
  }],
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
