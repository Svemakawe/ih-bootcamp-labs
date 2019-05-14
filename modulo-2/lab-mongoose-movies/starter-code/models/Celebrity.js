const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Celebrity = mongoose.model('Celeb', celebSchema);
module.exports = Celebrity;
