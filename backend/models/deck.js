const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
  deckName: String,
  creatorUsername: String,
  cards: [{
    name: String,
    copies: Number
  }]
});

module.exports =  mongoose.model('Deck', deckSchema);