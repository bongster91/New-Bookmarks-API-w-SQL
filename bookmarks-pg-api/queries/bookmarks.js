const db = require('../db/dbConfig');

const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any('SELECT * FROM bookmarks');
        return allBookmarks;
    } catch (err) {
        return err;
    }
};

module.exports = {
    getAllBookmarks,
};