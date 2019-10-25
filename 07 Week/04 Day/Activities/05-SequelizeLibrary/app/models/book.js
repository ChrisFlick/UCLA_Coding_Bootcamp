// Dependencies
// =============================================================

// Require the sequelize library
const Sequelize = require('sequelize')
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection')
// Create a "Book" model with the following configuration





const Book = sequelize.define('book', {
    title: Sequelize.STRING, // 1. A title property of type STRING
    author: Sequelize.STRING, // 2. An author property of type STRING
    genre: Sequelize.STRING, // 3. A genre property of type STRING
    pages: Sequelize.INTEGER // 4. A pages property of type INTEGER
})

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;
