const cors = require('cors');
const express = require('express');
const bookmarksController = require('./controllers/bookmarkController');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/bookmarks', bookmarksController);

app.get('/', (req, res) => {
    res.send('Welcome to the Bookmarks App!');
});

app.get('*', (req, res) => {
    res.status(404).send('Page not found.');
});

module.exports = app;