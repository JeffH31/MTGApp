const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require('./models/user');

const app = express();

mongoose.connect('mongodb://localhost/deck-builder')
  .then(() => {
    console.log('Connected to deck-builder database');
  })
  .catch(() => {
    console.log('Connection failed');
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
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

async function createUser(newUser) {
  // Assign the values
  const user = new User({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    username: newUser.username,
    password: newUser.password,
    email: newUser.email
  });

  // Check to see if username is taken already
  const userUsername = await User.find({ username : newUser.username });

  if (userUsername.length > 0)
    return ({ err: 'This username is already taken.'});

  // Check to see if email is already linked to another account
  const userEmail = await User.find({ email: newUser.email });

  if (userEmail.length > 0 )
    return ({ err: 'The email provided is already linked to another account' });

  // Display an alert
  const result = await user.save();
  console.log(result);
}

async function validateUserCredentials(enteredUser) {
  // Assign the form values to variables
  const username = enteredUser.username;
  const password = enteredUser.password;

  // Query for the user with the entered username
  const user = await User.find({ username: username })
  .limit(1)
  .select({ username, password });

  // Check if a user is found
  if (user.length < 1)
    return ({ err: 'No account with that username found. Please check the spelling and try again.' });

  // Check if the passwords match
  if (user.password === password)
    return// Redirect to account page
}

async function deleteUser (username) {
  // Find user with entered username
  const user = await User.find({ username: username });

  // If the username isn't found return
  if (!user.username) return;

  // Delete the user with the entered username
  const result = await User.deleteOne({ username: username });
  console.log(result);
}

async function editUser(editedUser) {
  const oldUsername = editedUser.oldUsername;

  // Find user to be updated usingtheir old username
  const user = await User.find({ username: oldUsername });

  // Check if user exists
  if (!user) return;

  // Update user's values
  user.set({
    firstName: editedUser.firstName,
    lastName: editedUser.lastName,
    username: editedUser.username,
    password: editedUser.password,
    email: editedUser.email
  });

  // Alert the user of the update
  console.log('Profile updated');
}

module.exports = app;
