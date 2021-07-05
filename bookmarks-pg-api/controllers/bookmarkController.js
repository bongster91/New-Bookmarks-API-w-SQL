const express = require('express');
const bookmarks = express.Router();
const { getAllBookmarks } = require('../queries/bookmarks');

bookmarks.get('/', async (req, res) => {
    const allBookmarks = await getAllBookmarks();
    res.json(allBookmarks);
});

module.exports = bookmarks;