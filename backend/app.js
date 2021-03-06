const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require('./models/user');
const Deck = require('./models/deck');

const app = express();

mongoose.connect('mongodb://localhost/deck-builder', { useNewUrlParser: true })
 .then(() => {
   console.log('Connected to deck-builder database!');
 })
 .catch(() => {
   console.log('Connection failed!');
 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Create
app.post("/api/users", (req, res, next) => {
  console.log('in users post method from app.js');
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  user.save().then(createdUser => {
    res.status(201).json({
      message: "User added successfully",
      userId: createdUser._id
    });
  });
});

app.post("/api/decks", (req, res, next) => {
  console.log('in decks post method for app.js');
  const deck = new Deck({
    deckName: req.body.deckName,
    creatorUsername: req.body.creatorUsername,
    cards: req.body.cards
  });
  deck.save().then(createdDeck => {
    res.status(201).json({
      message: "Deck successfully added.",
      deckId: createdDeck._id
    });
  });
});

// Update
app.put("/api/users/:id", (req, res, next) => {
  const user = new User({
    _id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  User.updateOne({ _id: req.params.id }, user).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

// Get all
app.get("/api/users", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});

app.get("/api/decks/:username", (req, res, next) => {
  Deck.find({ creatorUsername: req.params.username }).then(documents => {
    if (documents) {
      console.log('found decks: ' + documents);
      res.status(200).json({
        message: "Decks fetched successfully!",
        decks: documents
      });
    } else {
      console.log('no decks found');
      res.status(404).json({ messaage: 'Decks not found' });
    }
  });
});

// Get one
app.get("/api/users/:username", (req, res, next) => {
  console.log('req.params.username: ' + req.params.username);
  User.find({ username: req.params.username }).then(user => {
    if (user) {
      console.log('found username match' + user);
      res.status(200).json(user);
    } else  {
      console.log('no match found');
      res.status(404).json({ message: 'User not found!' });
    }
  });
});

// Delete
app.delete("/api/users/:id", (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "User deleted!" });
  });
});

module.exports = app;
